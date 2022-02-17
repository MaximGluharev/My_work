class Footer {
    constructor () {
        this.elem;

    }

    create() {
        const Footer = document.createElement('footer');
        Footer.classList.add('footer');

        const footerElem = document.createElement('div');
        footerElem.classList.add('footer_logo');

        footerElem.innerHTML = '© 2022';
        Footer.append(footerElem);

        

        

        this.elem = Footer;


    }

    init() {
        this.create();
        return this.elem;
    }



}

const footer = new Footer().init();
export {footer};