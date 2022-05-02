
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    cell.classList.add('box');
    cell.style.width=(container.width/cols);
    cell.style.height=(container.height/rows);
  };
};



makeRows(20,20);

box=container.querySelectorAll(".box")

box.forEach(element => {
    element.addEventListener('mouseover',colorChange)
});


function colorChange(e){
    e.target.className='active'
}

