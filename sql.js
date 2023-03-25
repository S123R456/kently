const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('personal_finance_tracker.db');

// Insert expense record
const expense = [25.0, 'food', '2023-03-24', 'Lunch at a restaurant'];
db.run('INSERT INTO expenses (amount, category, date, description) VALUES (?, ?, ?, ?)', expense, function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log('Expense record created');
});

// Insert budget details
const budget = ['food', 100.0];
db.run('INSERT INTO budgets (category, amount) VALUES (?, ?)', budget, function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log('Budget record created');
});

// Insert account information
const account = ['Savings', 5000.0];
db.run('INSERT INTO accounts (name, balance) VALUES (?, ?)', account, function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log('Account record created');
});

// Perform query
db.get('SELECT SUM(amount) AS total FROM expenses WHERE category = ?', ['food'], function(err, row) {
  if (err) {
    return console.log(err.message);
  }
  console.log('Total food expenses:', row.total);
});

// Close the database connection
db.close();
