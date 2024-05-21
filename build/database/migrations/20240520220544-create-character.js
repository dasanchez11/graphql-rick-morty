/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Characters", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            name: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.STRING,
            },
            species: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.addColumn("Location", "location_id", {
            type: Sequelize.UUID,
            references: {
                model: "Location",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("Characters");
    },
};
export {};
//# sourceMappingURL=20240520220544-create-character.js.map