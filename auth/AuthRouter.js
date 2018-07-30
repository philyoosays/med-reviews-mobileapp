const express = require('express')

const authService = require('./AuthService');
const tokenService = require('./TokenService');
const resHandler = require('../server/resHandler');

const app = express.Router();

app.route('/register')
  .post(
    authService.doesUserExist,
    authService.generatePassword,
    authService.registerUser,
    authService.isValidUser,
    authService.authenticate,
    resHandler.handleUserLogin,
  )

app.route('/token')
  .post(
    tokenService.verify,
    authService.doesUserExist,
    resHandler.sendJSON
  )

app.route('/username')
  .post(
    authService.doesUserExist,
    resHandler.sendJSON
  )

app.route('/login')
  .post(
    authService.isValidUser,
    authService.authenticate,
    resHandler.handleUserLogin,
  )

module.exports = app;
