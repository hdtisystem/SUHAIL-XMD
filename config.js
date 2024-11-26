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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_45_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNCQ0ZVVVQwUHJzUlNLa2k1djJHbGQzdUIyNlprSXBNYTZVQUVSUDQ0blU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjgxMTA0NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdBRDY1Qzk5RjBFMUZFNDgzODNDNjYyODE0NjQyNjREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjYzNTkyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI4MTEwNDQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MDlBODE5ODgyMDRBMDIzNUY0REVDNEZCOTJBNjdFQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI2MzU5MjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibEVubThpTFNRTVNGSE5QZ3haUXdrUVwiLFxuICBcInBob25lSWRcIjogXCJjYWQzZTJmOS1hMDMxLTQxZGItYmY4Ni1mODdmOWNkNzg2YTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAxNTAsXG4gICAgICA2MCxcbiAgICAgIDE1NSxcbiAgICAgIDI0MSxcbiAgICAgIDQzLFxuICAgICAgMTUwLFxuICAgICAgMTc5LFxuICAgICAgMjcsXG4gICAgICAxMDksXG4gICAgICA3NixcbiAgICAgIDQyLFxuICAgICAgNzQsXG4gICAgICAxOTYsXG4gICAgICAyOSxcbiAgICAgIDE0MixcbiAgICAgIDIxMCxcbiAgICAgIDE5MixcbiAgICAgIDQ4LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDEzNCxcbiAgICAgIDIyNyxcbiAgICAgIDIzNyxcbiAgICAgIDIwMixcbiAgICAgIDIyNCxcbiAgICAgIDIxLFxuICAgICAgMTA4LFxuICAgICAgNjUsXG4gICAgICA4NCxcbiAgICAgIDIxOCxcbiAgICAgIDExNSxcbiAgICAgIDE0MixcbiAgICAgIDIzMyxcbiAgICAgIDc5LFxuICAgICAgNjQsXG4gICAgICAxODksXG4gICAgICAzMSxcbiAgICAgIDMxLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZWWEMzUTdYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyODExMDQ0NTo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhkdGkgU3lzdGVtXCIsXG4gICAgXCJsaWRcIjogXCIyMDM2MTYyMjkwMTk3MDY6ODFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pQMTZFR0VJM2FsN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDTlBpZnBQQmRSNTkvQnVRYjJ5VC9Pd2lJVW9TRUp5WUhORXR0RFFtWDFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFUdklkTFVodU9yNjFMUUJHQThyMG04Z21PcU40N1NqZzhCekwwN2YxRno2R3czcmJGbGFlSWFVcWpjVGI4UzVxdUVwYzV1cDI2bHFnUjhxZUpXNER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdXWjdTcXV6SG92dWtZZWRIZERwbWJsUmFyYVh5dnN5d1pSakh3N1VXTStjYStNZHkwcmFkellDK0dHM20rYksyYXFySDhBRGpWRCtaSFZJRzZzMkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI4MTEwNDQ1OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNjM1OTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSENtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIQ20uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxWVYwNzNEbFlybUQ3bUpPYzNsTFJDU2dKNDB6WldmN2JHUkcxb1d0azFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODEyNTQzMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTk0MzYwNzU3M1wifSIKfQ=="  // PUT your SESSION_ID 


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
