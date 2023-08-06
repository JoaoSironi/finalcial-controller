const service = require('../service/movementService');

module.exports = {
    async create (request, response)  {
        const { name, type, date, category, description, value } = request.body;

        try {
            const result = await service.create({ name, type, date, category, description, value });

            if(!result) {
                throw new Error('Error creating movement');
            }

            return response.json(`Movement ${name} created successfully`);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    },

    async update (request, response)  {
        const { id } = request.params;
        const { name, type, date, category, description, value } = request.body;

        try {
            await service.update({ id, name, type, date, category, description, value });

            return response.json(`Movement ${name} updated successfully`);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    },

    async delete (request, response)  {
        const { id } = request.params;

        try {
            await service.delete(id);

            return response.json(`Movement ${id} deleted successfully`);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    },

    async list (request, response)  {
        try {
            const { id } = request.params;

            if(id) {
                const movement = await service.get(id);

                return response.json(movement);
            }
            
            const movements = await service.list();

            return response.json(movements);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
};