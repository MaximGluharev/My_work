class Header {
    constructor () {
        this.elem;

    }

    create() {
        const Header = document.createElement('header');
        Header.classList.add('header');

        Header.innerHTML = `
            <div class="header__logo">
                <a href="/"><img src="https://via.placeholder.com/150x60" alt="#" /></a>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="/">Store</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#contacts">Contacts</a></li>
                </ul>
            </nav>
            <div class="cart__widget">
                <a href="/#cart">Cart</a>:
                <span>0</span>
            </div>
        `;
        

        this.elem = Header;


    }

    init() {
        this.create();
        return this.elem;

        
    }



}

const header = new Header().init();
export {header};

