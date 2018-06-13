module.exports = {
    environment: 'development',
    sequelize: {
        options: {
            timestamps: false,
            freezeTableName: true
        }
    },
    db: {
        database: 'movie',
        host: 'localhost',
        port: 3306,
        user: 'movie',
        password: 'movie'
    }
}