const input = document.querySelector('.input')
const contenedor = document.querySelector('.container')

function rNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/* Crea elementos p y guarda las palabras en cada uno */
function generateP() {
    let documentFrag = document.createDocumentFragment()
    for (var i = 0; i < eListEnd; i++) {
        let textP = document.createElement('P')
        textP.setAttribute('id', `text${i}`)
        textP.setAttribute('class', 'text')
        textP.innerHTML = eList[i]
        documentFrag.appendChild(textP)
        contenedor.appendChild(textP)
    }
}

/* Compara la tecla presionada con el texto */
function keyboard(string) {
    var contador = 0
    var i = 0

    input.addEventListener('keypress', (e)=> {
        let currentKey = e.key

        if (currentKey == string[i]) {
            i++
            contador++
        } else {
            i++
        }
        if (i ==tEnd) {
            setTimeout(()=>{
                clearInterval(interval)
            })
            let documentFragment = document.createDocumentFragment()
            let alert = document.createElement('P')
            let score = document.createElement('P')
            let time = document.createElement('P')
            alert.setAttribute('id', 'alert')
            alert.classList.add('text', 'stop')
            score.setAttribute('id', 'score')
            score.classList.add('text', 'score')
            time.setAttribute('id', 'time')
            time.classList.add('text', 'time')

            documentFragment.appendChild(alert)
            documentFragment.appendChild(score)
            documentFragment.appendChild(time)
            contenedor.appendChild(alert)
            contenedor.appendChild(score)
            contenedor.appendChild(time)
            function end() {
                let string = ""
                document.getElementById('alert').textContent = string = '¡La prueba ha acabado!'
                document.getElementById('score').textContent = string = `Tu puntuación es de: [${contador}/${tEnd}]`
                document.getElementById('time').textContent = string = `Has tardado: ${seg}s en completar la prueba.`
            }
            end()
        }
    })
}

/* Array con palabras, array vacio y cadena vacia */
var eList = []
var elements = ['el','elefante','camina','por','la','sabana','en','busca','de','alimento','la','pantera','caza','a','su','presa','con','sus','garras','comer','pescado','carne',
                            'miel','hierbas','medicina','comida','huevos','casa','hogar','propiedad','consultorio','edificio']
var string = ""

/* Selecciona elementos para crear la oración */
for (var i = 0; i < rNum(1, 5); i++) {
    var random = rNum(0, elements.length-1)
    eList.push(elements[random])
}
/* Cambia la ',' por un espacio y calcula la longitud*/
string = eList.join(' ')
var tEnd =  string.length
var eListEnd = eList.length

generateP()
keyboard(string)

/* Contador */
var seg = 0
var min = 0

const interval = setInterval(()=> {
    seg ++
    if (seg == 60) {
        min++
        seg = 0
    }
    if (min == 1) {
        alert('Has tardado demasiado tiempo')
        contenedor.innerHTML = 'Has fallado la prueba'
    }
    return seg, min
}, 1000)

setTimeout(()=> {
    clearInterval(interval)
}, 60000)
