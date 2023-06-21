// Add Counter
let add = document.querySelector('#add')
add.addEventListener('click', function () {
    let counter1 = document.querySelector('#counter1')
    let hasil = Number(counter1.innerText) + 1

    counter1.innerText = hasil
})

// Substract Counter
let sub = document.querySelector('#sub')

sub.addEventListener('click', function () {
    let counter1 = document.querySelector('#counter1')
    let hasil = Number(counter1.innerText) - 1

    //if counter < 0 so this is will help to not show - (minus)
    if (hasil < 0) {
        hasil = 0
    }
    counter1.innerText = hasil
})

//Reset Button
let res = document.querySelector('#res')
res.addEventListener('click', function () {
    let counter1 = (document.querySelector('#counter1').innerHTML = 0)
})
