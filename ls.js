let transactions = {
  transactionname: "cyber security",
  date: "20022/12/17",
  amount: 3000,
  balance: 700000,
  sender: "al",
  reciever: "jus",
};
let transArray = JSON.parse(localStorage.getItem("transaction"));
if (!transArray) {
  transArray = [];
  transArray.push(transactions);
} else {
  transArray.push(transactions);
}

localStorage.setItem("transaction", JSON.stringify(transArray));
let table = document.getElementById("tableData").getElementsByTagName("tbody");
table.innerHTML = "";

// data = "";

for (let i = 0; i < transArray.length; i++) {
  const data = `<tr class="table-row">
<td>${transArray[i].transactionname}</td>
<td>${transArray[i].date}</td>
<td>${transArray[i].amount}</td>
<td>${transArray[i].sender}</td>
<td>${transArray[i].reciever}</td>

</tr>`;
  table.innerHTML = table.innerHTML + data;
}

console.log(transArray.length);
