
// Area of Triangle --------

document.getElementById('triangle').addEventListener('click', function(){
    const name = document.getElementById('triangle-name').innerText;
    const inputBase = document.getElementById('t-base')
    const inputValueB= inputBase.value;
    const inputHight = document.getElementById('t-hight')
    const inputValueH = inputHight.value;

    let areaValue = 0.5 * inputValueB * inputValueH ;
    console.log(areaValue)

    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement("tr");
    tr.innerHTML =`
     <td>${1}</td> 
     <td>${name}</td> 
     <td>${areaValue}</td> 
    `;
    tableContainer.appendChild(tr);
})

// Area of Rhombus

document.getElementById('rhombus').addEventListener('click', function(){
    const input1 = document.getElementById('r-diagonal1')
    const inputValueB= input1.value;
    const input2 = document.getElementById('r-diagonal2')
    const inputValueH = input2.value;

    let areaValue = 0.5 * inputValueB * inputValueH ;

    console.log(areaValue)
})