const express = require('express');
const app = express();
const data = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.get('/info', (req, res) => {
    res.send(
        `<div>
            <p>Phonebook has info for ${data.length} people</p>
            <span>${new Date()}</span>
        </div>`
    )
})

app.get('/api/persons', (req, res) => {
    res.json(data);
})

app.get('/api/persons/:id', (req, res) => {
    const note = data.find(item => item.id === req.params.id);
    if (note) {
        res.json(note);
    } else {
        res.status(404).end();
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});