function yearLeap(year) {
    if (year <= 0){
        return false
    } else if (year % 400 == 0) {
        return true
    } else if (year % 100 == 0) {
        return false
    } else if (year % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(yearLeap(0))
console.log(yearLeap(4))
console.log(yearLeap(100))
console.log(yearLeap(400))
console.log(yearLeap(800))
console.log(yearLeap(2020))
console.log(yearLeap(2021))
