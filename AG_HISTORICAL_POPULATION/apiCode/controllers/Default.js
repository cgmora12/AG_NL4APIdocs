'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.getAGE = function getAGE (req, res, next) {
  Default.getAGE(req.swagger.params, res, next);
};

module.exports.getAge = function getAge (req, res, next) {
  Default.getAge(req.swagger.params, res, next);
};

module.exports.getCountry = function getCountry (req, res, next) {
  Default.getCountry(req.swagger.params, res, next);
};

module.exports.getFlagCodes = function getFlagCodes (req, res, next) {
  Default.getFlagCodes(req.swagger.params, res, next);
};

module.exports.getFlags = function getFlags (req, res, next) {
  Default.getFlags(req.swagger.params, res, next);
};

module.exports.getHISTORICAL_POPULATION = function getHISTORICAL_POPULATION (req, res, next) {
  Default.getHISTORICAL_POPULATION(req.swagger.params, res, next);
};

module.exports.getLOCATION = function getLOCATION (req, res, next) {
  Default.getLOCATION(req.swagger.params, res, next);
};

module.exports.getSEX = function getSEX (req, res, next) {
  Default.getSEX(req.swagger.params, res, next);
};

module.exports.getSex = function getSex (req, res, next) {
  Default.getSex(req.swagger.params, res, next);
};

module.exports.getTIME = function getTIME (req, res, next) {
  Default.getTIME(req.swagger.params, res, next);
};

module.exports.getTime = function getTime (req, res, next) {
  Default.getTime(req.swagger.params, res, next);
};

module.exports.getValue = function getValue (req, res, next) {
  Default.getValue(req.swagger.params, res, next);
};

module.exports.getvisualisation = function getvisualisation (req, res, next) {
  Default.getvisualisation(req.swagger.params, res, next);
};
