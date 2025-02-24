// src/dataService.js
export const fetchData = async () => {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
};

export const saveData = (data) => {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    a.href = URL.createObjectURL(file);
    a.download = 'data.json';
    a.click();
};
