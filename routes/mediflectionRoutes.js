const mongoose = require('mongoose');

const Mediflection = mongoose.model('mediflections');

module.exports = app => {
  app.post('/api/mediflections', async (req, res) => {
    const { date, time, entry } = req.body;

    Mediflection.findOneAndUpdate(
      { date },
      { time, entry },
      { upsert: true },
      function(err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send('succesfully saved');
      }
    );
  });
};
