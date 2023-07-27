const repository = require('../repository/movementRepository');

class MovementService {
    async create(movement) {
        return await repository.create(movement);
    }
}

module.exports = new MovementService();