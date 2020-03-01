const express = require('express')
const mysql = require('mysql')
const cors = require('cors')		// 跨域
const bodyParser = require('body-parser')   // 解析参数
const app = express()
const router = express.Router()
app.listen('8000',()=>console.log('服务启动'))
const option = {
	host:'localhost',
	user:'root',
	password:'',
	port:'3306',
	database:'test',
	connectTimeout:5000, // 连接超时
	multipleStatements:false // 是否允许一个query中包含多条sql语句
}

app.use(cors()) //解决跨域
app.use(bodyParser.json()) //json请求
app.use(bodyParser.urlencoded({extended:false})) // 表单请求

const conn = mysql.createConnection(option)

//增
app.all('/add',(req,res)=>{
	conn.query("INSERT INTO user VALUES ('','" + req.query.username + "','" + req.query.password + "')")
	conn.query('SELECT * From user',(e,r)=>res.json(new Result({data:r})))
})
//删
app.all('/del',(req,res)=>{
	conn.query("DELETE FROM user WHERE username = '" + req.query.username + "' ")
	conn.query('SELECT * From user',(e,r)=>res.json(new Result({data:r})))
})
// 查
app.all('/user',(req,res)=>{
	conn.query('SELECT * From user',(e,r)=>res.json(new Result({data:r})))
})
//改
app.all('/revise',(req,res)=>{
	conn.query("UPDATE user SET username = '" + req.query.username + "' WHERE userid = '" + req.query.userid + "'")
	conn.query('SELECT * From user',(e,r)=>res.json(new Result({data:r})))
})
function Result({code=1,msg='',data={}}){
	this.code = code;
	this.msg = msg;
	this.data = data
}