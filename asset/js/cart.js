const product = [
    {
        id: 0,
        image: 'asset/images/1.jpg',
        title: 'Iphone 15',
        price: 999,
    },
    {
        id: 1,
        image: 'asset/images/2.jpg',
        title: 'Airpod',
        price: 240,
    },
    {
        id: 2,
        image: 'asset/images/3.jpg',
        title: 'Iwatch pro',
        price: 500,
    },
    {
        id: 3,
        image: 'asset/images/4.jpg',
        title: 'Homepod',
        price: 1100,
    }
];
let cart = [];
document.getElementById('root').innerHTML = product.map((product, index) => {
    const { image, title, price } = product;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='image' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2> $ ${price}.00</h2>
                <button onclick='addToCart(${index})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

function addToCart(index) {
    cart.push({ ...product[index] });
    // console.log(cart)
    displayCart();
}
function DeleteItem(index) {
    cart.splice(index, 1);
    displayCart();
}
function displayCart() {
    let total = 0;
    const cartItemDiv = document.getElementById('cartItem');
    const totalDiv = document.getElementById('total');
    document.getElementById('count').innerHTML = cart.length;
    if (cart.length === 0) {
        cartItemDiv.innerHTML = 'Your cart is empty';
        totalDiv.innerHTML = '$ 0.00';
    } else {
        cartItemDiv.innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}'>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='DeleteItem(${index})'></i>
                </div>`
            );
        }).join('');
        totalDiv.innerHTML = `$ ${total}.00`;
    }
}