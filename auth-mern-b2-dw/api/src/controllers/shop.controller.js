const Shop = require('../models/shop.model');

const ShopController = {
    create: async (req, res) => {
        const { name } = req.body
        const { user } = req
        const {description} = req.body
        const {location} = req.body
        const {imageUrl} = req.body

        const shop = new Shop({name, user, description, location, imageUrl})
        
        try {
            await shop.save()
            res.status(201).send(shop)
        } catch (error) {

            res.status(500).send({message: error.message})
        }
    },

    getAll: async (req, res) => {
        const shops = await Shop.find()
        res.json({ success: true, data: shops })
    },

    getOne: async (req, res) => {
        try {
            const shop = await Shop.findById(req.params.id)
            res.json({ success: true, data: shop })
        }
        catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

module.exports = ShopController