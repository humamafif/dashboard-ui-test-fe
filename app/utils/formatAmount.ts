export function formatAmount(amount: number, showSign: boolean): string {
  const formatter = new Intl.NumberFormat("en-US");
  const formattedValue = formatter.format(Math.abs(amount));
  const sign = amount > 0 ? "+" : amount < 0 ? "-" : "";
  return `${showSign ? sign : ""}$${formattedValue}`;
}
