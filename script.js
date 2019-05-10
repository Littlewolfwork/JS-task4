// создаем массив из ячеек и назначим на каждую клетку доски обработчик на клик мышкой
let arrayTd = document.querySelectorAll('td');
for (let i = 0; i < arrayTd.length; i++) {
    arrayTd[i].addEventListener('click', clickHandler);
}

// функция для сброса фона при щелчке мышки на новой клетке
function clearMoves() {
    let arrayMoves = document.querySelectorAll(".moves");
    for (let i = 0; i < arrayMoves.length; i++) {
        arrayMoves[i].classList.remove("moves");
    }
    document.querySelector(".current").classList.remove("current");
}

// функция для вычисления и показа возможных ходов
function Moves(x,y){
    clearMoves();
    let movesX = [];
    let movesY = [];
    let startX= x;
    let startY = y;
    movesX.push(startX+1);
    movesY.push(startY+2);
    movesX.push(startX-1);
    movesY.push(startY+2);
    movesX.push(startX+2);
    movesY.push( startY+1);
    movesX.push(startX+2);
    movesY.push(startY-1);
    movesX.push(startX+1);
    movesY.push(startY-2);
    movesX.push(startX-1);
    movesY.push(startY-2);
    movesX.push(startX-2);
    movesY.push(startY+1);
    movesX.push(startX-2);
    movesY.push(startY-1);
    for (let i=0;i<=8; i++){
        if ((movesX[i]>0 && movesX[i]<=8)&&(movesY[i]>0 && movesY[i]<=8)) {
            document.querySelector("table").rows[movesX[i]].cells[movesY[i]].classList.add("moves");
        }
    }


}


/* обработчик клика по клетке, проверяет попадание по доске,
* передает в функцию-вычислитель номер строки и номер столбца клетки, по которой кликнули
*/
function clickHandler(event) {
    event.preventDefault();
    let cellIndex = this.cellIndex;
    let rowIndex = this.parentNode.rowIndex;
    if (cellIndex>0&&cellIndex<9&&rowIndex>0&&rowIndex<9){
        this.classList.add("current");
        Moves(rowIndex,cellIndex);
    }
    else{
        return;
    }
}