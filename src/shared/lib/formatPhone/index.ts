export const formatPhone = (country: string, phone: string) => {

  const operator = phone.slice(0, 3);
  const p1 = phone.slice(3, 6);
  const p2 = phone.slice(6, 9);

  return `+${country} (${operator}) ${p1}-${p2}`;
};
