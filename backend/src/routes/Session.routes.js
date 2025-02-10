const {Router} = require('express');

const SessionsController = require('../controllers/SessionsController');


const sessionRouter = Router();
const sessionController = new SessionsController();

sessionRouter.post('/', sessionController.create);

module.exports = sessionRouter;