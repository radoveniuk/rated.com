### React CLI With Plop.js

## Install Plop.js globally

```bash
npm install -g plop
```

## Add alias in your command line to plopfile.js file with absolute path


# FOR WINDOWS CMD:

1. Open cmd terminal and execute this commands

```bash
doskey react-generate=plop --plopfile {{your absolute path to lams project}}/LAMS/LAMS.WebUI/wwwroot/src/plop-generators/plopfile.js
```

```bash
doskey rg=plop --plopfile {{your absolute path to lams project}}/LAMS/LAMS.WebUI/wwwroot/src/plop-generators/plopfile.js
```


# FOR WINDOWS POWERSHELL:

1. Open profile file Microsoft.PowerShell_profile.ps1
2. Add next lines to the end of this file

```bash
function generateLamsReactComponents {
    plop --plopfile {{your absolute path to lams project}}/LAMS/LAMS.WebUI/wwwroot/src/plop-generators/plopfile.js
}

Set-Alias react-generate generateLamsReactComponents
Set-Alias rg generateLamsReactComponents
```

## Run alias command in your folder. Enjoy!

```bash
    react-generate

    #or

    rg
```
