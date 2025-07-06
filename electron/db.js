const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.join(__dirname, 'calendar.db');
const db = new Database(dbPath);

// Create Categories Table
db.prepare(`
    CREATE TABLE IF NOT EXISTS Categories (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Description TEXT NOT NULL,
        Color TEXT NOT NULL
    )
`).run();

// Create Events Table
db.prepare(`
    CREATE TABLE IF NOT EXISTS Events (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Description TEXT NOT NULL,
        Notes TEXT,
        CategoryId INTEGER NOT NULL,
        Date TEXT NOT NULL,
        Duration INTEGER NOT NULL,
        Reoccuring INTEGER NOT NULL,
        Reminder INTEGER NOT NULL,
        IsPast INTEGER NOT NULL,
    
        FOREIGN KEY (CategoryId) REFERENCES Category(Id)
    )
`).run();

module.exports = {
    getAllEvents: () => db.prepare('SELECT * FROM Events').all(),

    getFutreEvents: () => db.prepare('SELECT * FROM Events WHERE IsPast = 0').all(),

    addEvent: (event) => db.prepare(`
        INSERT INTO Events 
        (Description, Notes, CategoryId, Date, Duration, Reoccuring, Reminder, IsPast)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(event.Description, event.Notes, event.CategoryId, event.Date, event.Duration, event.Reoccuring, event.Reminder, event.isPast),

    getAllCategories: () => db.prepare('SELECT * FROM Category').all(),

    addCategory: (category) => db.prepare(`
        INSERT INTO Category (Description, Color) VALUES (?, ?)
    `).run(category.Description, category.Color)
};