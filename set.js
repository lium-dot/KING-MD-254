const fs = require('fs');
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname + '/.env' });

// ================= UNIVERSAL SETTINGS =================
// 1. You can set these in your Panel "Variables" tab.
// 2. OR you can edit the "Default" values (the string after ||) directly here.

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFnY0VSUWthOG4rOFBKdjQ3enBycWxjdnhzWE5BcXpFVm5TbkRZOEtsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjFmMlZVdjJMYVRRWCtoRjlnL2FVbkxGL1dPSlE0eDVwaWJ1ejFoa2FSRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQm1FdGVzeEZsdVA1WmlWYWlmU3p1SldIb1llQ2ZTTWg4azlTYkZDdUhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnV1VXZ29HeXJyRGN6NzcvTEZocXhQMHg0Uzg1TmFINTE1K2lRWmdIcW1FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldNVHJvSlF4d0ViMXFYeWFyazAwWjR0MnpPaWVYaXFBVVJUK1RHRVFWMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IithTWsyUVdwYjJxL2xxK29mSFh0RS9XQ1ZnSDllaWc4WDRveFNPZzRjMjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkErdXVaUDlUTHYvbkJvTHRob0g3RmM1OUdHaW84bFBpR2twT2hIWW5IWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVY0WUREYWRoZUlabWtKd2FNUjBjOCtKcHk3eWVra25OYi9vS3dVbGJVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdzRTFZR1N6anNUR3FiVWFqQ1p3aVl2TlFhWGJDbTJxN0tDallMMUg4YjBYZ2IwSUt6cmVTb050OWRTVzR6T0hSMmxvN3JkSTA3VTVJNzhpbTBBbWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJLM096bTZ3YStJeFRLRUVEYmN4VlJRNzhpbjNDZ3dPQzRmMkNCbVJEUkVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZNTg2NzhUOSIsIm1lIjp7ImlkIjoiMjU0NzU4NDQzMTExOjYxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE3NDgwODI3NjU4MjUwOjYxQGxpZCIsIm5hbWUiOiJBbGxlbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlhVME9zQkVKMlR2OHNHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOFppNnhCNDVqcExaY3NFTmJBdmZKODdaSWpOcTNRRHBJaHhDNkh2Y1FVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiemFmeC92eE9lRm9sTWNuRnJzdm0rbFo2Y0lJb21QZ3IyVnZ5UGJOVGsvbWVMUW0rMkNwRnFjZS9RNTUyUENLTy9EUWFZYU0wZkV2ZlJsU2orR1J6Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IkQraGx4TjN2YmlVNTFuK1gxKzA0Yloya1VYUUpYcGdldEVRUk9xSTIzRytMNUc3VkNoM1F1dnFzSXZ0U1JldWZBQkVpK0VlU28zelpjd20xNHo4MGl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU4NDQzMTExOjYxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZHWXVzUWVPWTZTMlhMQkRXd0wzeWZPMlNJemF0MEE2U0ljUXVoNzNFRkEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2ODkzMzgwNSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEclUifQ==';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API || '';

// 🔹 BOT IDENTITY
const botname = process.env.BOTNAME || 'KING-M';
const author = process.env.STICKER_AUTHOR || 'ᴄᴏʀᴇ';
const packname = process.env.STICKER_PACKNAME || 'ᴘᴇᴀᴄᴇ';

// 🔹 OWNER SETTINGS
// Add your number below inside the quotes (No '+' sign)
// If you have multiple owners, separate them with commas: '2547XXXX,2547YYYY'
const dev = process.env.DEV || '254758443111';
const owner = dev.split(",");
const mycode = process.env.CODE || '254';
const port = process.env.PORT || 8080;

// 🔹 DATABASE
// This is the Backup/Display URL. 
// Note: The actual connection logic is handled in config.js (Hybrid Mode).
const databaseUrl = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_lSc0PpxgeYn6@ep-rapid-forest-a4hm0939-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

// 🔹 VISUALS & MENUS
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/as1b4c.png';
const menu = process.env.MENU_TYPE || 'VIDEO'; // Options: IMAGE, VIDEO, GIF

// 🔹 MESSAGES
const bad = process.env.BAD_WORD || 'fuck';
const admin = process.env.ADMIN_MSG || 'ᴄᴏᴍᴍᴀɴᴅ ʀᴇsᴇʀᴠᴇᴅ ꜰᴏʀ ᴀᴅᴍɪɴs!';
const group = process.env.GROUP_ONLY_MSG || '👥 ᴄᴏᴍᴍᴀɴᴅ ᴍᴇᴀɴᴛ ꜰᴏʀ ɢʀᴏᴜᴘs!';
const botAdmin = process.env.BOT_ADMIN_MSG || '🧃 ʏᴏᴜ ɴᴇᴇᴅ ᴀɴ ᴀᴅᴍɪɴ ᴊᴜɪᴄᴇ ʀᴇꜰɪʟʟ ʙᴇꜰᴏʀᴇ sɪᴘᴘɪɴɢ ᴏɴ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!';
const NotOwner = process.env.NOT_OWNER_MSG || '👮 ᴄᴏᴍᴍᴀɴᴅ ᴍᴇᴀɴᴛ ꜰᴏʀ ᴛʜᴇ ᴏᴡɴᴇʀ!';

module.exports = {
  session,
  sessionName,
  author,
  packname,
  dev,
  owner,
  bad,
  group,
  NotOwner,
  botname,
  botAdmin,
  menu,
  menulink,
  admin,
  mycode,
  herokuapi,
  port,
  appname,
  databaseUrl
};

// ================= WATCHER =================
// This reloads the file automatically if you edit it while the bot is running.
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update '${__filename}'`);
  delete require.cache[file];
  require(file);
});
