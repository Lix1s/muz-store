import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors'

import { registerValidation, loginValidation, productCreateValidation } from './validations.js';

import {handleValidationErrors, checkAuth} from './utils/index.js';

import { UserController, ProductController } from './controllers/index.js';


mongoose.connect('mongodb+srv://admin:admin@cluster0.uwswk.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0',)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.use(express.json());

app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:4444'],
        methods: "GET, POST, PUT, DELTE",
        credentials: true
    })
);
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`, 
    });
});



//app.get('/products', ProductController.getAll);
//app.get('/products/:id',, ProductController.getOne);
app.post('/products', productCreateValidation, handleValidationErrors, ProductController.create);
app.delete('/products/:id', ProductController.remove);
app.patch('/products/:id', productCreateValidation, handleValidationErrors, ProductController.update);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK');
});





