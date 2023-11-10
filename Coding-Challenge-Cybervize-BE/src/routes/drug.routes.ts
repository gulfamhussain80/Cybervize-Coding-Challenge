import { Router } from 'express';
import * as DrugController from '../controllers/drug.controller';
import * as DrugValidator from '../middleware/drugValidator';

const router = Router();

router
    .post('/drug/new', DrugValidator.validateCreateDrugPayload, DrugController.createDrug)
    .get('/drugs', DrugController.getAllDrugs)
    .delete('/drug/delete', DrugController.deleteDrugByID)
    .put('/drug/update', DrugValidator.validateUpdateDrugPayload, DrugController.updateDrugByID)

router.route('/drug/:id')
    .get(DrugController.getDrugByID);

export default router
// Implement other Drug routes for CRUD operations.
