const express=require("express")
const app=express()
const PORT= 8080

app.get("/",(req,res)=>{
    return res.send("Hello, World!!")
})

app.get("/cicd",(req,res)=>{
    return res.send("New Routes to check CI-CD")
})

app.get("/again",(req,res)=>{
    return res.send("reflected here")
})

app.get("/tested",(req,res)=>{
    return res.send("tested ci-cd is working")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})