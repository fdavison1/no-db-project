const cardArr = require('./cards.json')


module.exports = {
    getCards: (req, res) => {
        res.status(200).send(cardArr)
        // console.log(cardArr)
    },
    getCard: (req, res) => {
        const {id} = req.params
        const index = cardArr.findIndex(el => el.id === +id)
        let card = cardArr[index]
        // console.log(card)
        res.status(200).send(card)
        }
    }
