import express from 'express';
import Validator from 'fastest-validator';

const router = express.Router();

const {product} = require('../models');
const v = new Validator();

router.get('/', async(req, res) => {
    const p = await product.findAll();
    return res.send(p);
})

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const p = await product.findByPk(id);
    if(p === null){
        res
        .status(404)
        .send('Product tidak di temukan')
    }
    return  res.send(p);
})

router.post("/", async (req, res) => {

    const schema = {
        name: 'string',
        brand: 'string',
        description: 'string|optional',
    }
    
    const validator = v.validate(req.body, schema);

    if(validator.length){
        res
        .status(404)
        .json(validator)
    }

    const P = await product.create(req.body);
    
    res.json(P);
})

router.put('/:id',  async (req, res) => {
    const id = req.params.id;

    let Product = await product.findByPk(id);

    if(!Product){
       return res.send("Product tidak di temukan");
    }

    const schema = {
        name: 'string|optional',
        brand: 'string|optional',
        description: 'string|optional',
    }
    
    const validator = v.validate(req.body, schema);

    if(validator.length){
        res
        .status(404)
        .json({massage: "Error"})
    }

    Product = await product.update(req.body, {where: {id: id}});

    res.json({
        massage: `Product dengan id : ${id} berhasil di ubah`
    });
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    let Product = await product.findByPk(id);

    if(!Product){
       return res.send("Product tidak di temukan");
    }

    await Product.destroy();

    res.json({
        massage: "Product berhasil di hapus!"
    })
})


module.exports = router;