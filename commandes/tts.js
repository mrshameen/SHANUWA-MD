
const googleTTS = Require('google-tts-api');
const {zokou} = require("../framework/zokou");


zokou( {
  nomCom : "read",
 categorie : "tts",
  reaction : "👄" },
      async(dest,zk, commandeOptions)=> {
 
const {ms,arg,repondre} = commandeOptions;
      if (!arg[0]) {repondre("Insert a word");return} ;
 const mots = arg.join(" ")

const url = googleTTS.getAudioUrl( mots, {
  lang: 'fr',
  slow: false,
  host: 'https://translate.google.com',
});
console.log(url); 
             zk.sendMessage(dest, { audio: { url:url},mimetype:'audio/mp4' }, { quoted: ms,ptt: true });


        
}
) ;

zokou( {
  nomCom : "read2",
 categorie : "tts",
  reaction : "👄" },
      async(dest,zk, commandeOptions)=> {
 
const {ms,arg,repondre} = commandeOptions;
      if (!arg[0]) {repondre("Insert a word");return} ;
 const mots = arg.join(" ")

const url = googleTTS.getAudioUrl( mots, {
  lang: 'ja',
  slow: false,
  host: 'https://translate.google.com',
});
console.log(url); 
             zk.sendMessage(dest, { audio: { url:url},mimetype:'audio/mp4' }, { quoted: ms,ptt: true });


        
}
) ;

zokou( {
  nomCom : "say",
 categorie : "tts",
  reaction : "👄" },
      async(dest,zk, commandeOptions)=> {
 
const {ms,arg,repondre} = commandeOptions;
      if (!arg[0]) {repondre("Insert a word");return} ;
 const mots = arg.join(" ")

const url = googleTTS.getAudioUrl( mots, {
  lang: 'en',
  slow: false,
  host: 'https://translate.google.com',
});
console.log(url); 
             zk.sendMessage(dest, { audio: { url:url},mimetype:'audio/mp4' }, { quoted: ms,ptt: true });


        
}
) ;

