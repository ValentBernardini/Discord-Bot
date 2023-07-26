// Define la colección de palabras y sus respectivas URL de imágenes
const images = {
    ziletti: "https://ardiaprod.vtexassets.com/arquivos/ids/247890/Cerveza-Lager-DIA-lata-473-Ml-_1.jpg?v=638167491722300000",
    titi: "https://www.quimicaysociedad.org/wp-content/uploads/2018/06/quimica.jpg",
    juan: "https://c8.alamy.com/compes/d7724x/caniche-negro-con-rulos-y-pearl-necklace-aislado-en-blanco-d7724x.jpg",
    ñoqui: "https://www.desdelaplaza.com/wp-content/uploads/2014/08/dj-discapacidad.jpg"
    // Agrega más palabras y URL de imágenes según sea necesario
  };
  
  module.exports = {
    name: "image",
    description: "Envía una imagen correspondiente a una palabra específica.",
    run: async (client, message, args) => {
      const prefix = "!"; // El prefijo del bot
      const command = args[0].toLowerCase(); // Obtenemos la palabra ingresada y la convertimos a minúsculas
  
      // Verificamos si la palabra está en la colección de imágenes
      if (images[command]) {
        message.channel.send(images[command]);
      } else {
        message.channel.send(`No se encontró una imagen para la palabra "${command}"`);
      }
    },
  };
  