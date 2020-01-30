const DB = require("../../db");

exports.find = async function(query) {
  return await new Promise((resolve, reject) => {
    DB.getConnection(function(err, connection) {
      connection.query(query, function(err, result) {
        connection.release();
        return err ? reject(err) : resolve(result);
      });
    });
  });
};

exports.findAll = async function(query, id) {
  return await new Promise((resolve, reject) => {
    DB.getConnection(function(err, connection) {
      connection.query(query, id, function(err, result) {
        connection.release();
        return err ? reject(err) : resolve(result);
      });
    });
  });
};

exports.findMany = async function(query) {
  return await new Promise((resolve, reject) => {
    DB.getConnection(function(err, connection) {
      connection.query(query, function(err, result) {
        connection.release();
        return err ? reject(err) : resolve(result);
      });
    });
  });
};

exports.findOne = async function(query, find) {
  return await new Promise((resolve, reject) => {
    DB.getConnection(function(err, connection) {
      connection.query(query, find, function(err, result) {
        connection.release();
        return err ? reject(err) : resolve(result);
      });
    });
  });
};

exports.save = async function(query, data) {
  return await new Promise((resolve, reject) => {
    DB.getConnection(function(err, connection) {
      connection.query(query, data, function(err, result) {
        connection.release();
        return err ? reject(err) : resolve(result);
      });
    });
  });
};

exports.saveMany = async function(query, data) {
  //data is array of string ['val1', 'val2', 'val3']
  // use Object.values(Obj) to convert object to array
  return await new Promise((resolve, reject) => {
    DB.getConnection(function(err, connection) {
      connection.query(query, [data], function(err, result) {
        connection.release();
        return err ? reject(err) : resolve(result);
      });
    });
  });
};

exports.update = async function(query, body, id) {
  return await new Promise((resolve, reject) => {
    DB.getConnection(function(err, connection) {
      if (err) reject(err);
      connection.query(query, [body, id], function(err, result) {
        connection.release();
        return err ? reject(err) : resolve(result);
      });
    });
  });
};

exports.destroy = async function(query, find) {
  return await new Promise((resolve, reject) => {
    DB.getConnection(function(err, connection) {
      connection.query(query, find, function(err, result) {
        connection.release();
        return err ? reject(err) : resolve(result);
      });
    });
  });
};
