
class Product {
    constructor(product, img='https://placehold.it/100x50') {
        let {title,price,id}=product;
        this.title=title;
        this.img=img;
        this.price=price;
        this.id=id;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}" alt="${this.title}">       
                <h3>${this.title}</h3>
                       <p>${this.price}</p>
                       <button class="btn-buy">Купить</button>
                   </div>`;  
    }
}

class ProductList {
    constructor(container='.products') {
        this.data=[];
        this.products=[];
        this.container=document.querySelector(container);
        this._fetchData();
        this._render();
    }

    _fetchData() {
        this.data = [
            { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Keyboard', price: 200 },
    { id: 3, title: 'Mouse', price: 100 },
    { id: 4, title: 'Gamepad', price: 87 },
  ];
    }

    _render() {
        for (let dataEl of this.data) {
            const product = new Product(dataEl);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }

    productsTotalAmount() {
        let sum = 0;
        for (let prodEl of this.products) {
            sum+=prodEl.price;

        }
        return sum;
    }
}

class CartElement {
    constructor() {
        //product товар
        //quantity количество товара
        //price цена товара
        //amount стоимость товара
    }

    calcAmount() {
        //посчитать стоимость продукта в соответствии с количеством
    }
}

class Cart {
    constructor() {
     // productsInCart=[] массив из товаров в корзине
     //cartContainer куда поместим в документе наш список товаров
    }                          
  
    initList() {
        //получить список товаров
    }

    renderCart() {
        //вывести список товаров в корзине
    }

    calcTotalAmount() {
        //посчитать стоимость корзины
    }

    deleteElFromCart() {
        //удалить товар из корзины
    }
    
}

const List = new ProductList();
console.log(List.productsTotalAmount());

