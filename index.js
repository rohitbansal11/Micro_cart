const express = require('express')
const axios = require('axios');
const https = require('https');
const morgan = require('morgan');
const app = express()
const port = process.env.PORT||8081
app.use(morgan('dev'))

app.get('/getcart',async(req,res)=>{
  try {
 
 let data =await axios.get('https://jsonplaceholder.typicode.com/users')
 console.log(data.data)

 return res.status(200).json({
        status:true,
        data: data.data
      }) 
  } catch (error) {
    return res.status(400).json({
      status:false,
      error
    })
    
  }
})

app.get('/', (req, res) => {
  res.send('Hello Form Cart!')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})