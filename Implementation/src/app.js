const express = require('express');
const productsRouter = require('./products/product.router');
const app = express();
const port = 3000;

app.use(express.json())

app.get("/",(req,res) =>{
    res.send('hello from simple server')
});

app.use(productsRouter)

app.listen(port, ()=> console.log(`Server live and listening from port ${port}`)) 