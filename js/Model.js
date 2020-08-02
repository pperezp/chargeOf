class Model{
    constructor(){
        this.products = new Array();
    }

    addProduct(product){
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }

    showProducts(){
        console.log("--------------------");
        for(let product of this.products){
            console.log(product);
        }
    }
}