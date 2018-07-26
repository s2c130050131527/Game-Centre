import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
  return 'Hello World';
});

export default router;
