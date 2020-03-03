"use strict";

// Класс
function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize;
}

// Метод
DomElement.prototype.makeElem = function (str) {
    let element = document.getElementsByTagName('body');

    // let elemText = this.selector.slice(1);
    // console.log(elemText);
    if (this.selector[0] === '.') {
        element = document.createElement('div');
        element.classList.add('block');
    } else if (this.selector[0] === '#') {
        element = document.createElement('p');
        element.id = 'best';
    }
    element.textContent = str;

    console.log(element);

    document.body.appendChild(element);
    element.style.cssText = `
        background-color: ${this.bg};
        height: ${this.height}px;
        width: ${this.width}px;
        font-size: ${this.fontSize}px;
    `;

    // 'height: ' + this.height + ';
    // width: this.width;
    // background: this.bg;
    // font - size: this.fontSize;

};



// передаем параметры
let DomElementOne = new DomElement(
    '.onetext',
    100,
    200,
    'red',
    14
);
let DomElementTwo = new DomElement(
    '#twotext',
    100,
    200,
    'yellow',
    14
);

DomElementOne.makeElem('fgbdfgubjvrt');
DomElementTwo.makeElem('132456450');