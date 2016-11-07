var express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',(req,res)=>{
	let a = +req.query.a || 0
	let b = +req.query.b || 0
	res.end(`${a+b}`)
})

.listen(3000, () =>{
	console.log('Работаем');
});

