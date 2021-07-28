const { inputRequired } = require('./utils');

module.exports = (plop) => {
  plop.setGenerator('Default component', {
    prompts: [
      {
        type: 'list',
        name: 'type',
        choices: [ "Component", "Context Provider" ],
      },
      {
        type: 'input',
        name: 'title',
        message: 'Component name?',
        validate: inputRequired('title'),
        when: ({ type }) => type === 'Component'
      },
      {
        type: 'input',
        name: 'title',
        message: 'Container name?',
        default: 'Page',
        validate: inputRequired('title'),
        when: ({ type }) => type === 'Context Provider'
      },
      {
        type: 'confirm',
        name: 'withStyle',
        message: 'Generate style file?',
        default: true,
        when: ({ type }) => type === 'Component'
      },
    ],
    actions: (data) => {
      const pathForGenerate = process.cwd();
      const filesArray = [];
      if(data.type === 'Component') {
        filesArray.push({
          type: 'add',
          path: `${pathForGenerate}/{{kebabCase title}}/index.ts`,
          templateFile: 'templates/component-index-template.txt',
        });
        if (data.withStyle) {
          filesArray.push({
            type: 'add',
            path: `${pathForGenerate}/{{kebabCase title}}/{{properCase title}}.tsx`,
            templateFile: 'templates/component-template.txt',
          });
          filesArray.push({
            type: 'add',
            path: `${pathForGenerate}/{{kebabCase title}}/{{properCase title}}.style.ts`,
            templateFile: 'templates/component-style-template.txt',
          });
        } else {
          filesArray.push({
            type: 'add',
            path: `${pathForGenerate}/{{kebabCase title}}/{{properCase title}}.tsx`,
            templateFile: 'templates/component-without-style-template.txt',
          });
        }
      }

      if(data.type === 'Context Provider') {
        filesArray.push({
          type: 'add',
          path: `${pathForGenerate}/{{kebabCase title}}-provider/{{properCase title}}Provider.js`,
          templateFile: 'templates/context-provider-template.txt',
        });
        filesArray.push({
          type: 'add',
          path: `${pathForGenerate}/{{kebabCase title}}-provider/index.js`,
          templateFile: 'templates/context-provider-index-template.txt',
        });
      }

      return filesArray;
    },
  });
};
