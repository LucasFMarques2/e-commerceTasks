// utils/createAdmin.js
const bcrypt = require('bcryptjs');
const User = require('../database/models/User');

const createDefaultAdmin = async () => {
    try {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            console.log('Credenciais de administrador padrão não definidas nas variáveis de ambiente.');
            return;
        }

        const existingAdmin = await User.findOne({ email: adminEmail });

        if (!existingAdmin) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(adminPassword, salt);

            const newAdmin = new User({
                nome: 'Administrador',
                email: adminEmail,
                password: hashedPassword,
                isAdmin: true
            });

            await newAdmin.save();
            console.log('Usuário administrador padrão criado com sucesso.');
        } else {
            console.log('');
        }
    } catch (error) {
        console.error('Erro ao criar usuário administrador padrão:', error);
    }
};

module.exports = createDefaultAdmin;
