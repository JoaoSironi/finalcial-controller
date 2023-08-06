const repository = require('../repository/movementRepository');

class MovementService {
    async create(movement) {
        return await repository.create(movement);
    }

    async update(movement) {
        await repository.update(movement);
    }

    async delete(id) {
        await repository.delete(id);
    }

    async list() {
        return await repository.list();
    }

    async get(id) {
        return await repository.get(id);
    }
}

module.exports = new MovementService();