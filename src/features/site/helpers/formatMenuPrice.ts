/** Café-menu style price: 5 -> "5.0", 6.5 -> "6.5". */
export function formatMenuPrice(price: number): string {
  return price.toFixed(1);
}
