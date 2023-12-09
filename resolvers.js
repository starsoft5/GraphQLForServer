const User = require('./models/User');

const resolvers = {
    Query: {
        async getUser(_, { id }) {
            return await User.findByPk(id);
        },
        async getAllUsers() {
            return await User.findAll();
        },
    },
    Mutation: {
        async createUser(_, { name, email }) {
            return await User.create({ name, email });
        },
        async updateUser(_, { id, name, email }) {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found.');
            await user.update({ name, email });
            return user;
        },
        async deleteUser(_, { id }) {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found.');
            await user.destroy();
            return true;
        },
    },
};

module.exports = resolvers;
