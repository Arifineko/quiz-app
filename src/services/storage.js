export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key, defaultValue = null) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
};

export const removeFromStorage = (key) => {
    localStorage.removeItem(key);
};