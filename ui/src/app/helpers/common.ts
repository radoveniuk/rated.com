// import { upperFirst, isEmpty, lowerFirst } from 'lodash-es';

// export function transformPlainObjectToArray (object, keyName, valueName, localizer = null) {
//   const newArray = [];
//   Object.keys(object).forEach((keyObj) => {
//     newArray.push({
//       [keyName]: keyObj,
//       [valueName]: !!localizer && !!localizer[object[keyObj]] ? localizer[object[keyObj]] : object[keyObj],
//     });
//   });

//   return newArray;
// }

// export function sortArrayOfObjects (arr, keyName, order = 'asc') {
//   function compare (a, b) {
//     if (a[keyName] < b[keyName]) {
//       return order === 'asc' ? -1 : 1;
//     }
//     if (a[keyName] > b[keyName]) {
//       return order === 'asc' ? 1 : -1;
//     }
//     return 0;
//   }

//   return arr.sort(compare);
// }

export function getUrlParams (url: string) {
  let params: any = {};
  `${url}?`.split('?')[1].split('&').forEach((pair) => {
    let updatePair: any = pair;
    updatePair = `${updatePair}=`.split('=').map(decodeURIComponent);
    const pairKey = updatePair[0];
    if (pairKey) {
      let pairValue = updatePair[1];
      if (pairValue === 'true' || pairValue === 'false') {
        pairValue = pairValue === 'true';
      }
      params = {
        ...params,
        [pairKey]: pairValue,
      };
    }
  });
  return params;
}

// export function stripTags (htmlText) {
//   const temporalDivElement = window.document.createElement('div');
//   temporalDivElement.innerHTML = htmlText;
//   return temporalDivElement.textContent || temporalDivElement.innerText || '';
// }

// export function round (value, decimals = 2) {
//   const roundValue = Math.round(`${value}e${decimals}`);
//   return Number(`${roundValue}e-${decimals}`);
// }

// export function generateUniqueHash (length = 15) {
//   return `${Date.now().toString(36)}${Math.random().toString(36).substr(0, length)}`.toLowerCase();
// }

// export function getKeyByValue (obj, value) {
//   return Object.keys(obj).find((key) => obj[key] === value);
// }

// export function capitalizeObjectKeys (objectEl) {
//   const newObject = Array.isArray(objectEl) ? [] : {};
//   if (typeof objectEl === 'object') {
//     Object.keys(objectEl).forEach((objKey) => {
//       if (isEmpty(objectEl[objKey]) || typeof objectEl[objKey] === 'string') {
//         newObject[upperFirst(objKey)] = objectEl[objKey];
//       } else {
//         newObject[upperFirst(objKey)] = capitalizeObjectKeys(objectEl[objKey]);
//       }
//     });
//   }

//   return newObject;
// }

// export function lowerizeObjectKeys (objectEl) {
//   const newObject = Array.isArray(objectEl) ? [] : {};
//   if (typeof objectEl === 'object') {
//     Object.keys(objectEl).forEach((objKey) => {
//       if (isEmpty(objectEl[objKey]) || typeof objectEl[objKey] === 'string') {
//         newObject[lowerFirst(objKey)] = objectEl[objKey];
//       } else {
//         newObject[lowerFirst(objKey)] = lowerizeObjectKeys(objectEl[objKey]);
//       }
//     });
//   }

//   return newObject;
// }

// export const convertArrayToObject = (array) => array.reduce(
//   (obj, item) => ({
//     ...obj,
//     ...item,
//   }),
//   {},
// );

// function timeout (ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// export async function sleep (fn, time, ...args) {
//   await timeout(time);
//   return fn(...args);
// }

// export const arrayMovePosition = (arrayItems, from, to) => {
//   const array = [...arrayItems];
//   const startIndex = from < 0 ? array.length + from : from;

//   if (startIndex >= 0 && startIndex < array.length) {
//     const endIndex = to < 0 ? array.length + to : to;

//     const [item] = array.splice(from, 1);
//     array.splice(endIndex, 0, item);
//   }

//   return array;
// };

// export const encodeParams = (object) => {
//   let encodedString = '';
//   for (const prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       if (encodedString.length > 0) {
//         encodedString += '&';
//       }
//       encodedString += encodeURI(`${prop}=${object[prop]}`);
//     }
//   }
//   return encodedString;
// };

// export const copyToClipboard = (str) => {
//   const el = document.createElement('textarea');
//   el.value = str;
//   el.setAttribute('readonly', '');
//   el.style.position = 'absolute';
//   el.style.left = '-9999px';
//   document.body.appendChild(el);
//   const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);
//   if (selected) {
//     document.getSelection().removeAllRanges();
//     document.getSelection().addRange(selected);
//   }
// };

// export const rasterizeSvgToPng = (svgString) => new Promise((resolve) => {
//   try {
//     const domUrl = window.URL || window.webkitURL || window;

//     let svgText = svgString;
//     let match = svgText.match(/height="(\d+)/m);
//     const height = match && match[1] ? parseInt(match[1], 10) : 200;
//     match = svgText.match(/width="(\d+)/m);
//     const width = match && match[1] ? parseInt(match[1], 10) : 200;

//     if (!svgText.match(/xmlns="/mi)) {
//       svgText = svgText.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
//     }

//     const canvas = window.document.createElement('canvas');
//     canvas.width = height;
//     canvas.height = width;
//     const ctx = canvas.getContext('2d');
//     const svg = new Blob([svgText], {
//       type: 'image/svg+xml;charset=utf-8',
//     });

//     const url = domUrl.createObjectURL(svg);

//     const img = new Image();

//     // eslint-disable-next-line func-names
//     img.onload = function () {
//       ctx.drawImage(this, 0, 0);
//       domUrl.revokeObjectURL(url);

//       resolve(canvas.toDataURL('image/png'));
//     };
//     img.src = url;
//   } catch (err) {}
// });
