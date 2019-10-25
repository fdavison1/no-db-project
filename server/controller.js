const cardArr = require('./cards.json')
let id = 10

module.exports = {
    getCards: (req, res) => {
        res.status(200).send(cardArr)
        // console.log(cardArr)
    },
    // getCard: (req, res) => {
    //     const {id} = req.params
    //     const index = cardArr.findIndex(el => el.id === +id)
    //     let card = cardArr[index]
    //     // console.log(card)
    //     res.status(200).send(card)
    //     },
        newCard: (req, res) => {
            const newCard = {...req.body, id}
            cardArr.push(newCard)
            id++
            res.status(200).send(cardArr)
        },
        deleteCard: (req, res) => {
            const {id} = req.params
            const index = cardArr.findIndex(el => el.id === +id)
            cardArr.splice(index, 1)
            res.status(200).send(cardArr)
        }
    }
