const { userModel } = require('../models')

exports.login = async (req, res) => {
    try {
        let body = req.body;
        if (!body.username || !body.password)
            return res.status(206).send({
                message: 'Please enter username and password!!'
            });
        let result = await userModel.checkUser(body.username, body.password)
        console.log(result)
        if (!result.length) {
            return res.status(401).send({
                message: 'not found user please registor first!!'
            });
        } else {
            return res.status(200).send({
                message: 'Sucess',
                token: 'Fake=>asdasdsad3as1d35as1d56a1sd65a4sd65dd',
                user_id: result[0].user_id
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: JSON.stringify(error)
        });
    }
}

exports.createUser = async (req, res) => {
    try {
        let body = req.body
        if (!body.username)
            return res.status(206).send({
                message: 'Please enter username!'
            });
        if (!body.password)
            return res.status(206).send({
                message: 'Please enter password!'
            });
        let result = await userModel.getUser(body)
        if (result.length) {
            return res.status(206).send({
                message: 'มีข้อมูลนี้อยู่ในระบบแล้ว!!'
            });
        }
        let resultPost = await userModel.createUser(body)
        if (resultPost.affectedRows > 0)
            return res.status(200).send({
                message: 'Success!'
            });
    } catch (error) {
        return res.status(500).send({
            message: JSON.stringify(error)
        });
    }
}

exports.getProfile = async (req, res) => {
    try {
        if (req) {
            let user_id = req.query.user_id
            if (!user_id) {
                return res.status(206).send({
                    message: ''
                });
            }
            let result = await userModel.getProfile(user_id)
            if (result.length) {
                return res.status(200).send({
                    message: 'Success',
                    profile: result
                });
            } else {
                return res.status(400).send({
                    message: 'not found profile'
                });
            }
        }
    } catch (error) {
        return res.status(500).send({
            message: JSON.stringify(error)
        });
    }
}