const fs = require('fs')
const chalk = require('chalk')
const config = require('./config.js')
const {
BOTNAME,
AUTHOR,
PACKNAME,
OWNERNAME,
} = require('./config.js')
global.owner = ['919633687665','919207759062','919496966726','919656459062']
global.ownernomer = ["919633687665","919496966726","919207759062","919656459062"]
global.premium = ['919633687665']
global.packname = config.PACKNAME
global.ownername = config.OWNERNAME
global.version = config.VERSION
global.mm = config.MENU_MEDIA
global.mmurl = config.MENTION_MURL
global.author = config.AUTHOR
global.key_ai = config.OPENAI_API_KEY
global.adbcimage = config.BCAUDIO_IMAGE
global.mentionimg = config.MENTION_IMG
global.mtitle = config.MENTION_TITLE
global.mbody = config.MENTION_BODY
global.msurl = config.MENTION_SURL
global.sessionName = 'session'
global.mentionaudio = 'true'
global.jumlha = '999'
global.jumlah = '1000000000'
global.jumhal = '100000000000000'
    
global.prefa = ['','!','.','#','&','/']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Become Admin First!',
    premime: 'Special Premium Features If you want to register, type rent / chat owner',
    owner: 'Special Features of Owner Bot',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Special Features for Bot Number Users',
    wait: '_Wait a minute..._',
    error: 'Error!',
    errapi: 'Error Maybe Invalid Apikey!',
    errmor: 'System Error Errors',
    endLimit: 'Your Daily Limit Has Been Expired, The Limit Will Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/image/kriz.jpg')
global.faall = fs.readFileSync('./media/image/kriz.jpg')
global.mygit = 'https://whats-kriz-ai-com.vercel.app/'
global.webmy = 'https://whats-kriz-ai-com.vercel.app/'
global.ghme = 'https://whats-kriz-ai-com.vercel.app/'
global.gcbot = "https://whats-kriz-ai-com.vercel.app/"
global.botname = config.BOTNAME
global.omlen = '©WʜᴀᴛꜱKʀɪᴢ AI'
global.weem = 'WʜᴀᴛꜱKʀɪᴢ AI'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
