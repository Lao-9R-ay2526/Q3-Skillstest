// calculation


function getTotal(){

let ticketPrice = 250;

let tickets = document.getElementById("order-tickets").value;

let total = tickets * ticketPrice;

document.getElementById("totalcash").innerHTML = total + "$";

}


