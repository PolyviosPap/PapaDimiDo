// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    getAllEvents: () => ipcRenderer.invoke('events:getAll'),
    getFutreEvents: () => ipcRenderer.invoke('events:getFuture'),
    addEvent: (eventData) => ipcRenderer.invoke('events:add', eventData),
    getAllCategories: () => ipcRenderer.invoke('categories:getAll'),
    addCategory: (categoryData) => ipcRenderer.invoke('categories:add', categoryData)
});