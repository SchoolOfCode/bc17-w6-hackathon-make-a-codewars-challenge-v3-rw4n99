//Work out 20% discount on items £20 or more Y
//Round to the neares 2 decimal places

export function discount(fullPrice) {
    if (fullPrice > 19){
    const totalOff = fullPrice * 0.2; 
    return fullPrice - totalOff;         
    } else {
        return fullPrice
    }
}