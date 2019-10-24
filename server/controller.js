const cardArr = require('./cards.json')


module.exports = {
    getCards: (req, res) => {
        res.status(200).send(cardArr)
        console.log(cardArr)
    }
}