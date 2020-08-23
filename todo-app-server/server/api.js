// const fs = require("fs");
// const path = require("path");

const ObjectId = require('mongodb').ObjectId;

/**
 * 
 * @param {import('mongodb').Db} db 
 */

module.exports = function (app, db) {
    app.get("/get-todos", async (req, res) => {
        const data = await loadData(req.session.user._id);
        res.setHeader("Content-Type", "application/json");
        res.send(data);
    });

    app.post('/add', async (req, res) => {
        const data = await loadData(req.session.user._id);
        data.push(req.body);
        await saveData(req.session.user._id, data);
        res.send('ok');
    });

    app.post('/remove', async (req, res) => {
        let data = await loadData(req.session.user._id);
        const a = req.body;
        console.log(a);
        for (let i = 0; i < a.length; i++) {
            data.splice(a[i], 1, '');
        }
        data = data.filter((x) => x !== '');
        await saveData(req.session.user._id, data);
        res.send('ok');
    });

    app.post('/toggle', async (req, res) => {
        const data = await loadData(req.session.user._id);
        const i = req.body.number;
        data[i].completed = !data[i].completed;
        await saveData(req.session.user._id, data);
        res.send('ok');
    });

    app.post('/clear', async (req, res) => {
        let data = await loadData(req.session.user._id);
        data = data.filter((x) => !x.completed);
        await saveData(req.session.user._id, data);
        res.send('ok');
    });

    async function loadData(id) {
        const data = db.collection('data');
        return await data.findOne({users: ObjectId(id)});
    }
    
    async function saveData(id, userData) {
        const data = db.collection('data');
        await data.updateOne({userID: ObjectId(id)}, {$set: userData});
    }
};

