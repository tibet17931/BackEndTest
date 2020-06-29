exports.createOrder = (body) => {
    return new Promise(function (resolve, reject) {
        let sql = `insert into order_tb (pro_id,user_id,status) values (
            '${body.pro_id}',
            '${body.user_id.toLowerCase()}',
            '${body.status.toLowerCase()}'
            )`
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}

exports.detailOrder = (user_id) => {
    return new Promise(function (resolve, reject) {
        let sql = `SELECT or_tb.order_id,or_tb.user_id,or_tb.status,p_tb.* FROM order_tb or_tb RIGHT JOIN product_tb p_tb on or_tb.user_id = '${user_id}' and or_tb.status <> 'cancel' and p_tb.pro_id = or_tb.pro_id`
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}

exports.cancelOrder = (order_id) => {
    return new Promise(function (resolve, reject) {
        let sql = `UPDATE order_tb SET status = 'cancel'WHERE order_id = '${order_id}'`
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}