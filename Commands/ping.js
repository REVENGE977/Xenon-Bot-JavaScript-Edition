const { RichEmbed } = require("discord.js");
module.exports = class ping {
    constructor() {
        this.name = "ping",
        this.alias = [""],
        this.usage = "x!ping"
    }

    async run(client, message,args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            let pingEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`I have a **latency** of **${Math.round(client.ping)}ms**.`)
            .setColor("#5DBCD2")
            message.channel.send(pingEmbed)
        }catch(e) {
            throw e;
        }
    }
} 
