
const container = document.getElementById("container");

function makeRows(rows) {
  console.log(rows)
  container.style.setProperty('--grid-rows', rows);

  for (i = 1; i <= (rows * rows); i++) {
    const cell = document.createElement(`div`);
    container.appendChild(cell);
    cell.classList.add("box",i);
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

makeRows(10);

var input_grid = document.querySelector("#row_input");

function change_grid(e) {
  input_grid_value = input_grid.value;
  console.log(input_grid_value)
  boxes = document.querySelectorAll(".box, .active");

  for (i = 0; i < boxes.length; i++) {
    boxes[i].remove();
  }

  makeRows(input_grid_value, input_grid_value)

}


function colorChange(e) {
  e.target.className = 'active'
}

function limpiar() {
  box.forEach(element => {
    element.classList.remove("active")
    element.classList.add("box")
  })
}


