const { hadnleShortUrl, getSingleUrl } = require('../controlleurs/urlCntr')

const router = require('express').Router()

router.post('/',hadnleShortUrl)
router.get('/:id',getSingleUrl)

module.exports = router