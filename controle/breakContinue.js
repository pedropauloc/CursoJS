// break e continue só atua em cima de blocos do tipo while, for e switch
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for(x in nums) {
    if (x == 5) continue // ele pula o laço atual
    console.log(`${x} = ${nums[x]}`)
}

// rotulo
externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // especifica que o break vai atuar no laço rotulado
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')