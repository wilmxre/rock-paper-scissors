function computerPlay() {
    let arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random() * 3)];
}

console.log(computerPlay());