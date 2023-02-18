


document.getElementById('pentagon').addEventListener('click', function(){
    const name = document.getElementById('pentagon-name').innerText;
    const inputBase = document.getElementById('pentagon-p')
    const inputValueB= inputBase.value;
    const inputHight = document.getElementById('pentagon-b')
    const inputValueH = inputHight.value;

    let pentagonArea = 0.5 * parseInt(inputValueB) * parseInt(inputValueH) ;
    
    displayData(name, pentagonArea)
})
document.getElementById('triangle').addEventListener('click', function(){
    const name = document.getElementById('triangle-name').innerText;
    const inputBase = document.getElementById('t-base')
    const inputValueB= inputBase.value;
    const inputHight = document.getElementById('t-hight')
    const inputValueH = inputHight.value;

    let resultArea = 0.5 * parseInt(inputValueB) * parseInt(inputValueH) ;
    
    displayData(name, resultArea)
})


document.getElementById('rhombus').addEventListener('click', function(){
    const name = document.getElementById('rhombus-name').innerHTML;
    const inputDataA = document.getElementById('r-diagonal1')
    const inputValueA= inputDataA.value;
    const inputDataB = document.getElementById('r-diagonal2')
    const inputValueB = inputDataB.value;

    let rhombusArea = 0.5 * parseInt(inputValueA) * parseInt(inputValueB) ;

    displayData(name, rhombusArea)
})




document.getElementById('rectangle').addEventListener('click', function(){
    const name = document.getElementById('rectangle-name').innerHTML;
    const input1 = document.getElementById('rectangle-w')
    const inputValueW= input1.value;
    const input2 = document.getElementById('rectangle-l')
    const inputValueL = input2.value;

    let rectangleArea = parseInt(inputValueW) * parseInt(inputValueL) ;

    displayData(name, rectangleArea)
})








// Output Result of triangle or Rhombus ==========

function displayData(name, resultArea){
    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement("tr");
    tr.innerHTML =`
     <td>${1}</td> 
     <td>${name}</td> 
     <td>${resultArea}</td> 
    `;
    tableContainer.appendChild(tr);
}
document.getElementById('parallelogram').addEventListener('click', function(){
    const name = document.getElementById('parallelogram-name').innerHTML;
    const inputB = document.getElementById('parallelogram-b')
    const inputValueB = inputB.value;
    const inputH = document.getElementById('parallelogram-h')
    const inputValueH = inputH.value;

    let parallelogramArea = parseInt(inputValueB) * parseInt(inputValueH) ;

    displayData(name, parallelogramArea)
})

