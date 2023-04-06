import { getShoppingCard } from "../component/Utilitis/Utilitis"

const saveReview = async () => {
    const loddingData = await fetch('products.json')
    const data = await loddingData.json()
    // console.log(data)
    const savedCard = getShoppingCard()
    const newArr = []
    for(const id in savedCard){
        const getEd = data.find(saveId => saveId.id === id)
        if(getEd){
            const qun = savedCard[id]
            getEd.quantity = qun
            newArr.push(getEd)
        }
    }
    return newArr;
}

export default saveReview
