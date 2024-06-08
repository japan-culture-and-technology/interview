import express from 'express';
import { ExperienceController } from '../interface/controller/ExperienceController';

const experienceController = new ExperienceController();
const router = express.Router();

router.get('/experiences', async (_, res): Promise<void> => {
  let results = await experienceController.findAll();
  res.send(results);
});

export default router;
