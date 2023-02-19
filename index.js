let serial = 0 ;
var superText="2" ;
// Area of Triangle -----
document.getElementById('triangle').addEventListener('click', function(){
    const name = document.getElementById('triangle-name').innerText;
    const inputBase = document.getElementById('t-base').value;
    const inputHight = document.getElementById('t-hight').value;

    let resultArea = Math.round(0.5 * parseInt(inputBase) * parseInt(inputHight))+ "cm"+superText.sup() ;
    
    displayData(name, resultArea)
})



// Area of Rectangle -----

document.getElementById('rectangle').addEventListener('click', function(){
    const name = document.getElementById('rectangle-name').innerHTML;
    const input1 = document.getElementById('rectangle-w').value;
    const input2 = document.getElementById('rectangle-l').value;


    let rectangleArea = Math.round(parseInt(input1) * parseInt(input2)) + "cm"+superText.sup() ;

    displayData(name, rectangleArea)
})

// Area of Parallelogram -----

document.getElementById('parallelogram').addEventListener('click', function(){
    const name = document.getElementById('parallelogram-name').innerHTML;
    const inputB = document.getElementById('parallelogram-b').value;
    const inputH = document.getElementById('parallelogram-h').value;


    let parallelogramArea = Math.round(parseInt(inputB) * parseInt(inputH)) + "cm"+superText.sup() ;

    displayData(name, parallelogramArea)
})

// Area of Rhombus -----

document.getElementById('rhombus').addEventListener('click', function(){
    const name = document.getElementById('rhombus-name').innerHTML;
    const inputDataA = document.getElementById('r-diagonal1').value;
    const inputDataB = document.getElementById('r-diagonal2').value;


    let rhombusArea = Math.round(0.5 * parseInt(inputDataA) * parseInt(inputDataB)) + "cm"+superText.sup() ;

    displayData(name, rhombusArea)
})


// Area of Pentagon -----


document.getElementById('pentagon').addEventListener('click', function(){
    const name = document.getElementById('pentagon-name').innerText;
    const inputP = document.getElementById('pentagon-p').value;
    const inputB = document.getElementById('pentagon-b').value;

    let pentagonArea = Math.round(0.5 * parseInt(inputP) * parseInt(inputB)) + "cm"+superText.sup();
    
    displayData(name, pentagonArea)
})


// Area of Ellipse -----

document.getElementById('ellipse').addEventListener('click', function(){
    const name = document.getElementById('ellipse-name').innerText;
    const inputA = document.getElementById('ellipse-a').value;
    const inputB = document.getElementById('ellipse-b').value;

    let pentagonArea = Math.round(3.14159 * parseInt(inputA) * parseInt(inputB)) + "cm"+superText.sup() ;
    
    displayData(name, pentagonArea)
})



// Output Result of triangle or Rhombus ==========

function displayData(name, resultArea){
    serial += 1;
    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement("tr");
    tr.innerHTML =`
     <td>${serial}</td> 
     <td>${name}</td> 
     <td>${resultArea}</td> 
    `;
    tableContainer.appendChild(tr);
}
