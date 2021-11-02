adaptive()
window.addEventListener('resize', adaptive)
function adaptive() {
    if(window.innerWidth <= 768) {
        if ( document.getElementById('navBar').style.position != 'absolute') {
            document.getElementById('navBar').style.display = 'none'
            document.getElementById('navBar').style.position = 'absolute'
            document.getElementById('navBarOpenButton').style.display = 'inline-block'
        }
    }
    else {
        if ( document.getElementById('navBar').style.position != 'relative') {
        document.getElementById('navBar').style.position = 'relative'
        document.getElementById('navBar').style.display = 'inline-block'
        document.getElementById('navBarOpenButton').style.display = 'none'
        }
    }
}
function navOpenAndClose() {
    if (document.getElementById('navBar').style.display == 'none')
        document.getElementById('navBar').style.display = 'inline-block'
    else
        document.getElementById('navBarOpenButton').style.display = 'none'
}


let dataArray = []
fillArray(dataArray, 15)
console.log(dataArray)
fillNameSelector('projectName' ,dataArray)

function showDataReport(userName, array) {
    document.getElementById('dataReportHead').innerHTML = userName
    document.getElementById('dataReportInsideBox').innerHTML = ''
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].userName == userName) {
            sum += array[i].timeMinutes
            let divBox = document.createElement('div')
            divBox.setAttribute('class', 'dataReportRowInside')
            let divOne = document.createElement('div')
            divOne.setAttribute('class', 'dataReportRowName')
            let divTwo = document.createElement('div')
            divTwo.setAttribute('class', 'dataReportRowData')
            divOne.innerHTML = array[i].projectName
            divTwo.innerHTML = array[i].timeMinutes
            divBox.appendChild(divOne)
            divBox.appendChild(divTwo)
            document.getElementById('dataReportInsideBox').appendChild(divBox)
        }
    }
    document.getElementById('dataReportTotalData').innerHTML = sum
}
function fillNameSelector (idNameSelector, dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
        let option = document.createElement('option')
        option.innerHTML = dataArray[i].userName
        document.getElementById(idNameSelector).appendChild(option)
    }
}
function fillArray(array, length) {
    for (let i = 1; i <= length; i++) {
        array.push({userId: i, userName: faker.name.findName(), projectName: `Project${i}`, timeMinutes: getRandom(0, 150)})
    }
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }