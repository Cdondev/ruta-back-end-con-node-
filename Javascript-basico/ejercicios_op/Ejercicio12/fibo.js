

function numerosFib(num){
    let fib = [1,1]
    for (let i = 2; i <= num; i++){
        fib[i] = fib[i-1] + fib[i-2] 
    }return fib;
}

const fibonacci = numeros(6)
console.log(fibonacci)



