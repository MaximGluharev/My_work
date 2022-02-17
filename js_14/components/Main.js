
class Main {
    constructor () {
        this.elem;

    }

    create() {
        const main = document.createElement('Main');
        main.classList.add('main');
        this.elem = main;

        window.addEventListener('hashchange', this.routing);

        window.addEventListener('load', (event) => {
            const a = document.querySelectorAll('a[href="/"]');
        
            a.forEach(a => {
                a.addEventListener('click', (event) => {
                    event.preventDefault();

                    window.history.pushState("", "", "/");

                    this.routing();
                })
            })
        });

        this.routing();

        
    }

    routing() {
        let name = location.hash;

        if (!name) name = 'catalog';
        else name = name.replace('#', '');

        if (name.indexOf('product') != -1) {
            name = 'product';
        }

        let cTime = Date.now(); 

        import(`./${name}.js?v=${cTime}`)
        .then(module => {
            main.innerHTML = '';
            main.append(module.default);

            document.title = module.title;
        });

    }
    

    init() {
        this.create();

        return this.elem;
    }



}

const main = new Main().init();
export {main};