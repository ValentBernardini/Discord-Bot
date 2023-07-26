const { MessageEmbed } = require("discord.js");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "meme",
  description: "Envía un meme divertido.",
  run: async (client, message, args) => {
    try {
      const response = await fetch("https://meme-api.herokuapp.com/gimme");
      const data = await response.json();

      const embed = new MessageEmbed()
        .setTitle(data.title)
        .setImage(data.url)
        .setFooter(`👍 ${data.ups} | 💬 ${data.comments}`);

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error("Error al obtener el meme:", error);
      message.channel.send("Lo siento, ha ocurrido un error al obtener el meme.");
    }
  },
};
