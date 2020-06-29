
exports.createUser = (body) => {
    return new Promise(function (resolve, reject) {
        let sql = `insert into user_tb (username,password,firstname,lastname,age,address,phone) values (
            '${body.username}',
            '${body.password}',
            '${body.firstname ? body.firstname : 'Yeen'}',
            '${body.lastname ? body.lastname : 'pedrod'}',
            '${body.age ? body.age : 16}',
            '${body.address ? body.address : '205/1446 sadd'}',
            '${body.phone ? body.phone : '0830549085'}'
            )`
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}

exports.checkUser = (username, password) => {
    return new Promise(function (resolve, reject) {
        let sql = `select user_id from user_tb where username = '${username}' and password = '${password}'`
        console.log(sql)
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}

exports.getProfile = (user_id) => {
    return new Promise(function (resolve, reject) {
        let sql = `select * from user_tb where user_id = '${user_id}'`
        global.db.query(sql, (err, results) => {
            if (err)
                reject(err)
            else
                resolve(results)
        })
    })
}