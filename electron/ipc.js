const { ipcMain } = require('electron');
const db = require('./db');

ipcMain.handle('events:getAll', async () => {
    return db.getAllEvents();
});

ipcMain.handle('events:getFuture', async() => {
    return db.getFutreEvents();
})

ipcMain.handle('events:add', async (event, eventData) => {
    const { Description, Notes, CategoryId, Date, Duration, Reoccuring, Reminder, IsPast } = eventData;
    db.addEvent(Description, Notes, CategoryId, Date, Duration, Reoccuring, Reminder, IsPast);
    return { success: true };
});

ipcMain.handle('categories:getAll', async () => {
    return db.getAllCategories();
});

ipcMain.handle('categories:add', async (category, categoryData) => {
    const { Description, Color } = categoryData;
    db.addCategory(Description, Color);
    return { success: true };
});