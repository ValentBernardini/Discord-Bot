const axios = require("axios");

module.exports = {
  name: "joke",
  description: "Envía un chiste aleatorio en español.",
  run: async (client, message, args) => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/search?lang=es", {
        headers: { Accept: "application/json" },
      });
      const data = response.data;

      if (data && data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const joke = data.results[randomIndex].joke;
        message.channel.send(joke);
      } else {
        message.channel.send("No se pudo obtener un chiste en español en este momento.");
      }
    } catch (error) {
      console.error("Error al obtener el chiste en español:", error);
      message.channel.send("Lo siento, ha ocurrido un error al obtener el chiste en español.");
    }
  },
};

