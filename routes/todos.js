var express = require('express');
var router = express.Router();
// var mongoose = require("mongoose");
var db = require("../models");
var helpers = require("../helpers/todos.js");

router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo);

router.route("/:todoId")
    .get(helpers.findTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;