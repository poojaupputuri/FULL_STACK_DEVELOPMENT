const generateReceipt = (price, tipPercent) => {
  const tipAmount = (price * tipPercent) / 100;
  const total = price + tipAmount;
  return `Price: $${price} | Tip: $${tipAmount} | Total: $${total}`;
};
const handleReceipt = () => {
  const price = Number(document.getElementById("price").value);
  const tipPercent = Number(document.getElementById("tip").value);
  document.getElementById("receipt").textContent =
    generateReceipt(price, tipPercent);
};