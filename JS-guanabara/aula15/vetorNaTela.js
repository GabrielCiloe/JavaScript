let num = [2, 5, 6, 4, 3, 0, 9];
num.sort()
console.log(num);

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}