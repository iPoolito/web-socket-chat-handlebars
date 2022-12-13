import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        style: 'index.css',
    })
})

export default router