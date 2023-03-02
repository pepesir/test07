require('./setting')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto,  parsedJid, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const { ytMp4, ytMp3, ytPlay } = require('./lib/ytdl')
const os = require('os')
const { FancyRandom } = require ("abu-bot");
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')

const { Configuration, OpenAIApi } = require("openai");
const maker = require('mumaker')
const naztod = require("tod-api")
const request = require('request');
const textpro = require('./lib/textpro')
const bochil = require('@bochilteam/scraper')
const { mediafireDl } = require('./lib/mediafire.js')
const dfrply = fs.readFileSync('client.jpg')
const bcpic = fs.readFileSync('client.jpg')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { exec, spawn, execSync } = require("child_process")
const keyopenai = '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'
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const timur = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const esce = ('©ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ')
const ini_kangbaned = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
global.prem = require("./lib/premium")
gambar = fs.readFileSync('./media/image/kriz.jpg')

module.exports = kriz = async (kriz, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const arg = body.substring(body.indexOf(" ") + 1);
        const pushname = m.pushName || "No Name"
        const botNumber = await kriz.decodeJid(kriz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	    
        // Group
        const groupMetadata = m.isGroup ? await kriz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || isCreator || prem.checkPremiumUser(m.sender, premium);
        
		
	function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
	const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
	const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
	const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
	const filsk = filsj[Math.floor(Math.random() * filsj.length)]
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!kriz.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            kriz.readMessages([m.key])
        }
        //  Di sini editing autovn dan auto ketik
        // selebihnya jangan di edit nanti error
       /**if (m.message) {
kriz.sendPresenceUpdate('composing', m.chat)
kriz.readMessages([m.key])
}
 if (m.message) {
kriz.sendPresenceUpdate('recording', m.chat)
kriz.readMessages([m.key])
}**/


        if (m.text.includes('🗿')) {
    kriz.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
        //Console logs by kriz
   if (m.message) {
      	await console.log(chalk.black(chalk.bgRed('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.white(chalk.bgBlue(isCmd ? body : m.mtype || body.slice(0, 20))) + '\n' + chalk.black(chalk.bgCyan('[ ~> from ]')), chalk.black(chalk.bgWhite(pushname)), chalk.black(chalk.bgYellow(m.sender)) + '\n' + chalk.black(chalk.bgMagentaBright('[ ~> in ]')), chalk.black(chalk.bgYellow(m.isGroup ? pushname : 'Private Chat')), chalk.black(chalk.bgCyan(m.chat)))
		  console.log('\n')      
            }               

//sticker url
const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/stick' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/stick' + names + '.png'
                    let asw = './database/stick' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        kriz.sendMessage(to, { sticker: media}, {quoted: m})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
      //Resize
         const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
             
             //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${weem}`, orderTitle: 'tio', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${weem}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${weem}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
        const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${weem}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${weem}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${weem}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${weem}`, "caption": `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${weem}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${weem}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${weem}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${weem}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;weem,;;;\nFN:weem\nitem1.TEL;waid=6285875158363:6285875158363\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${weem}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        // total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/kriz.com/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/kriz.com${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await kriz.setStatus(`${kriz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
			
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await kriz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
        kriz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      
      const deploy = (teks) => { kriz.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }




//Autodownload




if (budy.startsWith("https://youtu")) {
takes = budy.replace('https://youtube.com/shorts/','').replace('?feature=share','').replace('https://youtube.com/watch?v=','').replace('https://youtu.be/','')   
let yts = require("yt-search")
let search = await yts(`https://youtu.be/${takes}`)
ngen = `
 Title : ${search.videos[0].title}
🌹 ᴇxᴛ : Search
🌹 ɪᴅ : ${search.videos[0].videoId}
🌹 ᴅᴜʀᴀᴛɪᴏɴ : ${search.videos[0].timestamp}
🌹 ᴠɪᴇᴡᴇʀs : ${search.videos[0].views}
🌹 ᴜᴘʟᴏᴀᴅᴇᴅ : ${search.videos[0].ago}
🌹 ᴀᴜᴛʜᴏʀ : ${search.videos[0].author.name}
🌹 ᴄʜᴀɴɴᴇʟ : ${search.videos[0].author.url}
🌹 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${search.videos[0].description}
`

const buttons = [
  {buttonId: `ytmp3  ${search.videos[0].url} 320kbps`, buttonText: {displayText: '🎧Audio🎧'}, type: 1},
  {buttonId: `ytmp4 ${search.videos[0].url} 360p`, buttonText: {displayText: '📽️VIdeo📽️'}, type: 1}
]

const buttonMessage = {
    text: ngen ,
    footer: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
    buttons: buttons,
    image: { url: search.videos[0].thumbnail },
    headerType: 1
}
 kriz.sendMessage(m.chat, buttonMessage)

}


        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kriz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kriz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kriz.ev.emit('messages.upsert', msg)
        }
	       
        switch(command) {
	case 'fd':



const url1 = 'https://i.imgur.com/8ywakAD.jpeg'
const url2 = 'https://i.imgur.com/MYx2KqP.jpeg'


	if (!m.reply_message) return await m.reply('*Reply to a message*')
	if (!text) return await m.reply('*Give me a jid*\nExample .fd jid1 jid2 jid3 jid4 ...')
	const image1 = await getBuffer(url1)
	const image2 = await getBuffer(url2)
	const options = {}
	options.contextInfo = {
		forwardingScore: 5, // change it to 999 for many times forwarded
		isForwarded: false,
	}

	options.linkPreview = {
		title: ' 𝞛𝞓𝙎𝞙 𝙎𝞝𝗥💖 ',
		body: 'Made by mask 𝐰𝐢𝐭𝐡 ❤️💫',
		mediaType: 2,
		thumbnail: image2,
		mediaUrl: 'https://www.instagram.com/p/heehe', // insta link for video 
		sourceUrl: 'https://wa.me/919544951258?text=_*៚ʜᴇʟʟᴏ+ᴍᴀsᴋ+sᴇʀ+ʙɪɢ ғᴀɴ+ᴠʀᴏ+🪄*_',
		showAdAttribution: true
	}

	options.filesize = 99999999999;

	options.quoted = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`,
			...(m.jid ? {
				remoteJid: `status@broadcast`
			} : {})
		},
		message: {
			'contactMessage': {
				'displayName': '𝐎𝐍𝐄 𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐊𝐈𝐍𝐆 𝐌𝐀𝐒𝐊 𝐒𝐄𝐑😻',
				'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;'𝐎𝐍𝐄 𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐊𝐈𝐍𝐆 𝐌𝐀𝐒𝐊 𝐒𝐄𝐑😻',;;;\nFN:'𝐎𝐍𝐄 𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐊𝐈𝐍𝐆 𝐌𝐀𝐒𝐊 𝐒𝐄𝐑😻',\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				'jpegThumbnail': image1
			}
		}
	}

	if (/audio/.test(m.mine)) {
		options.duration = 2000001355
		options.ptt = true
	}
options.audiowave = [99,0,99,0,99]

	for (let jid of parsedJid(text)) {
		await kriz.forwardMessage(jid, m.quoted_message, options)
	}
break
case 'jid':
m.reply(m.chat)
break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    kriz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    kriz.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    kriz.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    kriz.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    kriz.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    kriz.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    kriz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'runtime': case 'tes': {
            	let lowq = `Runtime : ${runtime(process.uptime())}`
                kriz.sendMessage(m.chat, { text: lowq }, {quoted: fkontak})
                kriz.setStatus(`${kriz.user.name} | Runtime : ${runtime(process.uptime())}`)
            	}
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: m.key
                    }
                }
                kriz.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await kriz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'left': case 'leave': {
                if (!isCreator) throw mess.owner
                await kriz.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setowner': case 'setownerno': {
               if (!isCreator) throw mess.owner
               if (m.text.includes('@')) return m.reply(`*Invalid!*\n\n*Pake Nomer Woy*\n*Jangan Pakai Tag!*`)
               if (!text) throw `Example : ${prefix + command} 6285875158363`
              global.owner = text
              global.ownernomer = text
              m.reply(`Owner berhasil diubah menjadi\n\n *»* Owner : ${global.owner}\n *»* OwnerNumber : ${global.ownernomer}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kriz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kriz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kriz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kriz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kriz.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kriz.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
          case 'pp': case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With caption ${prefix + command}`
                let media = await kriz.downloadAndSaveMediaMessage(quoted)
                await kriz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let teks = `══✪〘 *Tag All* 〙✪══
 
                ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += ` *»* @${mem.id.split('@')[0]}\n`
                }
                kriz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'tag': case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            kriz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'fancy': case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += ` *»* *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await kriz.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await kriz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await kriz.sendButtonText(m.chat, buttons, `Mode Group`, kriz.user.name, m)

             }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kriz.sendButtonText(m.chat, buttons, `Mode Antilink`, kriz.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${kriz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${kriz.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kriz.sendButtonText(m.chat, buttons, `Mute Bot`, kriz.user.name, m)
                }
             }
             break
           case 'invite': case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await kriz.groupInviteCode(m.chat)
                kriz.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })
            }
            break
            case 'revoke':
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                await kriz.groupRevokeInvite(m.chat)
                    .then(res => {
                        m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => m.reply(jsonformat(err)))
            break
            case 'delete': case 'del': {
            	if (!isCreator) throw mess.owner
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by bot!'
                kriz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await kriz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
await kriz.sendButtonText(i, buttons, txt, esce, m, {quoted: fkontak})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		await sleep(1500)
		let txt = `「 Broadcast Bot 」\n\n${text}`
		let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
            await kriz.sendButtonText(yoi, buttons, txt, esce, m, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
}
break
case 'tobc':
					{
                if (!isCreator) throw mess.owner
				if (!m.quoted) return m.reply("*WʜᴀᴛꜱKʀɪᴢ AI*\n\n*Reply to a Message*")

					let buff1 = fs.readFileSync('client.jpg')
					let buff2 = fs.readFileSync('client.jpg')
					let options = {}
					let media = await kriz.downloadAndSaveMediaMessage(quoted)
					let anu = await store.chats.all().map(v => v.id)
					m.reply(`Sending Broadcast To ${anu.length} Chat\nDone Time ${anu.length * 1.5} seconds`)
				for (let yoi of anu) {
					
					
					
					
					
					
					
					
 /*       let linkPreview = {
               head: "𝕮𝖞𝖇𝖊𝖗 𝕽𝖎𝖈𝖍𝖚",
               body: "★彡[𝓑𝓡𝓞𝓐𝓓𝓒𝓐𝓢𝓣]彡★",
               mediaType: 2, //3 for video
               thumbnail: buff2.buffer,
               sourceUrl: "https://bit.ly/3D4Y12",
                }
                
         
        let quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
            message: {
                "imageMessage": {
                    "jpegThumbnail": buff1.buffer,
                    "caption": "ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ"
                }
            }
        } */
        

kriz.sendMessage(yoi, { audio: media, mimetype: 'audio/mpeg' }, { quoted : m })



			            } }
					
					break
            case 'q': case 'quoted': {
        try {
		if (!m.quoted) return m.reply('Message Repliesnya!!')
		let wokwol = await kriz.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
		} catch (e) {
		    m.reply(mess.errmor)}
            }
	    break
            
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    kriz.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' *»* @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'public': {
                if (!isCreator) throw mess.owner
                kriz.public = true
                m.reply('_Successfully changed working type to public!_')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                kriz.public = false
                m.reply('_Successfully changed working type to private!_')
            }
            break
case 'mode': case 'worktype': {
            let me = m.sender
            if (!isCreator) throw mess.owner
            let ownernya = '0@s.whatsapp.net'
            let wrt = `ᴄʜᴀɴɢᴇ ᴛʜᴇ ᴡᴏʀᴋɪɴɢ ᴛʏᴘᴇ/nᴄʟɪᴄᴋɪɴɢ ᴏɴ ɢɪᴠᴇɴ ʙᴜᴛᴛᴏɴ`
            let ments = [ownernya, me, ini_kangbaned]
            let buttons = [{ buttonId: 'public', buttonText: { displayText: 'ᴘᴜʙʟɪᴄ' }, type: 1 },{ buttonId: 'self', buttonText: { displayText: 'ᴘʀɪᴠᴀᴛᴇ' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : omlen,
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: wrt,
  footer: esce,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
  body: 'Do not Spam!', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: ghme,
  sourceUrl: webmy
  }}
  }
  kriz.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
            case 'ping': {
    const start = new Date().getTime();
    await m.reply("ᴘɪɴɢ!");
    const end = new Date().getTime();
    return await m.reply(
      "ᴘᴏɴɢ! " + (end - start) + " ᴍs")
       }
      break
case 'find' :{

let acrcloud = require('acrcloud')
let acr = new acrcloud({
	host: 'identify-eu-west-1.acrcloud.com',
	access_key: 'c816ad50a2bd6282e07b90447d93c38c',
	access_secret: 'ZpYSwmCFpRovcSQBCFCe1KArX7xt8DTkYx2XKiIP'
})
	try{
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/audio|video/.test(mime)) {
		let media = await q.download()
		let ext = mime.split('/')[1]
		fs.writeFileSync(`./${m.sender}.${ext}`, media)
		let res = await acr.identify(fs.readFileSync(`./${m.sender}.${ext}`))
		let { code, msg } = res.status
		if (code !== 0) throw msg
		let { url, title, artists, album, genres, release_date } = res.metadata.music[0]
		let button = [
                    {buttonId: `ytmp3 ${url}`, buttonText: {displayText: 'HEAR THIS️'}, type: 1}
                ]
		let txt = `*𝑻𝒊𝒕𝒍𝒆:* ${title}

*𝑨𝒓𝒕𝒊𝒔𝒕𝒔:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}

*𝑨𝒍𝒃𝒖𝒎:* ${album.name || ''}

*𝑮𝒆𝒏𝒓𝒆𝒔:* ${genres !== undefined ? genres.map(v => v.name).join(', ') : ''}

*𝑹𝒆𝒍𝒆𝒂𝒔𝒆 𝑫𝒂𝒕𝒆:* ${release_date}`
		fs.unlinkSync(`./${m.sender}.${ext}`)
		
     await kriz.sendButtonText(m.chat, button, txt, esce, m)
	//	await m.reply(txt)
	} else throw 'Reply audio/video!'
}catch(e){
    m.reply(`${e}`)
  }}
       break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python3 speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                kriz.sendContact(m.chat, global.owner, m)
            }
            break
  case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                kriz.sendListMsg(m.chat, `pilih aja *${pushname}* Setmenu nya!`, esce, `*Hello Kak* !`, `Pilih Set Menu`, sections, m)
                }
            }
            break

            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kriz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await kriz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
            case 'stikerwm': case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'take': case 'wm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await kriz.downloadMediaMessage(qmsg)
                    let encmedia = await kriz.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await kriz.downloadMediaMessage(qmsg)
                    let encmedia = await kriz.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
	       case 'attp': {
           if (!text) throw `Example : ${prefix + command} text`
           await kriz.sendMedia(m.chat, `https://api.botcahx.biz.id/api/maker/attp?text=${text}&apikey=Admin`, 'attp.webp', '', m, { asSticker: true })
         }
           break
         case 'tts': { 
                  if (!text) throw `Example : ${prefix + command} text` 
              let tts = await fetchJson(`https://api.botcahx.biz.id/api/soundoftext?text=${text}&lang=id-ID&apikey=Admin`) 
              kriz.sendMessage(m.chat, {audio: { url: tts.result }, mimetype:'audio/mpeg', ptt:false , contextInfo:{"externalAdReply": {"title": `WʜᴀᴛꜱKʀɪᴢ AI`,"body": ` ᴅᴏɴᴛ ꜱᴩᴀᴍ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`client.jpg`),"sourceUrl": "https://github.com/TOXIC-KICHUX/WHATS-KRIZ-AI"}}}, { quoted: m})
                  } 
          break
           case 'photo': case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kriz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kriz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'mp4': case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kriz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kriz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
           case 'mp3': case 'tomp3': {
            if (/document/.test(mime)) throw `_Reply to audio or video..!_`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `_Reply to audio or video..!_`
            if (!quoted) throw `_Reply to audio or video..!_`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            kriz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', fileName: `ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ.mp3`,contextInfo:{"externalAdReply": {"title": `WʜᴀᴛꜱKʀɪᴢ AI`,"body": ` ᴅᴏɴᴛ ꜱᴩᴀᴍ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`client.jpg`),"sourceUrl": "https://github.com/TOXIC-KICHUX/WHATS-KRIZ-AI"}}}, { quoted: m})
                 
            }
            break
            case 'gif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kriz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kriz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	       case 'tourl': case 'url': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await kriz.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'toqr': case 'qr': {
            	if (!text) throw 'No Query Text'
               m.reply(mess.wait)
               kriz.sendMessage(m.chat, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}` }, caption: `Here!` }, { quoted: m })
            	}
            break
            case 'rmbg': case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await kriz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    kriz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` *»* No : ${no++}\n *»* Type : ${i.type}\n *»* Video ID : ${i.videoId}\n *»* Title : ${i.title}\n *»* Views : ${i.views}\n *»* Duration : ${i.timestamp}\n *»* Upload At : ${i.ago}\n *»* Author : ${i.author.name}\n *»* Url : ${i.url}\n\n─────────────────\n\n`
                }
                kriz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
	    case 'song': case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
 *»* Title : ${anu.title}
 *»* Ext : Search
 *»* ID : ${anu.videoId}
 *»* Duration : ${anu.timestamp}
 *»* Viewers : ${anu.views}
 *»* Upload At : ${anu.ago}
 *»* Author : ${anu.author.name}
 *»* Channel : ${anu.author.url}
 *»* Description : ${anu.description}
 *»* Url : ${anu.url}`,
                    footer: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
                    buttons: buttons,
                    headerType: 4
                }
                kriz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'ytmp3':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`Linknya Jelek`)
m.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
kriz.sendMessage(m.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: ftoko })
kriz.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: ftroli })
break
case 'ytmp4':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`Linknya Jelek`)
m.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
kriz.sendMessage(m.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: ftoko })
kriz.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: ftroli })
break
	 
	    case 'getmusic': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Message Replies')
                if (!m.quoted.isBaileys) throw `Can Only Reply To Messages From Bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                kriz.sendImage(m.chat, media.thumb, ` *»* Title : ${media.title}\n *»* File Size : ${media.filesizeF}\n *»* Url : ${urls[text - 1]}\n *»* Ext : MP3\n *»* Resolusi : ${args[1] || '128kbps'}`, m)
                kriz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case 'ytv':  {
                if (!text) throw `Example : ${prefix + command} ytv `
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]            
            
            let template = await generateWAMessageFromContent




(m.chat, proto.Message.fromObject({
                listMessage : {
                    title: `ꜱᴇʟᴇᴄᴛ ᴛʜᴇ Qᴜᴀʟɪᴛʏ ꜰᴏ ᴛʜᴇ ᴠɪᴅᴇᴏ`,
                    description: `ᴛɪᴛʟᴇ : ${anu.title}
ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
ᴜᴘʟᴏᴀᴅ At : ${anu.ago}
ᴀᴜᴛʜᴏʀ : ${anu.author.name}`,
                    buttonText: "Yt Video",
                    footerText: `*WʜᴀᴛꜱKʀɪᴢ AI*`,
                    listType: "SINGLE_SELECT",
                    sections: [
{
"title": `WʜᴀᴛꜱKʀɪᴢ AI`,
rows: [
{
"title": "► 144p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 144p`
},
{
"title": "► 240p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 240p`
},
{
"title": "► 360p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 360p`
},
{
"title": "► 480p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 480p`
},
{
"title": "► 720p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 720p`
},
{
"title": "► 1080p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 1080p`
},
{
"title": "► 1440p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 1440p`
}]
}],
          listType: 1
                }
            }), {})
            
kriz.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'video': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Message Replies')
                if (!m.quoted.isBaileys) throw `Can Only Reply To Messages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe the message you replied to didn't contain the ytsearch results`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                kriz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` *»* Title : ${media.title}\n *»* File Size : ${media.filesizeF}\n *»* Url : ${urls[text - 1]}\n *»* Ext : MP3\n *»* Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'tinyurl': case 'shortlink': {
            	if (!text) throw 'Enter Query Link!'
                let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
                kriz.sendMessage(m.chat,{ text: anu.data + `\nHere!`}, { quoted: fdoc })
            }
            break
case 'bitly': {
            	if (!text) throw 'Enter Query Link!'
                let bitly = await fetchJson(`https://api.botcahx.biz.id/api/linkshort/bitly?link=${text}&apikey=Admin`)
                kriz.sendMessage(m.chat, { text: bitly.result + `\nHere!`}, { quoted: fdoc })
            }
            break
case 'cuttly': {
            	if (!text) throw 'Enter Query Link!'
                let cuttly = await fetchJson(`https://api.botcahx.biz.id/api/linkshort/cuttly?link=${text}&apikey=Admin`)
                kriz.sendMessage(m.chat, { text: cuttly.result.shortLink + `\nHere!`}, { quoted: fdoc })
            }
            break
            case 'mediafire': {
if (!text) throw 'Enter Query Link!'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
kriz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply(mess.error))
}
break  
case 'tik': case 'tiktok': case 'tt': case 'tiktoknowm': 
 if (!text) throw 'Enter Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/tikok?url=${text}&apikey=Admin`)
 kriz.sendMessage(m.chat, { video: { url: anu.result.video }, fileName: 'tiktok.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break
case 'facebook': case 'fb': case 'fbdl': 
 if (!text) throw 'Enter Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=Admin`)
 kriz.sendMessage(m.chat, { video: { url: anu.result.Normal_video }, fileName: 'facebook.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break
 case 'insta': case 'instagram': case 'ig': case 'igdl': 
 if (!text) throw 'Enter Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/igdowloader?url=${text}&apikey=Admin`)
 kriz.sendMessage(m.chat, { video: { url: anu.result.url }, fileName: 'ig.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break  
 case 'instagramreel': case 'igreel': case 'igdlreel': 
 if (!text) throw 'Enter Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/igdowloader?url=${text}&apikey=Admin`)
 kriz.sendMessage(m.chat, { video: { url: anu.result.url }, fileName: 'reel.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break  
 case 'instagramstory': case 'igstory': case 'igdlstroy': 
 if (!text) throw 'Enter Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/igdowloader?url=${text}&apikey=Admin`)
 kriz.sendMessage(m.chat, { image: { url: anu.result.url }, fileName: 'foto.jpg', mimetype: 'image/jpeg' }, { quoted: fkontak })
 break  
 case 'twitter': case 'tw': case 'twitdl':     
 if (!text) throw 'Enter Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/twitter?url=${text}&apikey=Admin`)
 kriz.sendMessage(m.chat, { video: { url: anu.result.HD }, fileName: 'twitter.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break  
 case 'ssweb': case 'ss': case 'sshp': {
 if (!text) throw 'Enter Query Links!'
let img = `https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=Admin`
kriz.sendMessage(m.chat,{ image :{ url : img } , caption : '*Nih..*' }, { quoted: fkontak })
}
break
case 'ai': case 'openai': 
try {   
             if (keyopenai === "ISI_APIKEY_OPENAI_DISINI") setReply("ᴀᴘɪ ᴋᴇʏ ʜᴀꜱ ɴᴏᴛ ʙᴇᴇɴ ꜰɪʟʟᴇᴅ ɪɴ\n\nᴘʟᴇᴀꜱᴇ ꜰɪʟʟ ɪɴ ᴛʜᴇ ᴀᴘɪᴋᴇʏ ꜰɪʀꜱᴛ ɪɴ ᴛʜᴇ key.json ꜰɪʟᴇ\n\nᴛʜᴇ ᴀᴘɪᴋᴇʏ ᴄᴀɴ ʙᴇ ᴍᴀᴅᴇ ᴏɴ ᴛʜᴇ ᴡᴇʙꜱɪᴛᴇ : https://beta.openai.com/account/api-keys");   
             if (!text) return m.reply(`ᴄʜᴀᴛ ᴡɪᴛʜ ᴀɪ.\n\nᴇxᴀᴍᴘʟᴇ:\n${prefix} ${command} ᴡʜᴀᴛ ɪꜱ ʀᴇᴄᴇꜱꜱɪᴏɴ`);   
             const configuration = new Configuration({   
               apiKey: keyopenai,   
             });   
             const openai = new OpenAIApi(configuration);   
             const response = await openai.createCompletion({  
               model: "text-davinci-003",   
               prompt: text,   
               temperature: 0.3,   
               max_tokens: 3000,   
               top_p: 1.0, 
               frequency_penalty: 0.0,   
               presence_penalty: 0.0,   
             });   
             m.reply(`${response.data.choices[0].text}`);   
           } catch (error) {   
           if (error.response) {   
             console.log(error.response.status);   
             console.log(error.response.data);   
             console.log(`${error.response.status}\n\n${error.response.data}`);   
           } else {   
             console.log(error);   
             m.reply("Sorry, there seems to be an error :"+ error.message);  
           }   
         } 
break
case 'aiimg': case 'openaiimg': case 'aigambar': {
 if (!text) throw 'Enter text!'
let img = await fetchJson(`https://mfarels.my.id/api/openai-image?text=${text}`)
kriz.sendMessage(m.chat,{ image :{ url : img.result } , caption : '*Hasil penelusuran Ai*' }, { quoted: ftoko })
}
break
case 'getcase': case 'c': 
 if (!isCreator) return m.reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./kriz.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
.catch((err) => m.reply(mess.error))
break
	        case 'img': case 'pinterest': case 'image': {
                if (!text) throw 'Enter Query Link!'
                m.reply(mess.wait)
		       let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                kriz.sendMessage(m.chat, { image: { url: result }, fileLength: jumlah, caption: `Media Url :\n`+result}, { quoted: fkontak })
            }
            break
            case 'menu': {
            const date = new Date()
            let ownernya = '0@s.whatsapp.net'
            let me = m.sender
            let myr = `╭───────────㋰
│╭──[User Info]──㋰
││User : ${pushname}
││User Number : \n││ @${me.split('@')[0]}
│╰──㋰
│
│╭──[Bot Info]──㋰
││Bot Name : ${botname}
││Time : ${date.toLocaleTimeString()}
││Date : ${date.toLocaleDateString('hi')}
││Worktype : ${kriz.public ? 'Public' : `Self`}
││Prefix : [multi prefix]
││Uptime :\n││ ${runtime(process.uptime())}
│╰──㋰
│
│╭──────────㋰
││Click the button given\n││below to see\n││menu list.
│╰──㋰
╰───────────㋰`
            let ments = [ownernya, me, ini_kangbaned]
            let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: 'ʟɪꜱᴛ' }, type: 1 },{ buttonId: 'ping', buttonText: { displayText: 'ᴘɪɴɢ' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : omlen,
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: FancyRandom(myr),
  footer: esce,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'ᴡʜᴀᴛꜱ-ᴋʀɪᴢ-ᴀɪ',
  body: 'ᴅᴏɴᴛ ꜱᴘᴀᴍ!', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: ghme,
  sourceUrl: webmy
  }}
  }
  kriz.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
            case 'list': case 'allmenu': {
            let ownernya = '0@s.whatsapp.net'
            const date = new Date()
            const os = require('os')
            let me = m.sender
            let ments = [ownernya, me, ini_kangbaned]
             let funda = `╭━━━[ ${botname} ]━━━✤
╽╭─────────✤
┃│Owner : ${global.ownername}
┃│User : ${pushname}
┃│Runtime :\n┃│${runtime(process.uptime())}
┃│Worktype : ${kriz.public ? 'Public' : `Self`}
┃│Prefix : [multi prefix]
┃│Date : ${date.toLocaleDateString('hi')}
┃│Time : ${date.toLocaleTimeString()}
┃│Platform : ${os.platform()}
┃│Ram :\n┃│${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╿╰─────────✤
╰━━━━━━━━━━━━━✤
╭━━━━━━━━━━━━━✵
╽╭──────────❉
┃│⌜Owner⌟
┃╰┬─────────❉
┃━┤1).getcase
┃   │2).worktype
┃   │3).setmenu
┃   │4).join
┃   │5).leave
┃   │6).pp
┃   │7).block
┃   │8).unblock
┃   │9).tobc
┃   │10).bcgc
┃   │11).bc
┃   │12).chat
┃   │13).react
┃   │14).setownerno
┃   ╰─────────❉
┃╭──────────❉
┃│⌜Whatsapp⌟
┃╰┬─────────❉
┃━┤1).jid
┃   │2).del
┃   │3).quoted
┃   ╰─────────❉
┃╭──────────❉
┃│⌜Misc⌟
┃╰┬─────────❉
┃━┤1).find
┃   │2).tts
┃   │3).attp
┃   ╰─────────❉
┃╭──────────❉
┃│⌜Group⌟
┃╰┬─────────❉
┃━┤1).antilink
┃   │2).promote
┃   │3).demote
┃   │4).add
┃   │5).kick
┃   │6).mute
┃   │7).invite
┃   │8).revoke
┃   │9).tagall
┃   │10).tag
┃   │11).left
┃   │12).join
┃   │13).group
┃   ╰─────────❉
┃╭──────────❉
┃│⌜Short Link⌟
┃╰┬─────────❉
┃━┤1).tinyurl
┃   │2).bitly
┃   │3).cuttly
┃   ╰─────────❉
┃╭──────────❉
┃│⌜Info⌟
┃╰┬─────────❉
┃━┤1).ping
┃   │2).menu
┃   │3).list
┃   │4).runtime
┃   ╰─────────❉
┃╭──────────❉
┃│⌜Converter⌟
┃╰┬─────────❉
┃━┤1).photo
┃   │2).fancy
┃   │3).url
┃   │4).mp3
┃   │5).sticker
┃   │6).qr
┃   │7).mp4
┃   │8).take
┃   │9).gif
┃   ╰─────────❉
┃╭──────────❉
┃│⌜Downloader⌟
┃╰┬─────────❉
┃━┤1).insta
┃   │2).fb
┃   │3).tik
┃   │4).play
┃   │5).video
┃   │6).mediafire
┃   │7).ss
┃   │8).yts
┃   │9).ytv
┃   │10).tw
┃   ╰─────────❉
┃╭──────────❉
┃│⌜Chat-GPT⌟
┃╰┬─────────❉
┃━┤1).ai
┃   │2).aiimg
╿   ╰─────────❉
╰━━━━━━━━━━━━━✵
`
                let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: 'ping', buttonText: { displayText: 'ᴘɪɴɢ' }, type: 1 }]
            kriz.sendMessage(m.chat, { caption: FancyRandom(funda), location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, footer: esce, mentions: ments})
            }
            break

            default:
                if (budy.startsWith('~>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('.>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    kriz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
