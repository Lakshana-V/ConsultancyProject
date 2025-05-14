import express from 'express';
import { add } from '../Controller/Controllr.js';

const router = express.Router();

router.post('/quotes', add);

export default router;
    