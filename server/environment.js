let photoHost = process.env.CAROUSEL_SERVICE_HOST || 'localhost';
let photoPort = process.env.CAROUSEL_SERVICE_PORT || '3001';

let descHost = process.env.DESCRIPTION_SERVICE_HOST || 'localhost';
let descPort = process.env.DESCRIPTION_SERVICE_PORT || '3002';

let bookingsHost = process.env.BOOKINGS_SERVICE_HOST || 'localhost';
let bookingsPort = process.env.BOOKINGS_SERVICE_PORT || '3003';

let reviewsHost = process.env.REVIEWS_SERVICE_HOST || 'localhost';
let reviewsPort = process.env.REVIEWS_SERVICE_PORT || '3004';

let listingsHost = process.env.LISTINGS_SERVICE_HOST || 'localhost';
let listingsPort = process.env.LISTINGS_SERVICE_PORT || '3007';

let neighborhoodHost = process.env.NEIGHBORHOOD_SERVICE_HOST || 'localhost';
let neighborhoodPort = process.env.NEIGHBORHOOD_SERVICE_PORT || '3006';

module.exports = {
  photoHost: photoHost,
  photoPort: photoPort,
  descHost: descHost,
  descPort: descPort,
  bookingsHost: bookingsHost,
  bookingsPort: bookingsPort,
  reviewsHost: reviewsHost,
  reviewsPort: reviewsPort,
  listingsHost: listingsHost,
  listingsPort: listingsPort,
  neighborhoodHost: neighborhoodHost,
  neighborhoodPort: neighborhoodPort
};