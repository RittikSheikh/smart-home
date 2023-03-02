const addToDb = id => {
    let shoppingCart = {};
    const isExist = localStorage.getItem('shopping-cart')
    if (isExist) {
        shoppingCart = JSON.parse(isExist)
    }
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    let shoppingCart = {}
    const isExist = localStorage.getItem('shopping-cart')
    if (isExist) {
        shoppingCart = JSON.parse(isExist)
    }
    return shoppingCart;
}

const removeFromDb = (id) => {
    let shoppingCart = {}
    const isExist = localStorage.getItem('shopping-cart')
    if (isExist) {
        shoppingCart = JSON.parse(isExist)
    }
    if (id in shoppingCart) {
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}
export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }
