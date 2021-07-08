module.exports = (app) => {
    const members = require('../controllers/member.controller.js');

    // Create a new Member
    app.post('/add', members.create);

    // Retrieve all Member
    app.get('/members', members.findAll);

    // Retrieve a single Member with noteId
    app.get('/members/:memberId', members.findOne);

    // Update a Member with noteId
    app.put('/members/:memberId', members.update);

    // Delete a Member with noteId
    app.delete('/members/:memberId', members.delete);
}