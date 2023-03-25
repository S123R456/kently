const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'personal_finance_tracker';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err) {
console.log('Connected successfully to server');

// Use database
const db = client.db(dbName);

// Insert expense record
const expense = { amount: 25.0, category: 'food', date: '2023-03-24', description: 'Lunch at a restaurant' };
db.collection('expenses').insertOne(expense, function(err, res) {
if (err) throw err;
console.log('Expense record created');
});

// Insert budget details
const budget = { category: 'food', amount: 100.0 };
db.collection('budgets').insertOne(budget, function(err, res) {
if (err) throw err;
console.log('Budget record created');
});

// Insert account information
const account = { name: 'Savings', balance: 5000.0 };
db.collection('accounts').insertOne(account, function(err, res) {
if (err) throw err;
console.log('Account record created');
});

// Perform aggregation
db.collection('expenses').aggregate([{$match: {category: 'food'}}, {$group: {_id: '$category', total: {$sum: '$amount'}}}], function(err, result) {
if (err) throw err;
result.toArray(function(err, docs) {
console.log('Total food expenses:', docs[0].total);
client.close();
});
});
});