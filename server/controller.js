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
        },
        editCard: (req, res) => {
            // const {id} = req.params
            const index = cardArr.findIndex(el => el.id === +id)
           cardArr.splice(index, 1, req.body)
            // cardArr[index].num = num
            // position: 'Mascot',
            // cardArr[index].name = name
            // GP: 0,
            // cardArr[index].name = name
            // AB: 0,
            // cardArr[index].name = name
            // R: 0,
            // cardArr[index].name = name
            // H: 0,
            // cardArr[index].name = name
            // HR: 0,
            // cardArr[index].name = name
            // RBI: 0,
            // cardArr[index].name = name
            // AVG: '.000',
            // cardArr[index].name = name
            // image: 
            // cardArr[index].name = name
            res.status(200).send(cardArr)
        }
    }

    // rename: (req, res) => {
    //     const {id} = req.params
    //     const {name} = req.body
    //     const index = pokemonCaught.findIndex(el=> el.id=== +id)
    //     pokemonCaught[index].name = name
    //     res.status(200).send(pokemonCaught)
    // },
