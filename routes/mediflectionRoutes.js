const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Mediflection = mongoose.model('mediflections');

module.exports = app => {
  app.get('/api/mediflections', requireLogin, async (req, res) => {
    console.log('get', req.user.id);
    const mediflections = await Mediflection.find({ _user: req.user.id });

    res.send(mediflections);
  });

  app.post('/api/mediflections', async (req, res) => {
    const { date, entry } = req.body;

    Mediflection.findOneAndUpdate(
      { date },
      { date, entry, _user: req.user.id },
      { upsert: true },
      function(err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send('succesfully saved');
      }
    );

    // try {
    //   await mediflection.save();
    //   res.send(mediflection);
    // } catch (err) {
    //   res.status(422).send(err);
    // }
  });
};
