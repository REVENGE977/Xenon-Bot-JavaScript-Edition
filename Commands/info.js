const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "x!info"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Xenon**")
         .setThumbnail("https://cdn.discordapp.com/avatars/416358583220043796/8f702ebf579bce2d7a6f0a4419ac5faf.webp?size=1024")
         .setDescription("Server Backups, Templates and more")
         .addField("Invite", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=416358583220043796&scope=bot&permissions=8)", true)
         .addField("Discord", "[Click Here](https://discord.club/discord)")
         .addField("Prefix", "x!", true)
         .addField("Guilds", client.guilds.size, true)
         .addField("Users:", client.users.size, true)
         .setFooter("Owned by ~ REVENGE#2179")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}