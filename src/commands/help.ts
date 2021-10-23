const Programs = require('./programs');
const Translate = require('./translate');

module.exports = { 
    name: "help",
    description: "Displays all commands",
    run(message :any, Discord :any) {

        const msg = new Discord.MessageEmbed()
        .setColor('#c7651a')
        .setTitle('Commands')
        .setURL('https://github.com/ctnkaan/Postman-Student-Helper')
        .setAuthor(
            'Postman Student Helper',
            'https://i.imgur.com/ElCDWZb.png',
            'https://github.com/ctnkaan/Postman-Student-Helper'
        )
        .addFields(
            {
                name: "!p " + Programs.name,
                value: Programs.description,
            },
            {
                name: "!p " + Translate.name + " <text>",
                value: Translate.description,
            },
        )
        .setTimestamp()
        .setFooter(
            'type "!p help" for more info!',
            'https://i.imgur.com/ElCDWZb.png'
        );
        message.channel.send(msg)
    }
}