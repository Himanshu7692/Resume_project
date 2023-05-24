import express from 'express'
import web from './routes/web.js'
const app=express();
const port=process.env.PORT || '3000'

app.use(express.static('public'))
app.set('view engine','ejs')
app.set("views", "views")
app.use('/', web )


app.listen(port,()=>{
    console.log("server is runing")
})