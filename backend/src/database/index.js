const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://lucasfreitasm1:Lukisuper11@cluster0.ipohh.mongodb.net/e_commerceDB?retryWrites=true&w=majority&appName=Cluster0');
    console.log('✅ Conectado ao MongoDB');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;