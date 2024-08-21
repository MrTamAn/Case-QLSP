class Store{
name;
listProduct;
constructor(name) {
    this.name = name;
    this.getStorage();
}
add(newProduct){
    this.listProduct.push(newProduct)
    this.saveStorage()
}
getList(){
    return this.listProduct
}
getProductByIndex(index){
    let product = this.listProduct[index]
    return product
}

editProduct(i,editProduct){
    this.listProduct[i]=editProduct;
    this.saveStorage()
}
remove(i){
    this.listProduct.splice(i,1);
    this.saveStorage()
}
saveStorage(){
    localStorage.setItem("list", JSON.stringify(this.listProduct))
}
getStorage(){
    let list = JSON.parse(localStorage.getItem("list"))
    if (list == null) {
        this.listProduct=[];
    }else {
        this.listProduct = list;
    }
}
getProductByName(nameSearch){
let list = [];
    for (let i = 0; i < this.listProduct.length; i++) {
        let nameList = this.listProduct[i].name.toLowerCase()
        if(nameList.includes(nameSearch.toLowerCase())){
            list.push(this.listProduct[i])
        }
    }
    return list
}
getProductBySalePrice(minPrice, maxPrice){
    let list = [];
    for (let i = 0; i < this.listProduct.length; i++) {
        let price = this.listProduct[i].salePrice;
        if((price<=maxPrice && price>=minPrice)){
            list.push(this.listProduct[i])
        }
    }
    return list
}

}