const { orderModel } = require('../models')
exports.createOrder = async (req, res) => {
    try {
        let body = req.body
        if (!body.pro_id && !body.user_id && !body.status) {
            return res.status(206).send({
                message: 'Please enter pro_id and user_id and status!!'
            });
        }
        if (body.status.toLowerCase() != 'waiting' && body.status.toLowerCase() != 'success' && body.status.toLowerCase() != 'cancel') {
            return res.status(206).send({
                message: 'Please enter status Enum waiting or success or cancel'
            });
        }
        let result = await orderModel.createOrder(body)
        if (result.affectedRows > 0)
            return res.status(200).send({
                message: 'Success!!'
            });
    } catch (error) {
        return res.status(500).send({
            message: JSON.stringify(error)
        });
    }
}

exports.detailOrder = async (req, res) => {
    try {
        let user_id = req.query.user_id;
        if (!user_id) {
            return res.status(206).send({
                message: 'Please enter user_id'
            });
        }
        let result = await orderModel.detailOrder(user_id)
        console.log(result)
        // if (result.affectedRows > 0)
        return res.status(200).send({
            message: 'Success!!',
            data: result
        });
    } catch (error) {
        return res.status(500).send({
            message: JSON.stringify(error)
        });
    }
}

exports.cancelOrder = async (req, res) => {
    try {
        let order_id = req.body.order_id
        if (!order_id) {
            return res.status(206).send({
                message: 'Please enter order_id'
            });
        }
        let result = await orderModel.cancelOrder(order_id)
        if (result.affectedRows > 0)
            return res.status(200).send({
                message: 'Success!!'
            });
    } catch (error) {
        return res.status(500).send({
            message: JSON.stringify(error)
        });
    }
}