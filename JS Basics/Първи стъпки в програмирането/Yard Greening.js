function yardGreening(input) {
    let meters = Number(input[0])

    let price = meters * 7.61
    let priceWithDiscount = price - price * 0.18
    let discount = price * 0.18

    console.log(`The final price is: ${priceWithDiscount} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])