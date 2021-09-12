export const LOCALSTORAGE_EVENT_KEY = "EVENTS";

export const loadFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
