const data = [
    {
        "x": 0.35,
        "y": 0.71,
        "name": "Rudé moře"
    },
    {
        "x": 0.96,
        "y": 0.64,
        "name": "Arabské moře"
    },
    {
        "x": 0.18,
        "y": 0.05,
        "name": "Černé moře"
    },
    {
        "x": 0.08,
        "y": 0.12,
        "name": "Bospor"
    },
    {
        "x": 0.02,
        "y": 0.14,
        "name": "Dardanely"
    },
    {
        "x": 0.26,
        "y": 0.39,
        "name": "Mrtvé moře"
    },
    {
        "x": 0.6,
        "y": 0.92,
        "name": "Adenský záliv"
    },
    {
        "x": 0.47,
        "y": 0.92,
        "name": "průliv Bab al-Mandab"
    },
    {
        "x": 0.69,
        "y": 0.52,
        "name": "Perský záliv"
    },
    {
        "x": 0.89,
        "y": 0.59,
        "name": "Ománský záliv"
    },
    {
        "x": 0.83,
        "y": 0.53,
        "name": "Hormuzský průliv"
    },
    {
        "x": 0.54,
        "y": 0.36,
        "name": "Mezopotámská nížina"
    },
    {
        "x": 0.35,
        "y": 0.35,
        "name": "Syrská poušť"
    },
    {
        "x": 0.37,
        "y": 0.47,
        "name": "poušť Nafúd"
    },
    {
        "x": 0.69,
        "y": 0.73,
        "name": "Rub al-Chálí"
    },
    {
        "x": 0.48,
        "y": 0.15,
        "name": "Arménská vysočina (Velký Ararat)"
    },
    {
        "x": 0.48,
        "y": 0.07,
        "name": "Velký Kavkaz (Elbruz)"
    },
    {
        "x": 0.71,
        "y": 0.27,
        "name": "pohoří Elborz"
    },
    {
        "x": 0.64,
        "y": 0.38,
        "name": "Zagros"
    },
    {
        "x": 0.83,
        "y": 0.43,
        "name": "poušť Lút"
    },
    {
        "x": 0.77,
        "y": 0.3,
        "name": "Velká solná poušť"
    },
    {
        "x": 0.2,
        "y": 0.18,
        "name": "jezero Tuz"
    },
    {
        "x": 0.45,
        "y": 0.19,
        "name": "Vanské jezero"
    },
    {
        "x": 0.53,
        "y": 0.21,
        "name": "Urmijské jezero"
    },
    {
        "x": 0.23,
        "y": 0.1,
        "name": "Pontské pohoří"
    },
    {
        "x": 0.2,
        "y": 0.25,
        "name": "Taurus"
    }
]

//set data

/*let questions = []

addEventListener("mousedown", function (e) {
    let bg = document.querySelector("#quizBackgroundImg")
    let inputsParent = document.querySelector("#quizInputWrapper")
    let nameInput = document.querySelector("#quizNameInput")
    if (e.target !== bg && e.target !== inputsParent) return

    let x = e.clientX
    let y = e.clientY
    let imgX = bg.offsetWidth
    let imgY = bg.offsetHeight
    let xPercentaged = x / imgX
    let yPercentaged = y / imgY

    inputsParent.style.width = `${imgX}px`
    inputsParent.style.height = `${imgY}px`

    let input = document.createElement("input")
    input.type = "radio"
    input.name = inputsParent.childElementCount + 1
    input.style.position = "absolute"
    input.style.left = `${Math.floor(xPercentaged * 10000)/100}%`
    input.style.top = `${Math.floor(yPercentaged*10000)/100}%`
    inputsParent.appendChild(input)

    questions.push({
        x: Math.floor(xPercentaged * 100) / 100,
        y: Math.floor(yPercentaged * 100) / 100,
        name: nameInput.value
    })

    console.log(questions)

    nameInput.value = ""

}, true)*/


let currentWantedIndex = 0;

document.body.onload = () => {
    let bg = document.querySelector("#quizBackgroundImg")
    let inputsParent = document.querySelector("#quizInputWrapper")
    let quizTargetName = document.querySelector("#quizTargetName")
    let quizMessageElement = document.querySelector("#quizMessage")
    let quizQuestionCount = document.querySelector("#quizQuestionCount")

    let imgX = bg.offsetWidth
    let imgY = bg.offsetHeight

    inputsParent.style.width = `${imgX}px`
    inputsParent.style.height = `${imgY}px`

    data.map((point, i) => {
        let input = document.createElement("input")
        input.type = "radio"
        input.name = i
        input.style.position = "absolute"
        input.style.left = `${point.x * 100}%`
        input.style.top = `${point.y * 100}%`
        inputsParent.appendChild(input)
    })  

    let inputs = document.querySelectorAll("input");
    inputs.forEach(function (el) {
        el.addEventListener("change", function () {
            let selectedIndex = parseInt(el.name)

            if (selectedIndex === data.length - 1) {
                alert("Jsi u konce!")
                currentWantedIndex = 0;
                quizTargetName.innerText = data[currentWantedIndex].name
                quizQuestionCount.innerText = currentWantedIndex + '/' + data.length
                inputs.forEach((el) => {
                    el.style.accentColor = "inherit"
                    el.dataset.isGuessed = false
                    el.checked = false
                })
                return;
            }

            if (selectedIndex === currentWantedIndex) {
                quizMessageElement.innerText = ""
                el.style.accentColor = "lime"
                el.dataset.isGuessed = true
                currentWantedIndex++
                quizTargetName.innerText = data[currentWantedIndex].name
                quizQuestionCount.innerText = currentWantedIndex + '/' + data.length
            } else {
                quizMessageElement.innerText = `Špatně (${data[selectedIndex].name})`
                el.checked = false
            }

        });
    });

    quizTargetName.innerText = data[currentWantedIndex].name
    quizQuestionCount.innerText = currentWantedIndex + '/' + data.length
}

onresize = () => {
    let bg = document.querySelector("#quizBackgroundImg")
    let inputsParent = document.querySelector("#quizInputWrapper")

    let imgX = bg.offsetWidth
    let imgY = bg.offsetHeight

    inputsParent.style.width = `${imgX}px`
    inputsParent.style.height = `${imgY}px`
}
