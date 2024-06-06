const express = require('express');
const router = express.Router();

function createObavestenjaRoutes(models) {
    router.get('/getActiveNews', async (req, res) => {
        try {
            const today = new Date();
            const activeNews = await models.obavestenja.find({
                datumPocetka: { '<=': today },
                datumZavrsetka: { '>=': today }
            });
            return res.status(200).json({ activeNews });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    });

    return router;
}

module.exports = createObavestenjaRoutes;
