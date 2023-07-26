module.exports = {
  name: "ping",
  description: "Comando para ver el ping del bot.",
  run: async (client, message, args) => {
    message.channel.send(`Pong! Mi ping es de ${client.ws.ping}ms`);
  },
};
