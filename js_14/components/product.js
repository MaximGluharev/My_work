class Product {
    constructor () {
        this.elem;

    }

    create() {
        const product = document.createElement('div');
        product.classList.add('page');

        let id = location.hash;
        id = id.split('/');
        id = parseInt(id.pop());

        let localData = localStorage.getItem('localData');
        if (localData && localData.length > 0) localData = JSON.parse(localData);

        let productData = null;

        if (localData) {
            productData = localData.find(product => {
                return product.id == id;
            });
        }

        console.log(productData);
        product.innerHTML = `<h1>${productData.title}</h1> 
        <div><img src="${productData.image}"></div>
        <div>${productData.description}<div>
        <div>$${productData.price}<div>
        <div>${productData.category}<div>
        <div class="item_control plus">+</div>
        <div class="item_current">1</div>
        <div class="item_control minus">-</div>
        <button class="btn_add">Добавить в корзину</button>`;
        
        

        this.elem = product;
    }

    init() {
        this.create();

        console.log(this.elem);

        return this.elem;

        
    }



}

const product = new Product().init();
export default product;