import express from 'express'
import path from 'path'
import {units, db} from './firebase.js'

const app = express()

app.listen(3000, ()=>{ 
    console.log('app running at: http://localhost:3000')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
})

app.get('/src/units.js', (req,res) => {
    res.sendFile(path.resolve('src/units.js'))
})

app.get('/api/units', async(req,res) => {
        const response = await units(db)
        res.json(response)
})

app.get('api/:id/workers', (req, res) => {
    return res.send('file')
})

