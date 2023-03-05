const fs = require('fs')
const chalk = require('chalk')
const config = require('./config.js')
const {
BOTNAME,
AUTHOR,
PACKNAME,
OWNERNAME,
} = require('./config.js')
global.owner = ['919633687665','919207759062','919496966726']
global.ownernomer = ["919633687665","919496966726","919207759062"]
global.premium = ['919633687665']
global.packname = config.PACKNAME
global.ownername = config.OWNERNAME
global.author = config.AUTHOR
global.sessionName = 'session'
global.jumlha = '999'
global.jumhal = '100000000000000'
     "ownermention" = "919633687665", 
     "mentiontext" = true,
     "mentionaudio" = true,
     "mentionsticker" = false,
     "mentiontxt" = "*𝐌𝐞𝐧𝐭𝐢𝐨𝐧 𝐃𝐞𝐭𝐞𝐜𝐭𝐞𝐫...🔍*\n\n```sᴏʀʀʏ ғʀɪᴇɴᴅ ɪ ᴀᴍ sᴛɪʟʟ ʟɪᴛᴛʟᴇ ʙᴜsʏ ᴀᴛ ᴛʜɪs ᴍᴏᴍᴇɴᴛ....🎁```\n\n_sᴏ ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ sᴏᴍᴇ ᴍɪɴᴜᴛᴇs...☮︎_\n\n*[ᴀɴʏ ᴜʀɢᴇɴᴛ ᴍᴀᴛᴛᴇʀ ᴄᴏɴᴛᴀᴄᴛ me  ᴏɴ👇]*\n\n╭─| *⏤͟͞ꪶ⛧͢ᴋʀɪᴢ ꜱᴇʀ✠* ─\n│ ᪥ wa.me/+299586888 ✔︎\n│ ᪥ wa.me/+917736622139 ✔︎\n│ ᪥ wa.me/+18072343114 ✔︎\n╰───────────────────",
global.jumlah = '1000000000'
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
