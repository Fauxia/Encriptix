let input = document.querySelector(".in")
let btns = document.querySelectorAll("button")

let arr = Array.from(btns)
console.log(arr);

let string = "0"
input.value = string

arr.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.textContent == "AC") {
            string = "0"
            input.value = string
        } else if(e.target.textContent == "DE"){
            if(string.length ==1){
                string = "0"
                input.value = string
            }else{
                string = string.substring(0,string.length -1)
                input.value = string
            }
        }else if(e.target.textContent == "="){
            string = eval(string)
            input.value = string
        }
        else{
            if(input.value == "0"){
                string = e.target.textContent
                input.value = string
             }else{
                string += e.target.textContent
                input.value = string
                
            }

        }
    })
})
