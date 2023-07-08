const express = require('express')
const app = express()
const port = 3000
const bp = require('body-parser')

//setting up the view engine
app.set('view engine','ejs')
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
const qr = require('qrcode')

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/scan', (req, res) => {
    const url = req.body.url
    if (url.length == 0) res.send('Empty Data!!')
    qr.toDataURL(url, (err, src) => {
        if (err) res.send('Error occured')
        res.render("scan", {src})
    })
    
})

app.listen(port,()=>console.log('listening to port 3000'))