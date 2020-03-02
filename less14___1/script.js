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
DomElement.prototype.makeElem = function () {
    let element = document.getElementsByTagName('body');

    let elemText = this.selector.split();
    console.log(this.selector);
    if (this.selector[0] === '.') {
        element = document.createElement('div');
        element.classList.add('block');
        element.textContent = '12345678';
    } else if (this.selector[0] === '#') {
        element = document.createElement('p');
        element.id = 'best';
        element.textContent = 'sadsfgdhf';
    }

    console.log(element);

    document.body.appendChild(element);
    // const _this = this;
    element.style.cssText = `
    background-color: red;
    height: 100px;
    width: 250px;
    font-size: 14px;
    `;

    // height: this.height;
    // width: this.width;
    // background: this.bg;
    // font - size: this.fontSize;
    // `;
};



// передаем параметры
let DomElementOne = new DomElement(
    '.onetext',
    '100px',
    '200px',
    'red',
    '14px'
);
let DomElementTwo = new DomElement(
    '#twotext',
    '100px',
    '200px',
    'yellow',
    '14px'
);

DomElementOne.makeElem();
DomElementTwo.makeElem();