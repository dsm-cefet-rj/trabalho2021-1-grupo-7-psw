const Buy = require("../models/buy");
const Users = require("../models/user");
const Events = require('../models/events')
const router = require("express").Router();
const { id: verifyId } = require('../utils/verifyDataUser')
const {verifyUser, userClient, userCompany} = require('../middlewares/authenticate');
const typeUser = require("../utils/enumTypeUser");
const jwt = require("jsonwebtoken")
const config = require('../config')

function paramUndefined(...args) {
    let isAnyoneUndefined = false
    args.forEach((element) => 
    {
        if (element == undefined || element === "") {  
            isAnyoneUndefined = true
        }
    })

    if(isAnyoneUndefined)
        return true    
    return false;
}

//Compra um ingresso
router.post("/", verifyUser, userClient,async (req, res) => {
    
    let { eventId } = req.body;
    const token = req.headers.authorization.split(" ")[1]
    const userDecoded = jwt.decode(token,{json: true, complete: true} )
    const userId = userDecoded?.payload?._id

    if (eventId ===undefined) {
        res.status(400).json({ msg: "Dados inválidos" });
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
        company: event.company,
        user: userId,
        event: eventId
    })

    await newBuy.save()
    --num_tickets;
    await Events.findByIdAndUpdate(eventId, { num_tickets })
    res.json({ status: "Compra efetuada com sucesso!" });
});

//Retorna todas as vendas de uma empresa
router.get("/empresas/:id",verifyUser, userCompany, async (req, res) => {
    const token = req.headers.authorization.split(" ")[1]
    let decoded = jwt.verify(token, config.secret);
    const companyId = decoded._id
    let { id } = req.params;

    if (!verifyId(id)) {
        return res.status(400).json({ msg: "Dados inválidos" })
    }

    if(companyId != id){
        return res.status(403).json({ msg: "Ação não permitida" })
    }

    const sales = await Buy.find({ company: companyId }).populate(['event', 'user']).sort([['created_at', 'descending']]);

    if (sales.length === 0) {
        res.status(200).json({ msg: "Nao há vendas relacionadas a esse evento" });
        return;
    }

    let allSales = []
    sales.forEach(s =>{
        allSales.push({
            _id: s._id,
            num_tickets: 1,
            buy_date: s.created_at,
            user:{
                name: s.user.name,
                email: s.user.email,
                document: s.user.document
            },
            event: s.event
        })
    })
    res.json({sales: allSales});
});

//Retorna todas as compras de um usuário
router.get('/usuarios/:userId', verifyUser, userClient,async (req, res) => {
    const { userId } = req.params

    if (!verifyId(userId))
        return res.status(400).json({ msg: "Dados inválidos" })
    
    const token = req.headers.authorization.split(" ")[1]
    const userDecoded = jwt.verify(token, config.secret);

    if(userDecoded._id != userId){
        return res.status(403).json({ msg: "Ação não permitida" })
    }

    const userExists = await Users.findOne({ _id: userId })
    if (userExists === null)
        return res.status(400).json({ msg: "Usuário nao cadastrado no sistema" })

    const buys = await Buy.find({ user: userId }).populate(["event", "company"]).sort([['created_at', 'descending']])
    if (buys.length === 0)
        return res.status(200).json({ msg: "Nao há compras relacionadas a esse usuario" });

    let allBuys = []
    buys.forEach(b =>{
        allBuys.push({
            _id: b._id,
            num_tickets: 1,
            buy_date: b.created_at,
            company:{
                name: b.company.name,
                email: b.company.email,
                document: b.company.document
            },
            event: b.event
        })
    })
    res.status(200).json({ buys: allBuys })
})

module.exports = router;