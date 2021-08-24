const User = require("../Models/User");

class IndexController {
  async index(req, res) {}

  async login(req, res) {
    let { email, password } = req.body;

    if (
      email == undefined ||
      email == "" ||
      password == undefined ||
      password == ""
    ) {
      return res.status(400).json({ msg: "Dados inválidos" });
    }

    let user = await User.findOne(email);

    if (user == undefined) {
      return res.status(404).json({ msg: "Usuário incorreto ou não existe" });
    }

    if (user.password != password) {
      return res.status(401).json({ msg: "A senha está incorreta" });
    }

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  }
}

module.exports = new IndexController();
