function bhaskara(ax2, bx, c) {
    const delta = Math.pow(bx, 2) - 4 * ax2 * c
    if(delta < 0) {
        console.log('Delta is negative')   
    }
    let xi = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let xii = (-bx - Math.sqrt(delta)) / (2 * ax2)
    return `Delta: ${delta}  XI: ${xi} XII: ${xii}`
    
}

console.log(bhaskara(2, -16, -18))

