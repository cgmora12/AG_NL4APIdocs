'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.getArea_Type = function getArea_Type (req, res, next) {
  Default.getArea_Type(req.swagger.params, res, next);
};

module.exports.getEmployment = function getEmployment (req, res, next) {
  Default.getEmployment(req.swagger.params, res, next);
};

module.exports.getMean_Wage = function getMean_Wage (req, res, next) {
  Default.getMean_Wage(req.swagger.params, res, next);
};

module.exports.get_Area = function get_Area (req, res, next) {
  Default.get_Area(req.swagger.params, res, next);
};

module.exports.get_Area_Name = function get_Area_Name (req, res, next) {
  Default.get_Area_Name(req.swagger.params, res, next);
};

module.exports.get_Employment = function get_Employment (req, res, next) {
  Default.get_Employment(req.swagger.params, res, next);
};

module.exports.get_Entry_Wage = function get_Entry_Wage (req, res, next) {
  Default.get_Entry_Wage(req.swagger.params, res, next);
};

module.exports.get_Experienced_Wage_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________ = function get_Experienced_Wage_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________ (req, res, next) {
  Default.get_Experienced_Wage_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________(req.swagger.params, res, next);
};

module.exports.get_Median_Wage = function get_Median_Wage (req, res, next) {
  Default.get_Median_Wage(req.swagger.params, res, next);
};

module.exports.get_Occupational_Title = function get_Occupational_Title (req, res, next) {
  Default.get_Occupational_Title(req.swagger.params, res, next);
};

module.exports.get_Standard_Occupational_Code = function get_Standard_Occupational_Code (req, res, next) {
  Default.get_Standard_Occupational_Code(req.swagger.params, res, next);
};

module.exports.getvisualisation = function getvisualisation (req, res, next) {
  Default.getvisualisation(req.swagger.params, res, next);
};
