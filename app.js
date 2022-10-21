if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('cart-item-remove')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    var productQuantity = shopItem.getElementsByClassName('qty')[0].value
    addItemToCart(title, price, imageSrc, productQuantity)
}

function addItemToCart(title, price, imageSrc, productQuantity) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
    <div class="shorts product all medium extraLarge Grey outStock 50">
        <img class="cart-item-image" src="${imageSrc}" alt="Hoodie 4">
        <div class="p-details">
            <span class="cart-item-title">${title}</span>
            <span class="cart-item-color">Grey</span>
            <span class="cart-item-price">${price}</span>
            <input type="text" name="qty" class="cart-qty" id="qty4" value="${productQuantity}"><span class="qty-text">item(s)</span></input>
            <button class="btn cart-item-remove" type="button">Remove</button>
        </div>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('cart-item-remove')[0].addEventListener('click', removeCartItem)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-qty')[0]
        var price = parseInt(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value     
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('blue')[0].innerText = '$' + total
}

const search = () => {
    const searchbox = document.getElementById("srch").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname = document.getElementsByClassName("shop-item-title")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByClassName("shop-item-title")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }
    }
}

$(document).ready(function () {
    $("#category").change(function () {
        var name = $("#category").val();
        $(".product").hide();
        $("." + name).show();
    });
    $("#size").change(function () {
        var sizee = $("#size").val();
        $(".product").hide();
        $("." + sizee).show();
    });
    $("#color").change(function () {
        var colors = $("#color").val();
        $(".product").hide();
        $("." + colors).show();
    });
    $("#stock").change(function () {
        var stockk = $("#stock").val();
        $(".product").hide();
        $("." + stockk).show();
    });
    $("#price").change(function () {
        var prize = $("#price").val();
        $(".product").hide();
        $("." + prize).show();
    });
    $("#category").change(function () {
        $("#size")[0].selectedIndex = 0;
        $("#color")[0].selectedIndex = 0;
        $("#stock")[0].selectedIndex = 0;
        $("#price")[0].selectedIndex = 0;
    });
    $("#size").change(function () {
        $("#category")[0].selectedIndex = 0;
        $("#color")[0].selectedIndex = 0;
        $("#stock")[0].selectedIndex = 0;
        $("#price")[0].selectedIndex = 0;
    });
    $("#color").change(function () {
        $("#size")[0].selectedIndex = 0;
        $("#category")[0].selectedIndex = 0;
        $("#stock")[0].selectedIndex = 0;
        $("#price")[0].selectedIndex = 0;
    });
    $("#stock").change(function () {
        $("#size")[0].selectedIndex = 0;
        $("#color")[0].selectedIndex = 0;
        $("#category")[0].selectedIndex = 0;
        $("#price")[0].selectedIndex = 0;
    });
    $("#price").change(function () {
        $("#size")[0].selectedIndex = 0;
        $("#color")[0].selectedIndex = 0;
        $("#stock")[0].selectedIndex = 0;
        $("#category")[0].selectedIndex = 0;
    });
});

function getOption() {
    selectElement = document.querySelector('#color');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}

function incrementValue(data) {
    var element = data;
    var sibling = element.previousElementSibling;
    let value = parseInt(document.getElementById(sibling.id).value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(sibling.id).value = value;
}

function decrementValue(data) {
    var element = data;
    var sibling = element.nextElementSibling;
    let value = parseInt(document.getElementById(sibling.id).value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById(sibling.id).value = value;
}

function goToSummary() {
    document.getElementById("summarybox").style.display = "block";
    document.getElementById("mainSite").style.opacity = "0.1";
    document.getElementById("close").style.display = "block";
}
function hide() {
    document.getElementById("summarybox").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("mainSite").style.opacity = "1";
    document.getElementById("summaryLeft").innerHTML = "";
}
function thankyou() {
    document.getElementById("summarybox").style.display = "none";
    document.getElementById("mainSite").style.display = "none";
    document.getElementById("thankpara").style.display = "block";
}