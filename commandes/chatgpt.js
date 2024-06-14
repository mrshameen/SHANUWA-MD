//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                    //
//                                             W H A T S A P P _ U S E R _ BOT                                        //
//                                                                                                                    //
//                                                     V E R S I O N：１.0                                             //
//                                                                                                                    //
//            ███╗░░░███╗░░█████╗░░███████╗░█████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░        //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║═══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░        //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░        // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░        //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░        //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░░        //
//                                                                                                                    //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                          //  
//                                                                                                                    //
//                                                                                                                    //
//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const { bot, getGPTResponse, getDallEResponse } = require('../lib')

bot(
  {
    pattern: 'gpt ?(.*)',
    fromMe: true,
    desc: 'ChatGPT fun',
    type: 'AI',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('*Example : gpt What is the capital of France?*')
    const res = await getGPTResponse(match)
    await message.send(res, { quoted: message.data })
  }
)

bot(
  {
    pattern: 'dall ?(.*)',
    fromMe: true,
    desc: 'dall image generator',
    type: 'AI',
  },
  async (message, match) => {
    if (!match)
      return await message.send(
        '*Example : dall a close up, studio photographic portrait of a white siamese cat that looks curious, backlit ears*'
      )
    const res = await getDallEResponse(match)
    await message.sendFromUrl(res)
  }
)
