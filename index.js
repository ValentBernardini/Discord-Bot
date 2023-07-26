const { Client, Collection, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [3276799] });
const config = require("./config.json");
const fs = require("fs");

client.commands = new Collection();
const archivos = fs.readdirSync("./comandos").filter((f) => f.endsWith(".js"));

for (const arx of archivos) {
  const comando = require(`./comandos/${arx}`);
  client.commands.set(comando.name, comando);
  console.log(`El comando ${arx} ha sido cargado correctamente`);
}

client.on("messageCreate", async (message) => {
  if (message.content === "hola") {
    message.channel.send("Hola");
  } else if (message.content === "vieja?") {
    message.channel.send("Puta");
  } else if (message.content === "perra?") {
    message.channel.send("Puta");
  }else if (message.content === "no puede ser") {
      message.channel.send("te lo juro wacho que es verdaddddd!!!");
  } else if (message.content === "!embed") {
    const embed = new MessageEmbed()
      .setTitle("TITULO")
      .setDescription("ALICIAAAAAAAAAAAAAAAAAA")
      .setAuthor({ name: "ZILETTI", iconURL: "https://e00-elmundo.uecdn.es/america/imagenes/2010/12/29/noticias/1293644792_extras_ladillos_1_0.jpg" })
      .setThumbnail("https://i.pinimg.com/736x/ea/e7/0f/eae70f35c316a431dea4e239286c27c2.jpg")
      .setImage("https://i.pinimg.com/736x/ea/e7/0f/eae70f35c316a431dea4e239286c27c2.jpg")
      .setFooter("NASHE")
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  } else {
    const prefix = "!";
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    if (cmd) {
      cmd.run(client, message, args);
    }
  }
});

client.login(config.token);
console.log("Bot Listo");
