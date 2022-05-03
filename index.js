
const container = document.getElementById("container");

function makeRows(rows) {
  console.log(rows)
  container.style.setProperty('--grid-rows', rows);

  for (i = 1; i <= (rows * rows); i++) {
    const cell = document.createElement(`div`);
    container.appendChild(cell);
    cell.classList.add("box", i);
    cell.style.width = (container.width / rows);
    cell.style.height = (container.height / rows);
    console.log(i)
  };

  box = container.querySelectorAll(".box")
  box.forEach(element => {
    element.addEventListener('mouseover', colorChange)
  });

  limpiar()


};

makeRows(16);

var input_grid = document.querySelector("#grid_range");
var par= document.querySelector(".output_grid_range");

input_grid.addEventListener('input',function(){
  par.innerHTML=`${input_grid.value} x ${input_grid.value}`;
  change_grid();
})


function change_grid() {
  

  if (input_grid.value < 100 && input_grid.value > 0) {
    console.log(input_grid.value)
    boxes = document.querySelectorAll(".box");

    for (i = 0; i < boxes.length; i++) {
      boxes[i].remove();
    }

    makeRows(input_grid.value, input_grid.value)
  } else {
    alert("Usar un número mayor que 0 y menor a 100");
  }


}


function colorChange(e) {
  var input_rainbow = document.querySelector("#color_rainbow")
  var input_black = document.querySelector("#color_black")
  var input_other = document.querySelector("#color_other")
  if (input_rainbow.checked === true) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor

  } else if (input_other.checked === true) {
 
    var color=document.querySelector("#color_input").value
    e.target.style.backgroundColor = color;
    

  } else {
    e.target.style.backgroundColor = "black"

  }

}

function limpiar() {
  box.forEach(element => {
    element.style.backgroundColor = 'white'
  })
}


