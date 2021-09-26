const Discord = require('discord.js')
exports.run = async(client, msg, args) => {
    if(!msg.member.permissions.has('MANAGE_MESSAGES')) return; // MANAGE_MESSAGES can be changed to something else!
    if(!args[0]) return msg.reply('You Need To Specify A Number Of Messages That You Want To Purge!');
    if(isNaN(args[0])) return msg.reply('You Need To Specify A Valid Number of Messages that you want Me to Delete!');

    if(args[0] > 100) return msg.reply('You Need To Specify A Number Less than 100!');
    if(args[0] < 1) return msg.reply('You Need To Specify A Number Greater than 1!');

    msg.delete()
    await msg.channel.messages.fetch({limit: args[0]}).then (async messages => {
        msg.channel.bulkDelete(messages);

    var embed = new Discord.MessageEmbed()
        .setColor('0x06F7C7')
        .setDescription(`✅ I Have Successfully Deleted ${args[0]} Messages!\nCreated by [Nickzz](https://github.com/NickzzDev/)`)
        .setFooter('This message will auto-delete in 5 seconds.')
      var sendEm = await msg.channel.send({ embeds: [embed] });
       msg.delete()
       setTimeout(() => {
       sendEm.delete()
        }, 5000);  // The sent embed by the bot is deleted after 5 seconds. This can be changed!
    })
}   
