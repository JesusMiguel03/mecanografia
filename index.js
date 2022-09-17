function allStorage() {
    let archive = [],
        keys = Object.keys(localStorage),
        i = 0,
        key

    for (; (key = keys[i]); i++) {
        archive.push(JSON.parse(localStorage.getItem(key)))
    }

    archive.sort((a, b) => b.ptsObtained - a.ptsObtained)

    return archive[0]
}

const [score, userStored, ptsStored, missStored, timeStored] = [
    allStorage(),
    document.getElementById("userStored"),
    document.getElementById("ptsStored"),
    document.getElementById("missStored"),
    document.getElementById("timeStored"),
]

score !== "undefined" ? (
    userStored.innerHTML = score.username,
    ptsStored.innerHTML = `Puntos: &nbsp;${score.ptsObtained} &nbsp;/&nbsp; ${score.ptsTotal}`,
    missStored.innerHTML = `Errores: ${score.mistakes}`,
    timeStored.innerHTML = `Tiempo: ${score.time}`,
) : ""

const [
    registeredAsUser,
    registeredAsGuest,
    valueMin,
    valueMax,
    helpMin,
    helpMax,
] = [
    document.getElementById("register-user"),
    document.getElementById("register-guest"),
    document.getElementById("valueMin"),
    document.getElementById("valueMax"),
    document.getElementById("helpMin"),
    document.getElementById("helpMax"),
]
let [valueMinValidation, valueMaxValidation, minStored, maxStored, user] = [
    false,
    false,
    0,
    0,
    "",
]

const iniciar = (valueMin, valueMax) => {
    const [
        ptsResult,
        mistakes,
        time,
        statistics,
        text,
        textBox,
        timerContainer,
        changeTxt,
        words,
    ] = [
        document.getElementById("pts"),
        document.getElementById("miss"),
        document.getElementById("time"),
        document.getElementById("statistics"),
        document.getElementById("text"),
        document.getElementById("string"),
        document.getElementById("timer"),
        document.getElementById("change-txt"),
        [
            "el",
            "elefante",
            "camina",
            "por",
            "la",
            "sabana",
            "en",
            "busca",
            "de",
            "alimento",
            "la",
            "pantera",
            "caza",
            "a",
            "su",
            "presa",
            "con",
            "sus",
            "garras",
            "comer",
            "pescado",
            "carne",
            "miel",
            "hierbas",
            "medicina",
            "comida",
            "huevos",
            "casa",
            "hogar",
            "propiedad",
            "consultorio",
            "edificio",
            "en",
            "un",
            "cocina",
            "hombre",
            "mujer",
            "niño",
            "castigo",
            "llanto",
            "azucar",
            "cafe",
            "agua",
            "bebida",
            "pez",
            "pollo",
            "bistec",
            "ballena",
            "belleza",
            "construir",
            "parada",
            "abono",
            "asfalto",
            "cemento",
            "tierra",
            "madera",
            "ella",
            "ellos",
            "vosotros",
            "nosotros",
            "tu",
            "caminar",
            "correr",
            "andar",
            "respirar",
            "nadar",
            "oceano",
            "playa",
            "palmera",
            "divisa",
            "economia",
            "historia",
            "fisica",
            "quimica",
            "acido",
            "proteinas",
            "cafeina",
            "descubrimiento",
            "hallazgo",
            "piedra",
            "troncos",
            "mosquitos",
            "mosca",
            "asterisco",
            "marioneta",
            "persona",
            "chico",
            "chica",
            "asiatico",
            "europeo",
            "frances",
            "español",
            "indio",
            "americano",
            "brazilero",
            "dominicano",
            "venezolano",
            "colombiano",
            "neozelandes",
            "dolar",
            "euro",
            "petroleo",
            "gas",
            "cuerda",
            "pradera",
            "clavos",
            "tronco",
            "animal",
            "ballena",
            "mamifero",
            "reptil",
            "ambar",
            "almibar",
            "cereza",
            "fresa",
            "fruta",
            "manzana",
            "pera",
            "frambuesa",
            "faraon",
            "reliquia",
            "momia",
            "peruano",
            "paloma",
            "argentino",
            "mexicano",
            "uruguayo",
            "paraguayo",
            "chileno",
            "cubano",
            "canadiense",
            "puertoriqueño",
            "analfabeta",
            "numerico",
            "numero",
            "infraestructura",
            "piramide",
            "hilo",
            "coser",
            "costura",
            "pomada",
            "quemadura",
            "guisante",
            "lata",
            "caña",
            "pescar",
            "representante",
            "estado",
            "salud",
            "medico",
            "enfermera",
            "psiquiatra",
            "psicologo",
            "tobogan",
            "bombillo",
            "cerilla",
            "foco",
            "luz",
            "sombra",
            "arbol",
            "culto",
            "religion",
            "azteca",
            "andino",
            "meridiano",
            "mañana",
            "tarde",
            "noche",
            "atardecer",
            "amanecer",
            "anochecer",
            "azafata",
            "cabina",
        ],
    ]

    let [
        str,
        temp,
        sentence,
        timer,
        seg,
        min,
        pts,
        miss,
        startTimer,
        deleteAll,
        spanElements,
    ] = ["", "", "", , 0, 0, 0, 0, false, false, []]

    /*
     **     @min = min value
     *      @max = max value
     *
     */
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /*
     **     @qty = how many words will be created
     *
     *
     */
    const stringGenerator = qty => {
        for (let i = 1; i <= qty; i++) {
            let word = words[Math.floor(Math.random() * words.length)]
            i === 1
                ? ((sentence += word.split("") + ","),
                  (str += word = word[0].toUpperCase() + word.substring(1)))
                : ((sentence += word.split("")), (str += " " + word))
        }
    }
    stringGenerator(random(valueMin, valueMax))

    // Text
    const createString = () => {
        const arr = str.split("")
        for (let word in arr) {
            let p = document.createElement("p")
            arr[word] === " "
                ? (p.innerHTML = "&nbsp;")
                : (p.innerHTML = arr[word])
            textBox.appendChild(p)
        }
        document.querySelectorAll("p").forEach(span => spanElements.push(span))
    }
    createString()

    /*
     **     @string = original string (contains the words)
     *      @temp = user string (contains the words from input)
     *
     */
    const pointsCalculator = (str, temp) => {
        let [pts, miss, time] = [0, 0]
        for (let word in temp) {
            temp[word] === str[word] ? pts++ : miss++
        }
        min === 1 ? (time = `${min}:${seg}s`) : (time = `${seg}s`)

        return [pts, str.length, miss, time]
    }

    // Time
    const timeUser = () => {
        return setInterval(() => {
            seg === 59 ? (min++, (seg = 0)) : seg++
            timerContainer
                ? seg < 10
                    ? (timerContainer.innerHTML = `${min}:0${seg}`)
                    : (timerContainer.innerHTML = `${min}:${seg}`)
                : ""
        }, 1000)
    }

    // Input
    text.addEventListener("input", e => {
        deleteAll === false
            ? document.addEventListener("keydown", e => {
                  e.shiftKey && e.key === "Home" ? (deleteAll = true) : ""
                  e.key === "Backspace" && deleteAll === true
                      ? ((temp = ""),
                        (pts = 0),
                        (miss = 0),
                        spanElements.forEach(span => {
                            span.classList.remove("g")
                            span.classList.remove("r")
                            span.classList.remove("text-writted")
                            span.classList.remove("md:text-2xl")
                        }))
                      : ""
                  e.key === "Shift" ? "" : ""
              })
            : ""

        if (e.data !== null) {
            !startTimer ? ((timer = timeUser()), (startTimer = true)) : ""
            temp += e.data
            const element = spanElements[(temp.length - 1, temp.length - 1)]
            if (temp !== "") {
                element.innerText === temp[temp.length - 1]
                    ? (element.classList.add("g", "text-writted", "md:text-2xl"),
                      element.classList.remove("r"))
                    : (element.classList.add("r", "text-writted", "md:text-2xl"),
                      element.classList.remove("g"))
                str.substring(0, temp.length) === temp ? pts++ : miss++
            }
        } else {
            const element = spanElements[(temp.length - 1, temp.length - 1)]
            temp.length > 0
                ? ((temp = temp.substring(0, temp.length - 1)),
                  pts--,
                  element.classList.remove("r"),
                  element.classList.remove("g"),
                  element.classList.remove("text-writted"),
                  element.classList.remove("md:text-2xl"))
                : ""
        }
        if (str.length === pts + miss) {
            statistics.classList.remove("hidden")
            let result = pointsCalculator(str, temp)
            ptsResult.innerHTML = `Puntos: &nbsp;${result[0]} &nbsp;/&nbsp; ${result[1]}`
            mistakes.innerHTML = `Errores: ${result[2]}`
            time.innerHTML = `Tiempo: ${result[3]}`
            text.remove()
            clearInterval(timer)
            const stats = {
                username: user,
                ptsObtained: result[0],
                ptsTotal: result[1],
                mistakes: result[2],
                time: result[3],
            }
            let userSave = `User-${localStorage.length}`
            localStorage.setItem(userSave, JSON.stringify(stats))
        }
    })

    changeTxt.addEventListener("click", () => {
        return [
            clearInterval(timer),
            (textBox.innerHTML = ""),
            (text.value = ""),
            ([
                str,
                temp,
                sentence,
                timer,
                seg,
                min,
                pts,
                miss,
                startTimer,
                deleteAll,
                spanElements,
            ] = ["", "", "", , 0, 0, 0, 0, false, false, []]),
            stringGenerator(random(minStored, maxStored)),
            createString(),
            (timerContainer.innerHTML = "0:00"),
        ]
    })
}

const validate = (element, help, cond) => {
    return +element.value > +cond
        ? (help.classList.add("hidden"),
          element.classList.remove("ring-pink-500"),
          element.classList.add("ring-2", "ring-green-500"),
          element === valueMin
              ? (valueMinValidation = true)
              : (valueMaxValidation = true))
        : (help.classList.remove("hidden"),
          element.classList.remove("ring-2", "ring-green-500"),
          element.classList.add("ring-2", "ring-pink-500"),
          element === valueMin
              ? (valueMinValidation = false)
              : (valueMaxValidation = false))
}

registeredAsGuest.addEventListener("click", () => {
    validate(valueMin, helpMin, 0)
    validate(valueMax, helpMax, valueMin.value)
    valueMinValidation && valueMaxValidation === true
        ? (iniciar(+valueMin.value, +valueMax.value),
          (document.getElementById("showUserName").innerHTML = "Guest"),
          (user = "Guest"),
          (minStored = +valueMin.value),
          (maxStored = +valueMax.value),
          document.getElementById("modal").remove())
        : ""
})

registeredAsUser.addEventListener("click", () => {
    document.getElementById("user").value === ""
        ? document.getElementById("help").classList.remove("hidden")
        : (validate(valueMin, helpMin, 0),
          validate(valueMax, helpMax, valueMin.value),
          valueMinValidation && valueMaxValidation === true
              ? (iniciar(+valueMin.value, +valueMax.value),
                (document.getElementById("showUserName").innerHTML =
                    document.getElementById("user").value),
                (user = document.getElementById("user").value),
                (minStored = +valueMin.value),
                (maxStored = +valueMax.value),
                document.getElementById("modal").remove())
              : "")
})

document
    .querySelector("button.mobile-menu-button")
    .addEventListener("click", () => {
        document.querySelector(".mobile-menu").classList.toggle("hidden")
    })

document.getElementById("aside-btn").addEventListener("click", () => {
    document.getElementById("pc-menu").classList.toggle("hidden")
})

const reload = document.getElementById("reload")
reload.addEventListener("click", () => {
    const paragraph = document.getElementById("string")

    let textarea = document.createElement("textarea")
    textarea.id = "text"
    textarea.classList.add(
        "p-4",
        "rounded-md",
        "placeholder:italic",
        "placeholder:text.black",
        "caret-blue-500",
        "h-48",
        "w-full",
        "font-xs",
        "focus:outline-none",
        "focus:ring",
        "focus:ring-violet-300",
        "bg-neutral-300",
        "dark:bg-neutral-400",
        "text-black",
        "dark:text-white",
        "resize-none"
    )
    textarea.placeholder = "Escribe aquí tu respuesta..."
    paragraph.after(textarea)

    document.getElementById("timer").innerHTML = "0:00"
    document.getElementById("change-txt").innerHTML = "Cambiar texto"
    paragraph.innerHTML = ""
    document.getElementById("statistics").classList.toggle("hidden")
    document.getElementById("pts").innerHTML = ""
    document.getElementById("miss").innerHTML = ""
    document.getElementById("time").innerHTML = ""
    iniciar(minStored, maxStored)
})
