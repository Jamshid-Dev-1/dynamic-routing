const User = require('./model')('user');
const Car = require('./model')('car');

module.exports = {
    POST: {
        cars: {
            new: async (req,res) => {res.json('Creating new Car')}
        },
        users: {
            new: async (req,res) => {res.json('Creating new User')}
        },
    },
    PATCH: {
        cars: {
            edit: async (req,res) => {res.json('Editing Car')}
        },
        users: {
            edit: async (req,res) => {res.json('Editing User')}
        }
    },
    GET: {
        cars: {
            all: async (req,res) => {res.json('Fetching Cars')},
            one: async (req,res) => {res.json('Fetching Car')},
        },
        users: {
            all: async (req,res) => {res.json('Fetching Users')},
            one: async (req,res) => {res.json('Fetching User')},
        }
    },
    DELETE: {
        cars: {
            all: async (req,res) => {res.json('Deleting Cars')},
            one: async (req,res) => {res.json('Deleting Car')}
        },
        users: {
            all: async (req,res) => {res.json('Deleting Users')},
            one: async (req,res) => {res.json('Deleting User')}
        },
    }
}
