
export async function cartDataLoader() {
  return localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];
};