const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./src/config');
const cors = require('cors')
const index = require('./src/routes');
const cookieParser = require('cookie-parser')
const mysql = require('mysql')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cors())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);


const db = mysql.createConnection({   // config ค่าการเชื่อมต่อฐานข้อมูล
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'backendtest'
})

db.connect((err) => {
	if (err) {
		console.error('error connecting: ' + err.stack)
		return
	}
	console.log('connected!!')
})
global.db = db
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

if (!module.parent) {
	app.listen(config.port, function () {
		console.log(`app is listening at http://localhost:${config.port}`);
	});
}

module.exports = app;