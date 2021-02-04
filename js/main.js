const API='https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getData=(url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('error');
            } else {
                cb(xhr.responseText);
            }
        }
    }
}

class Product {
    constructor(product, img='https://placehold.it/100x50') {
        let {product_name,price,id_product}=product;
        this.title=product_name;
        this.img=img;
        this.price=price;
        this.id=id_product;
    }
    render() {
        this.rendered = true;
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
        this._fetchData()
            .then(() => this._render());
        //this.rendered = false;
       // this._render();
    }

    calcSum() {
        return this.products.reduce((accum, item) => accum += item.price, 0);
      }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
          .then(result => result.json())
          .then(data => {
              this.data=data;
              for (let dataEl of this.data) {
                const product = new Product(dataEl);
                this.products.push(product);
              }
          })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }
            this.container.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

class CartElement {
    constructor(product,qty=1) {
        let {product_name,price,id_product}=product;
        this.title=product_name;
        this.img=img;
        this.price=price;
        this.id=id_product;
        
        
        //product товар
        //quantity количество товара
        //price цена товара
        //amount стоимость товара
    }

    //calcAmount() {
        //посчитать стоимость продукта в соответствии с количеством
 //   }
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
console.log(List.calcSum());

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  document.querySelector('btn-buy').onclick=function(){
      document.querySelector('modal_content').insertAdjacentHTML('beforeend', `<div>new element</div>`);
  };