function simpleFess(initialCapital, fess, applicationTime) {
    if(applicationTime > 12) {
        applicationTime = applicationTime / 12
    }
    const applicationResult = initialCapital * (fess / 100) * applicationTime
    const amount = initialCapital + applicationResult
    return `Yield: ${applicationResult.toFixed(2)} Amount: ${amount.toFixed(2)}`
}

console.log(simpleFess(1200, 2, 15))


function compoundFess(initialCapital, fess, applicationTime) {
    if(applicationTime > 12) {
        applicationTime = applicationTime / 12
    }
    let amount = initialCapital * (Math.pow(1 + (fess / 100), applicationTime))
    let applicationResult = amount - initialCapital
    return `Yield: ${applicationResult.toFixed(2)} Amount: ${amount.toFixed(2)}`
}

console.log(compoundFess(1400, 7, 24))
console.log(compoundFess(3000, 2, 14))