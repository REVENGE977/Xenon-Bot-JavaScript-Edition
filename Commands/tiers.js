const { RichEmbed } = require("discord.js");
module.exports = class tiers {
    constructor() {
        this.name = "tiers",
        this.alias = [],
        this.usage = "x!tiers"
    }

    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            let tierEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**Xenon Pro** and **Xenon Turbo** are the **paid versions** of Xenon. They extend the existing features of Xenon and add new ones.
You can buy them [here](https://www.patreon.com/merlinfuchs) and find **more information** and a **detailed list of perks** [here](https://docs.discord.club/xenon/tiers)`)
            .setColor("#5DBCD2")
            message.channel.send(tierEmbed)
        }catch(e) {
            throw e;
        }
    }
}
