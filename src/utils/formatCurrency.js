function formatCurrency(money) {
  let moneyStr = typeof money === "number" ? money.toString() : money;
  let cleanValue = moneyStr.replace(/[^0-9]/g, "");
  let formattedValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return formattedValue;
}

export { formatCurrency };
