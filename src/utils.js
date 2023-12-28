export function setToLocalStorage(key, value) {
  const stringifyValue = JSON.stringify(value);
  localStorage.setItem(key, stringifyValue);
}

export function readFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}