let buttons = document.querySelectorAll('.btns button')
let input = document.getElementById('input');
let result = document.querySelector('.result')

let data;

if (localStorage.getItem('data') !== null) {
    data = JSON.parse(localStorage.getItem('data'))
} else {
    data = []
}


buttons.forEach(button => {

    button.addEventListener('click', e => {
        if (e.target.className === "check") {
            checkItme(input.value)
            input.value = ""
        }
    })

    button.addEventListener('click', e => {
        if (e.target.className === "add") {
            addItme(input.value)
            input.value = ""
        }
    })

    button.addEventListener('click', e => {
        if (e.target.className === "delete") {
            deleteItme(input.value)
            input.value = ""
        }
    })

    button.addEventListener('click', e => {
        if (e.target.className === "show") {
            showItme()
            input.value = ""
        }
    })
})


function addItme(input) {

    data.push(input);

    localStorage.setItem('data', JSON.stringify(data))


}


function checkItme(input) {

    if (data.includes(input) && data.includes(input) != "") {
        let r = data.filter(el => {
            return el === input
        })

        result.innerHTML = `<span >${r}</span>`
    } else {
        result.innerHTML = `<span>can't fount</span>`
    }



}


function deleteItme(input) {


    if (data.includes(input) && data.includes(input) != "") {
        data = data.filter(el => {
            return el !== input
        })

        localStorage.setItem('data', JSON.stringify(data))


        result.innerHTML = `<span>${input} is Deleted </span>`
    } else {
        result.innerHTML = `<span>can't fount</span>`
    }

}




console.log(ar, ar2);

function showItme() {
    result.innerHTML = ""

    if (localStorage.length) {

        data.forEach(el => {
            result.innerHTML += `${el} - `
        })
    }


}