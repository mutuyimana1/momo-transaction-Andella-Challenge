const { message } = require("antd");

var row = null;

function Submit() {
  var dataretrieve = retrieveData();
  //   console.log(dataretrieve);
  var readData = readingDataFromLocalStorage(dataretrieve);
  //   console.log(readData);
  if (row == null) {
    insert(readData);
    msg.innerHTML = "data inserted";
  } else {
    update();
    msg.innerHTML = "data updated";
  }
}
//create
//retrieving data frm form

function retrieveData() {
  var date = document.getElementById("date").value;
  var transaction = document.getElementById("transaction").value;
  var ammount = document.getElementById("amount").value;

  var arr = [date, transaction, ammount];
  return arr;
}

//data in local storage

function readingDataFromLocalStorage(dataretrieve) {
  //storing data in local storage
  // let newTransaction = {
  //   date: dataretrieve[0],
  //   transaction: dataretrieve[1],
  //   amount: dataretrieve[2],
  // };

  var d = localStorage.setItem("Date", dataretrieve[0]);
  var t = localStorage.setItem("Transaction", dataretrieve[1]);
  var a = localStorage.setItem("Amount", dataretrieve[2]);
  // let transaction = JSON.parse(localStorage.getItem("transaction"));
  // if (!transaction) {
  //   transaction = [];
  //   transaction.push(newTransaction);
  //   localStorage.setItem("transaction", JSON.stringify(transaction));
  // } else {
  //   transaction.push(newTransaction);
  //   localStorage.setItem("transaction", JSON.stringify(transaction));
  // }

  // getting values from local to table

  var d1 = localStorage.getItem("Date", d);
  var t1 = localStorage.getItem("Transaction", t);
  var a1 = localStorage.getItem("Amount", a);

  var arr = [d1, t1, a1];
  return arr;
}

function getTransaction() {
  let transaction = JSON.parse(localStorage.getItem("transaction"));
}
//nsert

function insert(readData) {
  var row = table.insertRow();
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button>
                                <button onclick=remove(this)>delete</button>`;
}
//edit

function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("date").value = row.cells[0].innerHTML;
  document.getElementById("transaction").value = row.cells[1].innerHTML;
  document.getElementById("amount").value = row.cells[2].innerHTML;
}

//update
function update() {
  row.cells[0].innerHTML = document.getElementById("date").value;
  row.cells[1].innerHTML = document.getElementById("transaction").value;
  row.cells[2].innerHTML = document.getElementById("amount").value;
  row = null;
}

//delete
function remove(td) {
  confirm("are you sure you want to delete this transaction?");
  row = td.parentElement.parentElement;
  //document.getElementById("table").remove(); this wll remove whole table
  document.getElementById("table").deleteRow(row.rowIndex);
  //   deleteRow();
}
