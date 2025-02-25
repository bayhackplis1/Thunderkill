//BASE BY Pentraa DC
//TRADUCCIÓN BY David Chian
//=================================================//
const chalk = require('chalk')
const fs = require("fs")
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require("./lib/myfunction")

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString("id")

//===========================//

global.prefa = ["","!",".",",","🐤","🗿"]
global.owner = ["6285372467957"]//Puedes usar tu numero.
global.ownMain = "6285372467957"//Puedes usar tu numero.
global.NamaOwner = "Pentra"
global.usePairingCode = true // Cambia a Falso <false> si quieres iniciar con QR
global.namabot = "❨◣_◢❩凸"
global.author = "❨◣_◢❩凸"
global.packname = "KillWanay"
//===========================//

//Mensajes Globales 
global.mess = {
 ingroup: "🚫 Es𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ s᥆ᥣ᥆ sᥱ ⍴ᥙᥱძᥱ ᥙsᥲr ᥱᥒ grᥙ⍴᥆s",
 admin: "🚫 Es𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ s᥆ᥣ᥆ ⍴ᥙᥱძᥱ sᥱr ᥙsᥲძ᥆ ⍴᥆r ᥲძmіᥒs",
 owner: "🚫 Es𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ s᥆ᥣ᥆ ⍴ᥙᥱძᥱ sᥱr ᥙsᥲძ᥆ ⍴᥆r ᥱᥣ ᥆ᥕᥒᥱr",
 premium: "🚫 S᥆ᥣ᥆ ᥣ᥆s ᥙsᥙᥲrі᥆s ⍴rᥱmіᥙm ⍴ᥙᥱძᥱᥒ ᥙsᥲr ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆",
 proses: "💀 Pr᥆sᥱsᥲᥒძ᥆ ᥱs⍴ᥱrᥱ...", 
 success: '💥 C᥆m⍴ᥣᥱ𝗍ᥲძ᥆!',
}
//==================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})