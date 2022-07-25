function codeInit() {
    clean() // Llama a la función de limpiar pantalla
    const input = document.querySelector('.input')
    const contenedor = document.querySelector('.container')
    var win = false

    // Crea nros aleatorios
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
        var contenedorComp = ""

        // Empieza la comparación
        input.addEventListener('keypress', (e)=> {
            let currentKey = e.key
            contenedorComp += currentKey
            if (currentKey == string[i]) {
                i++
                contador++
            } else {
                i++
            }

            // Cuando termina la oración
            
            if (i ==tEnd) {
                let generator = `<p id='alert' class='text stop'></p> <p id='score' class='text score'></p> <p id='time' class='text time'></p>`
                contenedor.innerHTML = generator
                win = true

                // Mostrar resultados
                function end() {
                    document.getElementById('textarea').remove()
                    let finalText = ""
                    document.getElementById('alert').textContent = '¡La prueba ha acabado!'
                    document.getElementById('score').textContent = `Precisión: [${((contador*100)/tEnd).toFixed(2)}%] Letras: [${contador}/${tEnd}]`
                    document.getElementById('time').textContent = `Has tardado: ${seg}s en completar la prueba.`
                }
                end()
            }
        })
    }
    /* Array con palabras, array vacio y cadena vacia */
    var eList = []
    var elements = ['el','elefante','camina','por','la','sabana','en','busca','de','alimento','la','pantera','caza','a','su','presa','con','sus','garras','comer','pescado','carne',
                                'miel','hierbas','medicina','comida','huevos','casa','hogar','propiedad','consultorio','edificio','en','un','cocina','hombre','mujer','niño','castigo',
                                'llanto','azúcar','café','agua','bebida','pez','pollo','bistec','ballena','belleza','construir','parada','abono','asfalto','cemento','tierra','madera','ella','ellos',
                                'vosotros','nosotros','tu','caminar','correr','andar','respirar','nadar','océano','playa','palmera','divisa','economía','historia','física','química','ácido',
                                'proteínas','cafeína','descubrimiento','hallazgo','pieda','troncos','mosquitos','mosca','asterisco','marioneta','persona','chico','chica','asiático','europeo',
                                'francés','español','indio','americano','brazilero','dominicano','venezolano','colombiano','neozelandés','dólar','euro','petróleo','gas','cuerda','pradera']
    var string = ""

    /* Selecciona elementos para crear la oración, cambiar el 5 aumenta las palabras */
    for (var i = 0; i < rNum(30, 80); i++) {
        var random = rNum(0, elements.length-1)
        eList.push(elements[random])
    }

    /* Cambia la ',' por un espacio y calcula la longitud*/
    string = eList.join(' ')
    var tEnd =  string.length
    var eListEnd = eList.length

    generateP() // Genera los <p></p> con cada palabra
    keyboard(string) // Compara la tecla presionada con la letra de la palabra

    /* Contador */
    var seg = 0
    var min = 1
    var seg2 = 0
    input.addEventListener('click', (e)=> {
        const timer = document.querySelector('.timer')
        const interval = setInterval(()=> { // Inicia Contador
            if (min == 1) {
                timer.innerHTML = `${min}:${seg2}0`
                min = 0
                seg2 = 60
            }
            timer.innerHTML = `${min}:${seg2}`
            seg++
            seg2--
            if (seg2 < 10) {
                timer.innerHTML = `${min}:0${seg2}`
            }
            if (seg == 60) {
                min++
                seg = 0
            }
            return seg, min
        }, 1000)
        setTimeout(()=> { // Se detiene contador a los 60s
            clearInterval(interval)
            if (win == false) {
                let fail = `<p id="fail" class="text"></p>`
                    contenedor.innerHTML = fail
                    document.getElementById('fail').textContent =  '¡Has fallado la prueba!'
                    document.getElementById('container').style.display = 'none'
            }
        }, 61000)
    })
    return win
}

codeInit() // Inicia código

// Limpia la pantalla
function clean() {
    const container = document.querySelector('.container')
    container.innerHTML = ''
    const containerText = document.getElementById('container')
    containerText.style.display = 'block'
    let text = `<textarea id="textarea" class="input" autofocus></textarea>`
    containerText.innerHTML = text
}
