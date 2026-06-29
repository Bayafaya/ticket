export const toCapitalize = (text: string) => {
  if (!text) return null;
  return String(text)[0].toUpperCase() + String(text).slice(1).toLowerCase();
};
