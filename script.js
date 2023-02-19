const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".price");
  let totalPrice = 0;
  prices.forEach((e) => {
    const value = parseInt(e.textContent);
    if (!Number.isNaN(value)) {
      totalPrice += value;
    }
  });
  const totalPriceRow = document.createElement("tr");
  totalPriceRow.id = "ans";
  const totalPriceData = document.createElement("td");
  const totalPriceAns = document.createElement("td");
  totalPriceRow.appendChild(totalPriceData);
  totalPriceRow.appendChild(totalPriceAns);
  totalPriceData.textContent = "Total Price:"
  totalPriceAns.textContent = `${totalPrice}`
  const table = document.querySelector("table");
  table.appendChild(totalPriceRow);
};

getSumBtn.addEventListener("click", getSum);

