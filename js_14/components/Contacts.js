class Contacts {
    constructor () {
        this.elem;

    }

    create() {
        const Contacts = document.createElement('div');
        Contacts.classList.add('page');

        Contacts.innerHTML = '<h1>Contacts</h1>';
       

        this.elem = Contacts;


    }

    init() {
        this.create();

        console.log(this.elem);

        return this.elem;

        
    }



}

const contacts = new Contacts().init();
export default contacts;