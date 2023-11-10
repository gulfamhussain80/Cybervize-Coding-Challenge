import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateCreateDrugPayload = [
  body('name').isString().isLength({ min: 1 }).withMessage('Name of Drug is required and should be a string'),
  body('description').isString().isLength({ min: 1 }).withMessage('Drug description is required and should be a string'),
  body('released').isString().isLength({ min: 1 }).withMessage('Drug release date is required and should be a string'),
  body('diseases').isArray().withMessage('Diseases are required and should be an array of strings'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateUpdateDrugPayload = [
    body('id').isString().isLength({ min: 1 }).withMessage('Drug ID is required and should be a string'),
    body('name').optional().isString().isLength({ min: 1 }).withMessage('Drug Name should be a string'),
    body('description').optional().isString().isLength({ min: 1 }).withMessage('Drug description should be a string'),
    body('released').optional().isString().isLength({ min: 1 }).withMessage('Drug release date should be a string'),
    body('diseases').optional().isArray().withMessage('Diseases should be an array of strings'),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];

