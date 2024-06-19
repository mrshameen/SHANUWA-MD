
const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

zokou({ nomCom: "developer", categorie: "General", reaction: "👨‍💻" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: " *✔️.Creater :Shanuwa* ", numero: "94724389699" },
      { nom: " *✔️.Co Leader : Hemal Veenath* ", numero: "94719552053" },
        { nom: " *✔️. Ideas : Sahan Maduwantha* ", numero: "94720797915" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "👋 *WELCOME TO SHANUWA-MD WHATSAPP USER BOT.. SHANUWA-MD DEVELOPERS ARE* \n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

zokou({ nomCom: "support", categorie: "Help" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("*SHANUWA-MD Developer @Shanuwa's Number*")
  await zk.sendMessage(auteurMessage,{text : `https://wa.me/94724389699?text=Hey_SHANUWA-MD_Owner_👨‍💻✅`},{quoted :ms})

});
zokou({ nomCom: "shanuwa", categorie: "Developer" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *SHANUWA-MD BOT CREATED BY SHANUWA💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀FROM GALLE💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 17 YEARS OLD 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© 𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑺𝑯𝑨𝑵𝑼𝑾𝑨 *..👨‍💻* ")
  await zk.sendMessage(auteurMessage,{text : `*Leader Link https://wa.me/94724389699?text=Hey_Owner_👨‍💻✅*`},{quoted :ms})

});   
zokou({ nomCom: "sahan", categorie: "Developer" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *SHANUWA-MD BOT* 💀 \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀FROM GALLE💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 17 YEARS OLD 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© 𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑺𝑯𝑨𝑵𝑼𝑾𝑨 *..👨‍💻* ")
  await zk.sendMessage(auteurMessage,{text : `*Ideas Link https://wa.me/94724389699?text=Hey_Owner_👨‍💻✅*`},{quoted :ms})

});   
zokou({ nomCom: "ping" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("*SHANUWA-MD PING* \n *72 MS*")
  await zk.sendMessage(auteurMessage,{text : `*© 𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑺𝑯𝑨𝑵𝑼𝑾𝑨 *`},{quoted :ms})
})
