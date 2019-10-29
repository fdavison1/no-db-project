const cardArr = require('./cards.json')
let id = 10

module.exports = {
    getCards: (req, res) => {
        res.status(200).send(cardArr)
    },
    newCard: (req, res) => {
        const newCard = { ...req.body, id }
        cardArr.push(newCard)
        id++
        res.status(200).send(cardArr)
    },
    deleteCard: (req, res) => {
        //Destucturing
        const { id } = req.query
        const index = cardArr.findIndex(el => el.id === +id)
        cardArr.splice(index, 1)
        res.status(200).send(cardArr)
    },
    editCard: (req, res) => {
        //Destructuring
        const { id } = req.params
        const index = cardArr.findIndex(el => el.id === +id)
        cardArr.splice(index, 1, req.body)
        res.status(200).send(cardArr)
    }
}


