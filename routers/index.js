const Router = require('koa-router')
const controller = require('../controller')
const axios = require('axios')
const router = new Router()

router
	.get('/newlist',controller.getNewlist)
	.get('/toplist',controller.getToplist)
	.get('/rank',controller.getRankList)
	.get('/plist',controller.getPlist)
	.get('/plist-detail',controller.getPlistDetail)
	.get('/singer-classlist',controller.getSingerClasslist)
	.get('/singer-list',controller.getSingerList)
	.get('/singer-songs',controller.getSingerSongsList)
	.get('/hot-search',controller.getHotSearch)
	.get('/search',controller.search)
	.get('/song',controller.getSongDetail)
	.get('/download',controller.downloadFile)
	.get('/.well-known/pki-validation/fileauth.txt',async ctx => {
		ctx.body = '201902080000005ranunuutslp9bv22mjuxjltaucfi4nijeivfzjj3nad41labv'
	})


module.exports = router