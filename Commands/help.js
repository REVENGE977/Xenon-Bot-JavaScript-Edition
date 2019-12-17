const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = [""],
        this.usage = "**x!help"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Creating**__")
            .setDescription(`
            
            __**Security**__
            
            **x!backup**          Create & load backups of your servers
            
            __**Others**__
            
            **x!help**            Shows this message
            **x!info**            Get Information about Xenon
            **x!invite**          Invite Xenon
            **x!leave**           Let the bot leave
            **x!ping**            Pong
            **x!tiers**           Shows information about Xenon Pro & Turbo
            
            `)
            .setFooter(`Use \`**x!help [command]\` for more info on a command.
            You can also use \`**x!help [category]\` for more info on a category.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**x!backup**

Create & load backups of your servers

__**Commands**__
`)
                    .setDescription(`
                x!backup create        Create a backup
                x!backup delete        Delete one of your backups
                x!backup info          Get information about a backup
                x!backup list          Get a list of your backups
                x!backup load          Load a backup
                x!backup purge         Delete all your backups`)
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**x!help [command]**")
                    .setDescription("Shows this message")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**x!info**")
                    .setDescription("Get Information about Xenon")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!invite**")
                    .setDescription("Invite Xenon")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!leave**")
                    .setDescription("Let the bot leave")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }


            if (args[1] === "tiers") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!tiers**")
                    .setDescription("Shows information about Xenon Pro & Turbo")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

        }catch(e) {
            throw e;
        }
    }
}
