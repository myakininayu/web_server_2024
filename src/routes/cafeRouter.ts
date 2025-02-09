import { Router } from 'express';
import { 
  getAll, 
  create, 
  getById, 
  updateById, 
  deleteById,
  getByPrice,
} from '../controllers/cafeController.js';

const router = Router();

// Получение всех блюд
router.get('/dishes', getAll);

// Получение блюд с фильтрацией по цене
router.get('/dishes/by-price', getByPrice);

// Получение блюда по ID
router.get('/dishes/:id', getById);

// Создание нового блюда
router.post('/dishes/create', create);

// Обновление блюда по ID
router.put('/dishes/:id', updateById);

// Удаление блюда по ID
router.delete('/dishes/:id', deleteById);

export default router;
