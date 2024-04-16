import { Router } from 'express'
import { body, oneOf } from 'express-validator'
import { handlesInputErrors } from './modules/middleware'

const router = Router()

/**
 * Products
 */
router.get('/product/', () => {})
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(), handlesInputErrors, (req, res) => {

})
router.post('/product', () => {})
router.delete('/product/:id', () => {})

/**
 * Update
 */
router.get('/update/', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED','DEPRECATED']),
    body('version').optional(),
 () => {}
)
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
 () => {})
router.delete('/update/:id', () => {})

/**
 * Update Point
 */
router.get('/updatepoint/', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
    () => {}
)
router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {}
)
router.delete('/updatepoint/:id', () => {})

export default router