const express=require('express')
const app=express()
const port =3000

app.use(express.static('public'))

app.get('/',(req,res)=> {
res.send('Hello World!')
}) 

app.get('/home/rajsthan',(req,res)=> {
    res.send('<h1>Maro Rajsthan!</h1>')
}) 


app.get('/home',(req,res)=> {
res.sendFile(__dirname+'/home.html')
}) 

app.get('/about',(req,res)=> {
res.sendFile(__dirname+'/about.html')
}) 



app.get('/cake',(req,res)=> {
res.send('Cake Murder!')
}) 

app.get('/cake/pali',(req,res)=> {
res.send('Pali me cake hai!')
}) 

app.get('/pani/rajsthan',(req,res)=> {
res.send('Full Pani hai!')
}) 

app.get('*',(req,res)=> {
res.send('<h1>404 Not Found!</h1>')
}) 

app.listen(port, ()=>{
console.log(`Example app listening on port ${port}`)
})

