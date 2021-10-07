import { Router } from 'express';

// helpers
import { verifyAccessToken } from '../helpers/jwt';

// routes
import auth from './auth';
import product from './product';
import order from './order';

const router = Router();

router.get('/api', (req, res) => {
  res.end('hey!');
});

router.use('/api/auth', auth);
router.use('/api/product', product);
router.use('/api/order', verifyAccessToken, order);

export default router;
