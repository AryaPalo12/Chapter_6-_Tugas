const productsRepo = require("./product.repo");

const getProductsList = async(q) =>{
    if(q != undefined){
        return await productsRepo.getProductsWithQuery(q);
    }else{
        return await productsRepo.getProductsList(q);
    }
        }

const getOneProduct = async (id) => {
    return await productsRepo.getOneProduct(id);
}

const createNewProducts = async(name,description,stock,available) => {
    const isExist = await productsRepo.getProductsByName(name);
    if(!isExist){
    return await productsRepo.createNewProducts(name,description,stock,available)
    }
    else{
        return "Product already exist."
    }
}

const updateProductData = async(id,name,description,stock,available) =>{
    return await productsRepo.updateProductData(id,name,description,stock,available);
}

const deleteProductData = async (id) => {
    return await productsRepo.deleteProductData(id,name,description,stock,available);
}

const productServices = {
    getProductsList,
    createNewProducts,
    deleteProductData,
    getOneProduct,
    updateProductData
}

module.exports = productServices;