const mongoose = require('mongoose')
const { Schema } = mongoose

const StripeAccount = new Schema({
  name: String,
  email: String,
  created_at: Number,
  stripe_status: String,
  stripe_customer_id: String,
  stripe_email: String,
  stripe_subscription_id: String,
  stripe_token: String
})

module.exports = mongoose.model('stripe_account', StripeAccount)