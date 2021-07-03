const mongoose = require('mongoose');
const TripSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Please a name'],
  },
  organization: {
    type: String,
    required: [true, 'Please add an organization'],
  },
  type: {
    type: String,
    required: [true, 'Please add a type of trip'],
  },
});

module.exports = mongoose.models.Trip || mongoose.model('Trip', TripSchema);
