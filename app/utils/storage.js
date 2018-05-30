export function setObject(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getObject(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    return {};
  }
}
