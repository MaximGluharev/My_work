import {header} from './Header.js';
import { main } from './Main.js';
import {footer} from './Footer.js';
import './shop.js';



class App {

    constructor() {
        this.elem;

    }


    create() {
        const appElem = document.createElement('div');
        appElem.classList.add('app');
        this.elem = appElem;

    }

    render() {
        const body = document.querySelector('body');
        this.elem.append(header, main, footer);
        body.prepend(this.elem);
        



    }

    init() {
        this.create();
        this.render();



    }

    













}

export default new App().init();