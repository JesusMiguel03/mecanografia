const input = document.querySelector('.input')
const contenedor = document.querySelector('.container')

var content = ""
var tEnd = 0
var arrayText = []
var seg = 0
var min = 0

/* Create text & assign */
let documentFrag = document.createDocumentFragment()
let textContent1 = document.createElement('P')
textContent1.setAttribute('id', 'text')
documentFrag.appendChild(textContent1)
contenedor.appendChild(textContent1)

function rNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function keyboard(content) {
    var contador = 0
    var i = 0

    input.addEventListener('keypress', (e)=> {
        let currentKey = e.key
        console.log(currentKey + i)
        console.log(currentKey == content[i])

        let comp = (currentKey==content[i]) ? i++ 
                                                        && contador++ 
                                                        && console.log('Contador +1') : i++ 
                                                                && console.log('Contador -1')
    
        if (i == tEnd) {
            contador++
            setTimeout(()=> {
                clearInterval(interval)
                console.log(`[${min}m:${seg}s]`)
                console.log(`[${contador}/${tEnd}]`)
            })
            alert(`¡La prueba ha acabado! Tu puntuación es: [${contador}/${tEnd}]`)
            contenedor.removeChild(textContent1)
            let documentFrag = document.createDocumentFragment()
            let textContent2 = document.createElement('P')
            textContent2.setAttribute('id', 'text')
            documentFrag.appendChild(textContent2)
            contenedor.appendChild(textContent2)
            arrayText = []
            arrayText += `Has tardado: ${seg} segundos en completar la prueba.`
            console.log(arrayText)
            document.getElementById('text').textContent += arrayText
        }
    })
}

switch (rNum(1, 10)) {
    case 1:
        arrayText += 'El elefante camina por la sabana en busca de alimento.'
        let oldArray = arrayText
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 2:
        arrayText += 'Las gallinas se despiertan a las 4:00am.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 3:
        arrayText += 'El elefante camina por la sabana en busca de alimento.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 4:
        arrayText += 'El perro cruzó el río.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 5:
        arrayText += 'La ballena nada por el océano.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 6:
        arrayText += 'Las aves cantan por la noche.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 7:
        arrayText += 'Dos y dos es cuatro.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 8:
        arrayText += 'Pedro tocó la puerta.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 9:
        arrayText += 'El sol está brillante.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break;
    case 10:
        arrayText += 'Es de noche.'
        tEnd = arrayText.length
        console.log(tEnd, arrayText)
        document.getElementById('text').textContent += arrayText
        keyboard(arrayText)
    ;break; 
}

const interval = setInterval(()=> {
    seg ++
    if (seg == 60) {
        min++
        seg = 0
    }
    if (min == 1) {
        alert('Has tardado demasiado tiempo')
        contenedor.innerHTML = 'Has fallado la prueba'
        console.log(`[${min}m:${seg}s]`)
    }
}, 1000)

setTimeout(()=> {
    clearInterval(interval)
    console.log(`[${min}m:${seg}s]`)
}, 60000)
