
const { 
  command,
  isPrivate,
} = require("../lib/");
const { ytMp4, ytMp3, ytPlay } = require("../lib/yotube");
const { search } = require("yt-search");
const axios = require("axios");



command(
  {
    pattern: "ytmp3",
    fromMe: isPrivate,
    desc: "Downloads Song",
    type: "downloader",
  },
  async (message, match) => {
if (!match) throw `*ʟɪɴᴋ ᴠᴇᴄʜ ᴄᴍᴅ ᴀᴅɪ ᴍyʀᴇ*`
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return message.reply(`Ugly link`)
message.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `SUCCESSFUL TITLE OBTAINED\n\Title : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDescription : ${anu.desc}\n\PLEASE WAIT IS SENDING MEDIA`

message.client.sendMessage(message.jid, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: msg })
}
);
