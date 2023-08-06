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

    async update(movement) {
        await connection('MOVEMENTS').where('id', movement.id).update({
            name: movement.name,
            type: movement.type,
            date: movement.date,
            id_category: movement.category,
            description: movement.description,
            value: movement.value
        });
    }

    async delete(id) {
        await connection('MOVEMENTS').where('id', id).delete();
    }

    async list() {
        const movements = await connection('MOVEMENTS')
            .join('CATEGORIES', 'CATEGORIES.id', '=', 'MOVEMENTS.id_category')
            .select(['MOVEMENTS.*', 'CATEGORIES.name as category_name']);

        return movements;
    }

    async get(id) {
        const movement = await connection('MOVEMENTS')
            .join('CATEGORIES', 'CATEGORIES.id', '=', 'MOVEMENTS.id_category')
            .select(['MOVEMENTS.*', 'CATEGORIES.name as category_name'])
            .where('MOVEMENTS.id', id)
            .first();

        return movement;
    }
}

module.exports = new MovementRepository();