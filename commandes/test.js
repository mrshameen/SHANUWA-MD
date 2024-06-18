
"use Strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "✅", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝗙𝗢𝗥𝗞 𝗔𝗡𝗗 𝗗𝗘𝗣𝗟𝗢𝗬 𝗠𝗬 𝗦𝗛𝗔𝗡𝗨𝗪𝗔-𝗠𝗗 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧  \n\n ' + "𝗚𝗜𝗧𝗛𝗨𝗕 𝗟𝗜𝗡𝗞";
    let d = ' https://github.com/mrshameen/SHANUWA-MD/tree/main';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/dddcc6c76f2b07627d327.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *SHANUWA-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Shanuwa*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
