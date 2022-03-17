const express = require('express');
const app = express();
const path = require('path');
const {syncAndSeed, models: {Brewery}} = require('./db')

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname,'public')))
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));


app.delete('/api/breweries/:id', async(req, res, next)=> {
    try{
        const brew = await Brewery.findByPk(req.params.id)
        await brew.destroy()
        res.sendStatus(204)

    }catch(ex){
        next(ex)
    }
})


app.post('/api/breweries', async(req, res, next) =>{
    try{
        res.status(201).send(await Brewery.generateRandom())
    
    }catch(ex) {
        next(ex)
    }
})

app.get('/api/breweries', async(req, res, next) => {
    try{
        res.send(await Brewery.findAll())

    }catch(ex){
        next(ex)
    }
})



const init = async() => {
    try{
        await syncAndSeed()
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`));

    }catch(ex){
        console.log(ex)
    }
}

init()

