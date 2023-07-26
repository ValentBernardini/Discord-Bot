const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "encuesta",
  description: "Crea una encuesta en el chat.",
  usage: "!encuesta <pregunta> <opción1> <opción2> ... <opciónN>",
  run: async (client, message, args) => {
    // Verificar que al menos haya una pregunta y dos opciones
    if (args.length < 3) {
      return message.channel.send(
        "Debes proporcionar al menos una pregunta y dos opciones para la encuesta."
      );
    }

    // Extraer la pregunta y las opciones del array de argumentos
    const pregunta = args.shift();
    const opciones = args;

    // Crear el mensaje de la encuesta
    const embed = new MessageEmbed()
      .setColor("#ff9900")
      .setTitle("📊 Encuesta")
      .setDescription(pregunta);

    // Agregar las opciones al mensaje de la encuesta
    opciones.forEach((opcion, index) => {
      embed.addField(`Opción ${index + 1}`, opcion, true);
    });

    // Enviar el mensaje de la encuesta y reaccionar con emojis para cada opción
    const sentMessage = await message.channel.send({ embeds: [embed] });
    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];

    for (let i = 0; i < opciones.length; i++) {
      await sentMessage.react(emojis[i]);
    }
  },
};
