const Discord = require("discord.js")
const client = new Discord.Client()

exports.run = async (client, message, args) => {
    if (!['seu id'].includes(message.author.id)) {
    return message.channel.send(`apenas meu desenvolvedor pode utilizar`)
    }
    let code = args.slice(0).join(" ");
    
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          let embed = new Discord.RichEmbed()
          .setDescription(`:inbox_tray: **ENTRADA**\n\`\`\`js\n${code}\`\`\`\n:outbox_tray: **SAÍDA**\n\`\`\`js\n${ev}\`\`\``)
          .setColor('#00000')
        message.channel.send(embed)
        } catch(err) {
          
          let errorrr = new Discord.RichEmbed()
          .setDescription(`<:DL_incorreto:693214803359039578> **ERRO DETECTADO!**\n\`\`\`\n${err}\`\`\``)
          .setColor('RED')
            message.channel.send(errorrr)
        }
  }
 exports.help = {
      name: "eval",
     aliases: []
 }
