import express from 'express';
import FemiController from '../controller/femi';

const Route = express.Router();
const endpoint = '/api/vi/sum';

Route.get(endpoint, FemiController.getId);

export default Route;
