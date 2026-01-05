export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US");
  const format = formatter.format(Math.abs(amount));
  return amount < 0 ? `-$${format}` : `+$${format}`;
}
