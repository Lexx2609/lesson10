const mass = ['one','two','three','four','five','six','seven','eight','nine','ten']
const mass2 = [
    ['one','two'],
    ['three','four'],
    ['five','six'],
    ['seven','eight'],
    ['nine','ten']
]
let a = document.querySelector('.two')
let b = document.querySelector('#one')
a.onclick = function () {
    let c = mass[4]
    b.innerHTML = `<h1>${c}</h1>`
}
const num = [1,2,3,4,5,6,7,8,9]
let e = document.querySelector('.add')
e.onclick = function () {
    let even = num.filter(function (element) {
        return element % 2 === 0
    })
    b.innerHTML = `<h1>${even}</h1>`
}
let d = document.querySelector('.del')
d.onclick = function () {
    let odd = num.filter(function (element) {
        return element % 2 !== 0
    })
    b.innerHTML = `<h1>${odd}</h1>`
}
let m = document.querySelector('.four')
m.onclick = function () {
    for (let i = 0; mass2.length > i; i++) {
        let c = mass2[i];
        for (let k = 0; k < c.length; k++) {
            console.log(c[k]);
            b.innerHTML = `<h1>${c[k]}</h1>`
        }
    }
}


