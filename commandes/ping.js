
const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
const conf = require('../set');

zokou({
        pattern: "ping",
        desc: "To check ping",
        category: "test",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```PING SHANUWA MD```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '_SHANUWA-MD PONG_\n *' + (final - inital) + ' ms* ', edit: key});
    }
);
