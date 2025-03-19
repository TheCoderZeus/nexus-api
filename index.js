const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/embed', (req, res) => {
    const { title, description, color } = req.body;

    if (!title || !description || !color) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const embed = {
        embeds: [{
            title,
            description,
            color,
        }]
    };

    res.json(embed);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
