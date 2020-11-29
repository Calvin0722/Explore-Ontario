const Attraction = require('../models/attractionModel')

exports.getAttractionsByParkAndCategory = async (req, res) => {
    try {
        const queryObj = { ...req.query }
        const park = queryObj['park']
        const categories = queryObj['category'].split(',')
        const attractions = await Attraction.find()
        let result = []
        for (let i = 0; i < attractions.length; i++) {
            const attraction = attractions[i]
            if (categories.includes(attraction['category']) && attraction['park'] == park) {
                result.push(attraction)
            }
        }
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}