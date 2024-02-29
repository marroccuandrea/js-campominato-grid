// Costanti
const grid = document.querySelector('.grid');
const btnStart = document.querySelector('.btn-start');

reset();

// Aggiungo la funzione che genera 100 quadrati

    for(let i = 1; i <= 100; i++){
        const square = getSquare(i);
        grid.append(square);
    }

function getSquare(indice){
    const square = document.createElement('div');
    square.className = 'square';
    square.innerHTML = indice;
    square.sqID = indice;


    return square;
}

// Funzione reset
function reset(){
    grid.innerHTML = '';
}