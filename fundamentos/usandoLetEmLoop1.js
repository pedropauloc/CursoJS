// da erro pois o let tem escopo de bloco, então se limita no bloco do for
for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)