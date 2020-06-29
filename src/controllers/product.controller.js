const { productModel } = require('../models')
exports.createProduct = async (req, res) => {
    try {
        let body = req.body
        if (!body.brand && !body.nameBrand) {
            return res.status(206).send({
                message: 'Please enter brand and nameBrand!!'
            });
        }
        let check = await productModel.checkProduct(body.brand, body.nameBrand);
        if (check.length) {
            return res.status(206).send({
                message: 'มี Product นี้แล้วในระบบ!!'
            });
        }
        let result = await productModel.createProduct(body);
        if (result.affectedRows > 0) {
            return res.status(200).send({
                message: 'Success!!'
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: JSON.stringify(error)
        });
    }
}

exports.getProduct = async (req, res) => {
    try {
        let nameBrand = req.query.nameBrand
        let data = await productModel.getAllPro(nameBrand)
        return res.status(200).send({
            message: 'Success!!',
            product: data
        });
    } catch (error) {
        return res.status(500).send({
            message: JSON.stringify(error)
        });
    }
}