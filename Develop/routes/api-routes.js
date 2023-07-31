const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8'));
    res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8'));
    const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;
