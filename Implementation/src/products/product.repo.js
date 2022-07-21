const {product} = require ("../database/models")

const getProductsList = async (q) => {
    return await product.findAll()
};

const getProductsWithQuery = async (q) => {
    return await product.findAll({where: {id:q}})
};

const getProductsByName = async (name) => {
    return await product.findAll({where: {name:name}})
};

const createNewProducts = async (name,description,stock,available) =>{
    return await product.create({
        name: name,
        description: description,
        stock: stock,
        is_available: available
})
}

const getOneProduct = async (id)=>{
    return await product.findOne({
        where: {id: id}
    })
}

const updateProductData = async(id,name,description,stock,available) => {
    return await product.update({
        name: name,
        description: description,
        stock: stock,
        is_available: available
    },{
        where: {id:id}
    },)
}

const deleteProductData = async(id) => {
    return await product.destroy({
        where: {id: id}
    })

}

const productsRepo = {
    getProductsList,
    getProductsWithQuery,
    getOneProduct,
    createNewProducts,
    updateProductData,
    deleteProductData,
    getProductsByName
}

module.exports = productsRepo;