import ProductModel from '../models/Product.js'

export const create = async (req, res) => {
    try {
        const doc = new ProductModel({
            category: req.body.category,
            price: req.body.price,
            title: req.body.title,
            imageUrl: req.body.imageUrl,
        });

        const post = await doc.save();

        res.json(post); 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось добавить товар',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const productId = req.params.id;
        const doc = await ProductModel.findOneAndDelete({ _id: productId });

        if (!doc) {
            return res.status(404).json({
                message: 'Товар не найден'
            });
        }
    
        res.json({
            success: true
        });
        
    } catch (err) {

        console.log(err);
        res.status(500).json({
            message: 'Не удалось удалить товар'
        });
    }
};

    export const update = async (req, res) => {
        try {
            const productId = req.params.id;

            await ProductModel.updateOne({
                _id: productId,
            }, {
                category: req.body.category,
                price: req.body.price,
                title: req.body.title,
                imageUrl: req.body.imageUrl,
            });

            res.json({
                succes: true,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Не удалось обновить товар',
            });
        }
    }