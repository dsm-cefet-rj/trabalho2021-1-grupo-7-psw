const Buy = require("../models/buy");
const Users = require("../models/user");
const Events = require('../models/events')
const router = require("express").Router();
const { id: verifyId } = require('../utils/verifyDataUser')


function paramUndefined(...args) {
    args.forEach((element) => {
        if (element == undefined || element === "") return true;
    });
    return false;
}


router.post("/compra", async (req, res) => {
    let { userId, eventId } = req.body;
    const result = paramUndefined(userId, eventId);
    const date = Date.now();

    if (result) {
        res.status(400).json({ msg: "Bad request" });
        return;
    }

    const user = await Users.findOne({ _id: userId })
    if (user === null) {
        res.status(404).json({ msg: "Usuario não logado" });
        return;
    }
    const event = await Events.findById({ _id: eventId })
    if (event === null) {
        res.status(404).json({ msg: "Evento nao encontrado" });
        return;
    }

    let num_tickets = parseInt(event.num_tickets)
    if (num_tickets === 0) {
        return res.status(400).json({ msg: "As vendas estão esgotadas" })
    }


    const newBuy = new Buy({
        userId,
        eventId
    })

    await newBuy.save()
    --num_tickets;
    await Events.findByIdAndUpdate(eventId, { num_tickets })




    res.json({ msg: "compra efetuada" });
});

//Todas os usuarios que compraram um evento
router.get("/vendas/evento/:id", async (req, res) => {
    let { id } = req.params;
    if (!verifyId(id)) {
        return res.status(400).json({ msg: "Id invalido" })
    }
    const event = await Events.findOne({ _id: id })
    console.log(event)
    if (event === null) {
        res.status(404).json({ msg: "Evento nao encontrado" });
        return;
    }
    const sales = await Buy.find({ eventId: id }).populate('userId');

    if (sales.length === 0) {
        res.status(200).json({ msg: "Nao há vendas relacionadas a esse evento" });
        return;
    }
    res.json(sales);
});

router.get('/usuarios/compras/:userId/', async (req, res) => {
    const { userId } = req.params
    const userExists = await Users.findOne({ _id: userId })
    if (userExists === null)
        return res.status(400).json({ msg: "Usuario nao cadastrado no sistema" })

    if (!verifyId(userId))
        return res.status(400).json({ msg: "Id invalido" })
    const vendas = await Buy.find({ userId: userId })
    if (vendas.length === 0)
        return res.status(200).json({ msg: "Nao há compras relacionadas a esse usuario" });

    res.status(200).json({ vendas })
})


module.exports = router;
