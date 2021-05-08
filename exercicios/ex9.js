function nota(studentNota) {
    let notaRound = round(studentNota)
    if(notaRound >= 40) {
        console.log(`Aprovado com nota ${notaRound}`)
    } else {
        console.log(`Reprovado com nota ${notaRound}`)
    }
}

function round(studentNota) {
    if(studentNota % 5 > 2)  {
        return studentNota + (5 - (studentNota % 5))
    } else {
        return studentNota
    }
}

nota(100)
nota(30)
nota(38)
nota(88)
nota(84)