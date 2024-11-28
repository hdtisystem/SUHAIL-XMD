const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© HDTI SYSTEM" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94789003663";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94789003663";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_10_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIU2JzaUVCVTMyazJoYWJnL01yMXhndlVEcmFvNHc4WUl2WG5HaEV6b0hvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUQnQ5RjRHTFNtYTZNVmxCbjdMa2ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwMGM4YzU2LTkxMjktNDg4OC04YzQ0LTFmMWY3ZjVlNzNlM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAzOSxcbiAgICAgIDI0MixcbiAgICAgIDEwOCxcbiAgICAgIDIwMyxcbiAgICAgIDEzMyxcbiAgICAgIDI0LFxuICAgICAgMTAzLFxuICAgICAgMjQ1LFxuICAgICAgMjAyLFxuICAgICAgMjEyLFxuICAgICAgNDMsXG4gICAgICAyMDIsXG4gICAgICA4MSxcbiAgICAgIDE4LFxuICAgICAgMTY0LFxuICAgICAgMjMyLFxuICAgICAgNzUsXG4gICAgICA4NixcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDE3MSxcbiAgICAgIDExNCxcbiAgICAgIDE0MyxcbiAgICAgIDg0LFxuICAgICAgMjM0LFxuICAgICAgMjI2LFxuICAgICAgMTUxLFxuICAgICAgMTIwLFxuICAgICAgOTksXG4gICAgICAxODksXG4gICAgICA0NixcbiAgICAgIDE1NixcbiAgICAgIDEzMyxcbiAgICAgIDE4OCxcbiAgICAgIDE3MyxcbiAgICAgIDE4NyxcbiAgICAgIDI4LFxuICAgICAgNSxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdLWTE4MzVRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyODExMDQ0NTo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhkdGkgU3lzdGVtXCIsXG4gICAgXCJsaWRcIjogXCIyMDM2MTYyMjkwMTk3MDY6ODdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pQMTZFR0VQTG1vTG9HR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDTlBpZnBQQmRSNTkvQnVRYjJ5VC9Pd2lJVW9TRUp5WUhORXR0RFFtWDFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkp6c1hNdGsrM3RQTUdRUEFZdlhtcTh0L0YyYUphMW5XdWZud3hmYmMyNG4yc1hMS0pvZnlkekFaQXFjNlUybXJBNDBaWGpMNi96U1diOEZuV1kxSEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhINVdyZW15YVNBQzhDWitBMkFtOXRkWkVNQTlSSkJ1RktwYmNUZHhQK2lyZ1lXaW5vWVc4YlNiam1GNzJDekx2TXEyWWFOayt2bEtXdXVmblQvR2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI4MTEwNDQ1Ojg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNzg1MDE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSENvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIQ28uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJU2lneXNPT21lWUd2dnRLNUdiUkxKZTVUaVNOZW44TWRYL2F1bTYwZ1NjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODEyNTQzMTIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ᴛʜᴀʀɪ.ʙʀᴏ",
  packname: process.env.PACK_NAME || "ʜᴅᴛɪ ᴡᴀ-ʙᴏᴛ",
  botname : process.env.BOT_NAME  || "ʜᴅᴛɪ ꜱʏꜱᴛᴇᴍ",
  ownername:process.env.OWNER_NAME|| "ᴛʜᴀʀɪ.ʙʀᴏ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "group",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
