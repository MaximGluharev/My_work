class About {
    constructor () {
        this.elem;

    }

    create() {
        const About = document.createElement('div');
        About.classList.add('page');

        About.innerHTML = '<h1>About</h1>';
        
        this.elem = About;


    }

    init() {
        this.create();

        console.log(this.elem);

        return this.elem;

        
    }



}

const about = new About().init();
export default about;