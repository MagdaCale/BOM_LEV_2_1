const message = document.getElementsByClassName('message')[0]
const count = document.getElementById('count')
// console.log(message)

let counter
let myInterval

onload = () => {
    counter = 9
    myInterval = setInterval(hide, 1000)
}

const hide = () => {
    if(counter === 0){
        clearInterval(myInterval)
        message.style.opacity = "0"
        count.innerHTML = counter    

    }else if (counter <= 9 || counter !== 0) {
        console.log(counter)
        count.innerHTML = '0' + counter    
        counter -= 1
    }

}
