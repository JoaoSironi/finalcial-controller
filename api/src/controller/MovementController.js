const service = require('../service/movementService');

module.exports = {
    async  create (request, response)  {
        console.log('create');
        console.log(request.body);
        
        const { name, type, date, category, description, value } = request.body;

        const result = await service.create({ name, type, date, category, description, value });

        return response.json(result);
    },
};