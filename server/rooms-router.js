const express = require('express');
const path = require('path');
const axios = require('axios');
const Html = require('./Html.js');
const env = require('./environment.js');
const router = express.Router();

router
  .route('/:roomid')
  .get((req, res, next) => {
    axios
      .get(`http://${env.descHost}:${env.descPort}/api/rooms/${req.params.roomid}/description/ssr`)
      .then(html => {
        res.send(Html.render(html.data));
      })
      .catch(err => {
        console.log('Error retrieving the room data SSR rendered', err);
      });
  })
  .options((req, res) => {
    res.sendStatus(200);
  });

router
  .route('/:roomid/reviews')
  .get((req, res, next) =>
    res.redirect(`http://${env.reviewsHost}:${env.reviewsPort}/rooms/${req.params.roomid}/reviews`)
  );

router
  .route('/:roomid/ratings')
  .get((req, res, next) =>
    res.redirect(`http://${env.reviewsHost}:${env.reviewsPort}/rooms/${req.params.roomid}/ratings`)
  );

router
  .route('/:roomid/carousel')
  .get((req, res, next) =>
    res.redirect(`http://${env.photoHost}:${env.photoPort}/rooms/${req.params.roomid}/carousel`)
  );

router
  .route('/:roomid/bookings')
  .get((req, res, next) =>
    res.redirect(`http://${env.bookingsHost}:${env.bookingsPort}/rooms/${req.params.roomid}/bookings`)
  );

router
  .route('/:roomid/neighborhood')
  .get((req, res, next) =>
    res.redirect(`http:/${env.neighborhoodHost}:${env.neighborhoodPort}/rooms/${req.params.roomid}/neighborhood`)
  );

router
  .route('/:roomid/similarlistings')
  .get((req, res, next) =>
    res.redirect(`http:/${env.listingsHost}:${env.listingsPort}/rooms/${req.params.roomid}/similarlistings`)
  );

router.route('/images/:imageId').get((req, res, next) =>
  res.redirect(`http:/${env.listingsHost}:${env.listingsPort}/rooms/images/${imageId}`)
);

router.route('/:roomid/description').get((req, res, next) => {
  axios.get(`http://${descHost}:${descPort}/api/rooms/${req.params.roomid}/description/ssr`)
    .then(html => {
      res.send(Html.render(html.data));
    })
    .catch(err => {
      console.log('Error retrieving SSR room data', err);
    });
});

module.exports = router;
