let myStore = new Store("mystore");
console.log(myStore);
// let p1 = new Product(1,"Ao", "https://4menshop.com/cache/image/300x400/images/thumbs/2024/08/ao-khoac-varsity-phoi-bo-soc-theu-4men-tennis-club-form-regular-ak059_2_small-18665.jpg", "https://4menshop.com/cache/image/63/images/thumbs/2024/08/ao-khoac-varsity-phoi-bo-soc-theu-4men-tennis-club-form-regular-ak059-18666.jpg", "20$", "20$", "New", "50%");
 //let p2 = new Product(2,"Quan", "https://4menshop.com/cache/image/300x400/images/thumbs/2024/08/quan-short-lung-thun-cai-nut-theu-4tc-form-straight-qs058-mau-trang_2_small-18651.jpg", "https://4menshop.com/cache/image/63/images/thumbs/2024/08/quan-short-kaki-lung-thun-cai-nut-form-regular-qs060-mau-xanh-den-18654.jpg", "15$", "30$", "Old", "30%");
// myStore.add(p1);
//  myStore.add(p2);
function show(){
    let list = myStore.getList();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html += `

    <tr>
        <td>${list[i].id}</td>
        <td>${list[i].name}</td>
        <td><img src="${list[i].image}" alt="" style="width: 100px; height: 100px"></td>
        <td><img src="${list[i].subImage}" alt="" style="width: 50px; height: 50px"></td>
        <td>${list[i].salePrice}</td>
        <td>${list[i].realPrice}</td>
        <td>${list[i].release}</td>
        <td>${list[i].discount}</td>
        <td><button onclick="showFormEdit(${i})" style="width: 100px">Edit</button></td>
        <td><button onclick="remove(${i})" style="width: 100px">Remove</button></td>
        <td><button onclick="addToCart(${i})" style="width: 100px">Add to Cart</button></td>
        
    </tr>
    `
    }
    document.getElementById("tbody").innerHTML = html;
}

show();

function addProduct(){
let id = document.getElementById("id").value
let name = document.getElementById("name").value
let image = document.getElementById("image").value
let subImage = document.getElementById("subImage").value
let salePrice = document.getElementById("salePrice").value
let realPrice = document.getElementById("realPrice").value
let release = document.getElementById("release").value
let discount = document.getElementById("discount").value
    let newProduct = new Product(id,name,image,subImage,salePrice,realPrice,release,discount)
    myStore.add(newProduct)
    window.location = "index.html"
    alert("Thêm thành công" + newProduct.name)
    show()
}
function showFormEdit(i){

    let list = myStore.getProductByIndex(i)
    console.log(list)
    alert("bạn có muốn sửa sản phẩm " + list.name + "?")
let html = ``;
html += `
<input value="${list.id}" id="id">
<input value="${list.name}" id="name">
<input value="${list.image}" id="image">
<input value="${list.subImage}" id="subImage">
<input value="${list.salePrice}" id="salePrice">
<input value="${list.realPrice}" id="realPrice">
<input value="${list.release}" id="release">
<input value="${list.discount}" id="discount">
<button onclick="save(${i})">Lưu</button>`
    document.getElementById("div").innerHTML = html;
}
function save(i){
    console.log("lưu")
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let image = document.getElementById("image").value
    let subImage = document.getElementById("subImage").value
    let salePrice = document.getElementById("salePrice").value
    let realPrice = document.getElementById("realPrice").value
    let release = document.getElementById("release").value
    let discount = document.getElementById("discount").value
    let editProduct = new Product(id,name,image,subImage,salePrice,realPrice,release,discount)
    myStore.editProduct(i,editProduct)
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("image").value= ""
    document.getElementById("subImage").value= ""
    document.getElementById("salePrice").value= ""
    document.getElementById("realPrice").value= ""
    document.getElementById("release").value= ""
    document.getElementById("discount").value= ""
    show()
    location.reload()
}
function remove(i){
    let list = myStore.listProduct
    alert("Bạn có muốn xóa "+ list.name + "?")
    myStore.remove(i)
    show()
}
function searchByName(){

    let nameSearch = document.getElementById("search").value;
    let searchByNameResult = myStore.getProductByName(nameSearch)

    let html = ``;
    for (let i = 0; i < searchByNameResult.length; i++) {
        html += `

    <tr>
        <td>${searchByNameResult[i].id}</td>
        <td>${searchByNameResult[i].name}</td>
        <td><img src="${searchByNameResult[i].image}" alt="" style="width: 100px; height: 100px"></td>
        <td><img src="${searchByNameResult[i].subImage}" alt="" style="width: 50px; height: 50px"></td>
        <td>${searchByNameResult[i].salePrice}</td>
        <td>${searchByNameResult[i].realPrice}</td>
        <td>${searchByNameResult[i].release}</td>
        <td>${searchByNameResult[i].discount}</td>
        <td><button onclick="showFormEdit(${i})" style="width: 100px">Edit</button></td>
        <td><button onclick="remove(${i})" style="width: 100px">Remove</button></td>
    </tr>
    `
    }
    document.getElementById("tbody").innerHTML = html;

}
function searchByPrice(){
    // alert("search by price")
    let minPrice = document.getElementById("minPrice").value;
    let maxPrice = document.getElementById("maxPrice").value;
    let searchByPriceResult = myStore.getProductBySalePrice(minPrice,maxPrice);
    let html = ``;
    for (let i = 0; i < searchByPriceResult.length; i++) {
        html += `

    <tr>
        <td>${searchByPriceResult[i].id}</td>
        <td>${searchByPriceResult[i].name}</td>
        <td><img src="${searchByPriceResult[i].image}" alt="" style="width: 100px; height: 100px"></td>
        <td><img src="${searchByPriceResult[i].subImage}" alt="" style="width: 50px; height: 50px"></td>
        <td>${searchByPriceResult[i].salePrice}</td>
        <td>${searchByPriceResult[i].realPrice}</td>
        <td>${searchByPriceResult[i].release}</td>
        <td>${searchByPriceResult[i].discount}</td>
        <td><button onclick="showFormEdit(${i})" style="width: 100px">Edit</button></td>
        <td><button onclick="remove(${i})" style="width: 100px">Remove</button></td>
    </tr>
    `
    }
    document.getElementById("tbody").innerHTML = html;
}
function addToCart(index){
let list = []
let product = myStore.getProductByIndex(index)
    list = list + list.push(product)
    console.log(list)

}