command({
            pattern: "menu"
            , fromMe: isPrivate
            , dontAddCommandList: true
        , }
        , async (message, match, m) => {

            let [date, time] = new Date()
                .toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata"
                })
                .split(",");
            let menu = `
    ╭───────────㋰
    │╭──[ ${BOT_NAME} ]──㋰
    ││USER :  ${message.pushName}
    ││NUMBER :  ${m.sender.split("@")[0]}
    ││WORKTYPE : ${WORK_TYPE}
    │╰──㋰
    │
    │╭──[ "INFO BOT"]──㋰
    ││BOTNAME : ${BOT_NAME}
    ││TIME : ${time}
    ││DATE : ${date}
    ││OWNER : ${OWNER_NAME}
    ││PREFIX : ${HANDLERS}
    ││HOSTNAME : ${hostname().split("-")[0]}
    │╰──㋰
    ╰───────────㋰\n`

            let buttons = [
                {
                    buttonId: "ping"
                    , buttonText: {
                        displayText: tiny("SPEED")
                    }
      , }
                , {
                    buttonId: "list"
                    , buttonText: {
                        displayText: tiny("LIST")
                    }
      , }
    ]
            let contextInfo = {
                externalAdReply: {
                    title: "WʜᴀᴛꜱKʀɪᴢ AI"
                    , body: "ᴛᴇᴀᴍ ᴛᴏxɪᴄ"
                    , mediaType: 2
                    , thumbnail: 'https://i.imgur.com/LgwJjMF.jpeg'
                    , mediaUrl: 'https://instagram.com'
                    , sourceUrl: 'https://instagram.com'
                    , showAdAttribution: true
                }
            }

            const listMessage = {
                image: {
                    url: 'https://i.imgur.com/LgwJjMF.jpeg'
                , }
                , caption: tiny(menu)
                , footer: "WʜᴀᴛꜱKʀɪᴢ AI"
                , buttons: buttons
                , contextInfo: contextInfo
            }

            return await message.client.sendMessage(message.jid,
                listMessage, {
                    quoted: message
                })
        })

}
