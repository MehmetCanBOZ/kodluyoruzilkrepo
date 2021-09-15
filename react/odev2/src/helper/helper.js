const STORAGE_LOCK = "todos";

export const  readArray = () => {
  const data = localStorage.getItem(STORAGE_LOCK);
  if (data === undefined) return null;
  return JSON.parse(data);
}

export const  writeArray = (arr) => {
  localStorage.setItem(STORAGE_LOCK, JSON.stringify(arr));
}