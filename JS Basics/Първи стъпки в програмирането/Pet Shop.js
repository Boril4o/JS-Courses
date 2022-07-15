function petShop(input) {
    let numberOfDogsFood = Number(input[0])
    let numberOfCatsFood = Number(input[1])

    let totalPrice = (numberOfCatsFood * 4) + (numberOfDogsFood * 2.50)

    console.log(`${totalPrice} lv.`)
}

petShop(["5", "4"])