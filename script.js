const data1 = [
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

let data2 = [
    {
        "x": 0.5,
        "y": 0.15,
        "name": "Jerevan"
    },
    {
        "x": 0.65,
        "y": 0.14,
        "name": "Baku"
    },
    {
        "x": 0.67,
        "y": 0.54,
        "name": "Manáma"
    },
    {
        "x": 0.51,
        "y": 0.11,
        "name": "Tbilisi"
    },
    {
        "x": 0.5,
        "y": 0.34,
        "name": "Bagdád"
    },
    {
        "x": 0.69,
        "y": 0.27,
        "name": "Teherán"
    },
    {
        "x": 0.25,
        "y": 0.39,
        "name": "Jeruzalém"
    },
    {
        "x": 0.24,
        "y": 0.38,
        "name": "Tel Aviv"
    },
    {
        "x": 0.5,
        "y": 0.85,
        "name": "San'á"
    },
    {
        "x": 0.27,
        "y": 0.38,
        "name": "Ammán"
    },
    {
        "x": 0.69,
        "y": 0.58,
        "name": "Dauhá"
    },
    {
        "x": 0.6,
        "y": 0.46,
        "name": "Kuvajt"
    },
    {
        "x": 0.2,
        "y": 0.29,
        "name": "Nikósie"
    },
    {
        "x": 0.26,
        "y": 0.33,
        "name": "Bejrút"
    },
    {
        "x": 0.89,
        "y": 0.62,
        "name": "Maskat"
    },
    {
        "x": 0.56,
        "y": 0.59,
        "name": "Rijád"
    },
    {
        "x": 0.36,
        "y": 0.67,
        "name": "Mekka"
    },
    {
        "x": 0.78,
        "y": 0.6,
        "name": "Abu Dhábí"
    },
    {
        "x": 0.29,
        "y": 0.34,
        "name": "Damašek"
    },
    {
        "x": 0.19,
        "y": 0.16,
        "name": "Ankara"
    },
    {
        "x": 0.22,
        "y": 0.4,
        "name": "Ramalláh"
    },
    {
        "x": 0.08,
        "y": 0.12,
        "name": "Istanbul"
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

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let currentWantedIndex = 0;
let data = data1

let datasetToggler = document.querySelector("#datasetToggler")
datasetToggler.onclick = (e) => {
    let source = datasetToggler.dataset.source
    if (source === "capitals") {
        data = data2
        create()
        datasetToggler.innerText = "Přírodní podmínky"
        datasetToggler.dataset.source = "nature"
    }
    if (source === "nature")  {
        data = data1
        create()
        datasetToggler.innerText = "Hlavní města"
        datasetToggler.dataset.source = "capitals"
    }
}

function create() {
    let bg = document.querySelector("#quizBackgroundImg")
    let inputsParent = document.querySelector("#quizInputWrapper")
    let quizTargetName = document.querySelector("#quizTargetName")
    let quizMessageElement = document.querySelector("#quizMessage")
    let quizQuestionCount = document.querySelector("#quizQuestionCount")
    let showResult = document.querySelector("#showResult")
    let shuffledData = [...shuffle(data)]
    let wrongNum = 0

    let imgX = bg.offsetWidth
    let imgY = bg.offsetHeight

    inputsParent.style.width = `${imgX}px`
    inputsParent.style.height = `${imgY}px`

    inputsParent.innerHTML = ""

    shuffledData.map((point,i) => {
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

            if (currentWantedIndex === shuffledData.length - 1) {
                alert("Jsi u konce! Počet chyb: " + wrongNum)
                currentWantedIndex = 0;
                quizTargetName.innerText = shuffledData[currentWantedIndex].name
                quizQuestionCount.innerText = currentWantedIndex + '/' + shuffledData.length
                inputs.forEach((el) => {
                    el.style.accentColor = "inherit"
                    el.dataset.isGuessed = false
                    el.checked = false
                })
                wrongNum = 0
                location.reload()
                return;
            }

            if (selectedIndex === currentWantedIndex) {
                quizMessageElement.innerText = ""
                el.style.accentColor = "lime"
                el.dataset.isGuessed = true
                currentWantedIndex++
                quizTargetName.innerText = shuffledData[currentWantedIndex].name
                quizQuestionCount.innerText = currentWantedIndex + '/' + shuffledData.length
            } else {
                quizMessageElement.innerText = `Špatně (${shuffledData[selectedIndex].name})`
                el.checked = false
                wrongNum++
            }

        });
    });

    showResult.onclick = () => {
        let wanted = document.querySelector(`input[name='${currentWantedIndex}']`)
        wanted.click()
    }

    quizTargetName.innerText = shuffledData[currentWantedIndex].name
    quizQuestionCount.innerText = currentWantedIndex + '/' + shuffledData.length
}

document.body.onload = () => {
    create()
}

onresize = () => {
    let bg = document.querySelector("#quizBackgroundImg")
    let inputsParent = document.querySelector("#quizInputWrapper")

    let imgX = bg.offsetWidth
    let imgY = bg.offsetHeight

    inputsParent.style.width = `${imgX}px`
    inputsParent.style.height = `${imgY}px`
}
