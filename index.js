const express=require('express')
const logic=require('./service/logic')
const PORT=process.env.PORT||8000
const app=express()  
const cors=require('cors')
 app.use(cors({origin:'http://localhost:3000'}))

 app.use(express.json())

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
 })


 app.post('/addCategory',(req,res)=>{
    logic.AddCategory(req.body.cid,req.body.cname,req.body.cimage).then(result=>{
        res.status(result.statusCode).json(result)
    })
 })
 app.post('/AddSubcategory',(req,res)=>{
    logic.AddSubCategory(req.body.sid,req.body.sname,req.body.simage,req.body.sparentid,req.body.sgparentid).then(result=>{
        res.status(result.statusCode).json(result)
    })
 })
 app.post('/addProduct',(req,res)=>{
    logic.addProduct(req.body.pid,req.body.parentid,req.body.pgparentid,req.body.pname,req.body.pprice,req.body.pimage).then(result=>{
        res.status(result.statusCode).json(result)
    })
 })
 app.get('/getallCategory',(req,res)=>{
    logic.getallCategory().then(result=>{
        res.status(result.statusCode).json(result)
    })
  })
 app.get('/getallSubCategory/:id',(req,res)=>{
    logic.getallSubCategory(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
  })
 app.get('/getaCategory/:id',(req,res)=>{
    logic.getaCategory(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
  })
 app.get('/getallProducts/:id',(req,res)=>{
    logic.getallProducts(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
  })


