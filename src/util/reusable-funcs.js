export const uniqueID = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
export const getIndexById = (arr, id) => arr.findIndex(o => o.id === id);