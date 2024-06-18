
const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    
 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Asia/colombo');

// Create a date and time in EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╒═══💀SHANUWA-MD💀═══════⫸
│🔥 *𝐏ʀᴇꜰɪx* : *${s.PREFIXE}*
│🔥 *𝐔ꜱᴇʀ* : *${s.OWNER_NAME}*
│🔥 *𝐌ᴏᴅᴇ* : *${mode}*
│🔥 *𝐂ᴏᴍᴍᴀɴᴅꜱ* : *${cm.length}*
│🔥 *𝐃ᴀᴛᴇ* : *${date}*
│🔥 *𝐓ɪᴍᴇ* : *${temps}* 
│🔥 *𝐑ᴀᴍ* : *${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}*
│🔥 *𝐏ʟᴀᴛꜰᴏʀᴍ* : *${os.platform()}*
│🔥 *𝐃ᴇᴠᴇʟᴏᴘᴇʀ* : *Shanuwa*
│🔥 *𝐕ᴇʀꜱɪᴏɴ* : *V1.0*
│🔥 *𝐆ɪᴛʜᴜʙ* : *mrshameen*
╘═══💀SHANUWA-MD💀═══⫸`;

  let menuMsg=`  

*SHANUWA-MD COMMANDS :*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`;

    for (const cat in coms) {
        menuMsg += `╭────👨‍💻 *${cat}* 👨‍💻⊷`;
        for (const cmd of coms[cat]) {
            menuMsg += `
 *│💀* *${cmd}*`;
        }
        menuMsg += `
╰═════════════⊷ \n`
    }

    menuMsg += `
◇            ◇
*————— 👨‍💻SHANUWA MIND👨‍💻 —————*

  💀 *Lol* 💀                                         
╰═════════════⊷
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*📌Sahan*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
