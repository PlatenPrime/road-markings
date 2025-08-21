import { Router } from 'express';
import { auth, requireAdmin } from '../middleware/auth';
import { createRoadRule, deleteRoadRule, getAllRoadRules, updateRoadRule } from '../controllers/roadRuleController';

const router = Router();

router.get('/', getAllRoadRules);
router.post('/', auth, requireAdmin, createRoadRule);
router.put('/:id', auth, requireAdmin, updateRoadRule);
router.delete('/:id', auth, requireAdmin, deleteRoadRule);

export default router;

 