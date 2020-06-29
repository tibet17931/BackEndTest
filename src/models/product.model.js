exports.createProduct = (body) => {
    return new Promise(function (resolve, reject) {
        let sql = `insert into product_tb (pro_brand,pro_name,pro_detail) values (
            '${body.brand.toLowerCase()}',
            '${body.nameBrand.toLowerCase()}',
            '${body.pro_detail ? body.pro_detail : ''}'
            )`
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}

exports.checkProduct = (brand, nameBrand) => {
    return new Promise(function (resolve, reject) {
        let sql = `SELECT * FROM product_tb where pro_brand = '${brand.toLowerCase()}'  and pro_name = '${nameBrand.toLowerCase()}' `
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}

exports.getAllPro = (nameBrand) => {
    return new Promise(function (resolve, reject) {
        console.log(nameBrand)
        let sql = `SELECT * FROM product_tb where  pro_name LIKE '%${nameBrand.toLowerCase()}%' `
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}