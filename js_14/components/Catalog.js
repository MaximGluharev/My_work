class Catalog {
    constructor () {
        this.elem;
        this.data = [];
    }

    create() {
        const Catalog = document.createElement('div');
        Catalog.classList.add('page');
        this.elem = Catalog;

        Catalog.innerHTML = '<h1>Catalog</h1>';

        const catalogElem = document.createElement('div');
        catalogElem.classList.add('catalog');
        
        Catalog.append(catalogElem);

        this.render();

        this.data.forEach(product => {
            const productElem = document.createElement('div');
            productElem.classList.add('catalog__product');

            productElem.innerHTML = `
            <img class="catalog__product_image" src="${product.image}" alt="#" />
            <h3 class="catalog__product_title"><a href="#product/${product.id}">${product.title}</a></h3>
            <div class="catalog__product_price">$${product.price}</div>
            <div class="item_control plus">+</div>
            <div class="item_current">1</div>
            <div class="item_control minus">-</div>
            <button class="btn_add">Добавить в корзину</button>
            `;

            catalogElem.append(productElem);
            
            
        });


        return this.elem;

    

    }

    async getData() {
        return await fetch('https://fakestoreapi.com/products')
        .then(response => {
            return response.json();
        })
        .then(result => {
            localStorage.setItem('localData', JSON.stringify(result));
            return result;
        });

        


    }

    async render() {
        
        let localData = localStorage.getItem('localData');
        if (localData && localData.length > 0) localData = JSON.parse(localData);

        this.data = localData || await getData();

        console.log(this.data);


    };

    

    init() {
        this.create();

        console.log(this.elem);
        
        
        return this.elem;

        
        
    }

    

    



}





const catalog = new Catalog().init();



export default catalog;
