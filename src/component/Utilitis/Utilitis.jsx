const addToDb = id =>{
    let productId = getShoppingCard()

    const setItems = productId[id]
    if(setItems){
        const newSetItems = setItems + 1;
        productId[id] = newSetItems;
    }else{
        productId[id] = 1;
    }

    localStorage.setItem('card', JSON.stringify(productId))
}

const removeCardId = id =>{
    const singleCard = getShoppingCard()
    if(id in singleCard){
        delete singleCard[id]
        localStorage.setItem("card", JSON.stringify(singleCard))
    }
}

const getShoppingCard = () =>{
    let shopingCard = {}

    const getShoppingcards = localStorage.getItem('card')
    if(getShoppingcards) {
        shopingCard = JSON.parse(getShoppingcards)
    }

    return shopingCard;
}

const removeAllItems = () =>{
    localStorage.clear('card')
}



export {
    addToDb,
    getShoppingCard,
    removeCardId,
    removeAllItems
}