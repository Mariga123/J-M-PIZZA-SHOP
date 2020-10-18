//business logic
function Order(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

Order.prototype.fullOrder = function () {
    return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
};

function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}

Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};


var sizePrice = [1500, 850, 500]
var deliverPrices = [0, 100];
//user interface logic
$(document).ready(function () {
    $('form#myForm').submit(function (event) {
        event.preventDefault();
        var pizzaType = $('#type').val();

        var pizzaSize = parseInt($('#size').val());

        var pizzaCrust = $('#crust').val();

        var pizzaTop = $('#top').val();

        var pizzaQty = parseInt($('#qty').val());

        var pizzaPick = parseInt($('#pick').val());


        var price = sizePrice[pizzaSize - 1];


        var DeliveryCost = deliverPrices[pizzaPick - 1];



        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newTotal = new Total(price, pizzaQty, DeliveryCost);
        if (pizzaPick===1){
        alert("Your oder is: " + newOrder.fullOrder() + ".click OK to see your bill");
        alert("total payable is: " + newTotal.finalTotal());
        }else{
            if(pizzaPick===2){
                prompt("Enter your Address");
                alert("Your oder is: " + newOrder.fullOrder() + "Your pizza will be delivered to your provided Address" +".click OK to see your bill");
                alert("total payable is: " + newTotal.finalTotal()) + "Thanks for trusting us";
            }
        }

    });
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  })