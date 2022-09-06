// Button click function
document.getElementById('add-details-btn').addEventListener('click', () => {
    const productInput = document.getElementById('product-input')
    const priceInput = document.getElementById('price-input')
    const product = productInput.value
    const price = priceInput.value

    // Get Product and Set new
    const cart = existProduct()
    cart[product] = price
    const item = JSON.stringify(cart)
    localStorage.setItem('cart', item)

    // input field clear
    productInput.value = ''
    priceInput.value = ''

    displayData(product, price)
})

// Get existing object from localStorage
const existProduct = () => {
    const getCart = localStorage.getItem('cart')
    let cart = {}
    if (getCart) {
        cart = JSON.parse(getCart)
    }
    return cart
}

// Display Data in UI
const displayData = (product, price) => {
    const personDetails = document.getElementById('product-details')
    const li = document.createElement('li')
    li.innerHTML = `${product} : ${price}`
    personDetails.appendChild(li)
}

// Get Data key and value and send to displayData
const setPropertyInUI = () => {
    const cart = existProduct()
    for (const product in cart) {
        const price = cart[product]
        displayData(product, price)
    }
}
setPropertyInUI()