const express = require('express');
const productServices = require('./product.service');
const app = express();
const productsRouter = express.Router();

productsRouter.get("/product", async (req,res)=>{
    try{
        const { q } = req.query;
        const products = await productServices.getProductsList(q);
        res.json(products);
    }
    catch{
        res.status(400).send("Bad request")
    }
});

productsRouter.get("/product/:id", async (req,res)=>{
    try{
        const { id } = req.params;
        const products = await productServices.getOneProduct(id);
        res.json(products);
    }
    catch{
        res.status(400).send("Bad request")
    }
});

productsRouter.post("/product", async (req,res)=>{
    try{
        const {name,description,stock,available} = req.body;
        const newProduct = await productServices.createNewProducts(name,description,stock,available);
        res.json(newProduct);
    }
    catch {
        res.status(400).send("Bad Request")
    }
})

productsRouter.put("/product/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const {name,description,stock,available} = req.body;
        const updateProduct = await productServices.updateProductData(id,name,description,stock,available);
        res.json(updateProduct);
    }
    catch {
        res.status(400).send("Bad Request")
    }
})

productsRouter.delete("/product/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteProduct = await productServices.deleteProductData(id);
        res.json(deleteProduct);
    }
    catch {
        res.status(400).send("Bad Request")
    }
})

module.exports = productsRouter;