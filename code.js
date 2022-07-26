function codeInit() {
    clean() // [Esp] Llama a la función de limpiar pantalla / [Eng] Calls clean screen function 
    const input = document.querySelector('.input')
    const contenedor = document.querySelector('.container')
    var win = false

    // [Esp] Crea nros aleatorios / [Eng] Create random numbers
    function rNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // [Esp] Crea elementos p y guarda las palabras en cada uno / [Eng] Generate <p> and keep every word
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

    // [Esp] Compara la tecla presionada con el texto / [Eng] Compares key & word
    function keyboard(elements_string) {
        var contador = 0
        var i = 0
        let temp = ""

        // [Esp] Empieza la comparación / [Eng] Begins the comparation
        input.addEventListener('keypress', (e) => {
            let currentKey = e.key
            temp += currentKey

            if (currentKey == elements_string[i]) {
                i++
                contador++
            } else {
                i++
            }

            // [Esp] Cuando termina la oración / [Eng] When finish
            if (i == tEnd) {
                let generator = `<p id='alert' class='text stop'></p> <p id='score' class='text score'></p> <p id='time' class='text time'></p>`
                contenedor.innerHTML = generator
                win = true

                // [Esp] Mostrar resultados / [Eng] Show results
                function end() {
                    document.getElementById('textarea').remove()
                    let finalText = ""
                    document.getElementById('alert').textContent = '¡La prueba ha acabado!'
                    document.getElementById('score').textContent = `Precisión: [${((contador * 100) / tEnd).toFixed(2)}%] Letras: [${contador}/${tEnd}]`
                    document.getElementById('time').textContent = `Has tardado: ${seg}s en completar la prueba.`
                }
                end()
            }
        })
    }
    // [Esp] Array con palabras, array vacio y cadena vacia / [Eng] Words and others variables
    var eList = []
    var elements = ['el', 'elefante', 'camina', 'por', 'la', 'sabana', 'en', 'busca', 'de', 'alimento', 'la', 'pantera', 'caza', 'a', 'su', 'presa', 'con', 'sus', 'garras', 'comer', 'pescado', 'carne',
        'miel', 'hierbas', 'medicina', 'comida', 'huevos', 'casa', 'hogar', 'propiedad', 'consultorio', 'edificio', 'en', 'un', 'cocina', 'hombre', 'mujer', 'niño', 'castigo',
        'llanto', 'azucar', 'cafe', 'agua', 'bebida', 'pez', 'pollo', 'bistec', 'ballena', 'belleza', 'construir', 'parada', 'abono', 'asfalto', 'cemento', 'tierra', 'madera', 'ella', 'ellos',
        'vosotros', 'nosotros', 'tu', 'caminar', 'correr', 'andar', 'respirar', 'nadar', 'oceano', 'playa', 'palmera', 'divisa', 'economia', 'historia', 'fisica', 'quimica', 'acido',
        'proteinas', 'cafeina', 'descubrimiento', 'hallazgo', 'pieda', 'troncos', 'mosquitos', 'mosca', 'asterisco', 'marioneta', 'persona', 'chico', 'chica', 'asiatico', 'europeo',
        'frances', 'español', 'indio', 'americano', 'brazilero', 'dominicano', 'venezolano', 'colombiano', 'neozelandes', 'dolar', 'euro', 'petroleo', 'gas', 'cuerda', 'pradera']
    var elements_string = ""

    // [Esp] Selecciona elementos para crear la oración / [Eng] Generate the sentence
    for (var i = 0; i < rNum(1, 5); i++) {
        var random = rNum(0, elements.length - 1)
        eList.push(elements[random])
    }

    // [Esp] Cambia la ',' por un espacio y calcula la longitud / [Eng] Convert the array into a string
    elements_string = eList.join(' ')
    var tEnd = elements_string.length
    var eListEnd = eList.length

    generateP() // [Esp] Genera los <p></p> con cada palabra / [Eng] Calls the <p></p> function generator
    keyboard(elements_string) // [Esp] Compara la tecla presionada con la letra de la palabra // [Eng] Comparation function

    // [Esp] Contador / [Eng] Counter
    var seg = 0
    var min = 1
    var seg2 = 0
    input.addEventListener('click', (e) => {
        const timer = document.querySelector('.timer')
        const interval = setInterval(() => { // [Esp] Inicia Contador / [Eng] Timer start
            seg++
            seg2--
            if (min == 1) {
                min--
                seg2 = 60
            }
            if (seg2 < 10) {
                timer.innerHTML = `${min}:0${seg2}`
            } else {
                timer.innerHTML = `${min}:${seg2}`
            }
            if (seg == 60) {
                min++
                seg = 0
            }
            return seg, min
        }, 1000)
        setTimeout(() => { // [Esp] Se detiene contador a los 60s / [Eng] Stops after 1 min
            clearInterval(interval)
        }, 61000)
    })
    return win
}

codeInit() // [Esp] Inicia código / [Eng] Code begins

// [Esp] Limpia la pantalla / [Eng] Clean screen
function clean() {
    const container = document.querySelector('.container')
    const containerText = document.getElementById('container')
    container.innerHTML = ''
    containerText.style.display = 'block'
    let text = `<textarea id="textarea" class="input" autofocus></textarea>`
    containerText.innerHTML = text
}

function toggler() {
    const change = document.body
    const h2 = document.querySelector('.page-title')
    const container = document.querySelector('.container')
    const container2 = document.getElementById('container')
    
    change.classList.toggle("dark-mode")
    h2.classList.toggle("page-title-dark-mode")
    container.classList.toggle("container-dark-mode")
    container2.classList.toggle("container-dark-mode")
}
