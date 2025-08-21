import { Router } from 'express';
import { auth } from '../middleware/auth';
import { createMarking, deleteMarking, exportGeoJSON, getAllMarkings, updateMarking } from '../controllers/markingController';

const router = Router();

router.get('/', getAllMarkings);
router.post('/', auth, createMarking);
router.put('/:id', auth, updateMarking);
router.delete('/:id', auth, deleteMarking);
router.get('/export/geojson', exportGeoJSON);

export default router;

 