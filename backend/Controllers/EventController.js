const Event = require('../Models/Event');
const Slugify = require('slugify');

class EventController {
  async index(req, res) {
    let events = await Event.getAll();

    res.status(200).json({ events });
  }

  async create(req, res) {
    let { name, type, enterprise, num_tickets, date, price, description } =
      req.body;

    if (
      name == undefined ||
      name == '' ||
      type == undefined ||
      type == '' ||
      enterprise == undefined ||
      enterprise == '' ||
      num_tickets == undefined ||
      num_tickets == '' ||
      price == undefined ||
      price == '' ||
      date == undefined ||
      date == '' ||
      description == undefined ||
      description == ''
    ) {
      return res.status(400).json({ msg: 'Dados inválidos' });
    }

    let slug = Slugify(name).toLowerCase();
    let findEvent = await Event.findOne(slug);

    if (findEvent != undefined) {
      return res.status(401).json({ msg: 'Evento já cadastrado' });
    }

    await Event.create(
      name,
      slug,
      type,
      enterprise,
      num_tickets,
      date,
      price,
      description
    );
    const event = await Event.findOne(slug);
    return res.status(200).json({ event });
  }

  async find(req, res) {
    let slug = req.params.slug;

    let event = await Event.findOne(slug);

    if (event == undefined) {
      return res.status(404).json({ msg: 'Evento não encontrado' });
    }

    return res.status(200).json({ event });
  }

  async update(req, res) {
    let { slug, name, type, num_tickets, date, price, description } = req.body;

    let findEvent = await Event.findOne(slug);

    if (findEvent == undefined) {
      return res.status(404).json({ msg: 'Evento não encontrado' });
    }

    await Event.update(name, slug, type, num_tickets, date, price, description);
    const updatedEvent = await Event.findOne(Slugify(name).toLowerCase());
    console.log(updatedEvent);
    return res.status(200).json({ updatedEvent });
  }

  async delete(req, res) {
    let slug = req.params.slug;

    if (slug == undefined || slug == '') {
      return res.status(400).json({ msg: 'Dados inválidos' });
    }

    let event = await Event.findOne(slug);

    if (event == undefined) {
      return res.status(404).json({ msg: 'Evento não encontrado' });
    }

    await Event.delete(slug);
    return res.status(200).json({ status: 'Evento deletado com sucesso!' });
  }
}

module.exports = new EventController();
