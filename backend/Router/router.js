const Router = require("express").Router();
const IndexController = require("../Controllers/IndexController");
const UserController = require("../Controllers/UserController");
const EventController = require("../Controllers/EventController");
const CompanyController = require("../Controllers/CompanyController");

//Index
Router.post("/login", IndexController.login); //Login do usuário

//Enterprises
Router.post("/empresa", CompanyController.create);

//Users
Router.get("/usuarios", UserController.index); //Todos os usuários
Router.get("/usuario", UserController.find); //Procura usuário pelo e-mail
Router.post("/usuario", UserController.create); //Cadastra o usuário

//Events
Router.get("/eventos", EventController.index); // Todos os eventos
Router.post("/evento", EventController.create); //Cadastra um evento
Router.get("/evento/:slug", EventController.find); //Procura um evento pelo slug
Router.patch("/evento/:slug", EventController.update); //Atualiza os dados do evento
Router.delete("/evento/:slug", EventController.delete); //Exclui um evento

module.exports = Router;
