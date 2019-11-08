function getNumber(num) {
    if(!Number.isInteger(num) || num < 0 ||num > 999) {
        console.log('Число должно быть в диапазоне [0...999]');
        return{};
    }
    
    return{
        units: num %10,
        hundereds: Math.floor(321/100),
        tens: Math.floor(321/10)%10,
        
    }
}
console.log(getNumber(456));