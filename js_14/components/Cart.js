class Cart {
    constructor () {
        this.elem;

    }

    create() {
        const Cart = document.createElement('div');
        Cart.classList.add('cart');

        Cart.innerHTML = '<h1>Корзина</h1>';
        
        this.elem = Cart;


    }

    init() {
        this.create();

        return this.elem;

        
    }



}

const cart = new Cart().init();
export default cart;