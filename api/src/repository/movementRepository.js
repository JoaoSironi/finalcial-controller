const connection = require('../database/connection');

class MovementRepository {
    async create(movement) {

        const [id] = await connection('MOVEMENTS').insert({
            name: movement.name,
            type: movement.type,
            date: movement.date,
            id_category: movement.category,
            description: movement.description,
            value: movement.value
        });

        return id;
    }
}

module.exports = new MovementRepository();