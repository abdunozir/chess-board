function piyodaFunc(e) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (el.id == e.target.classList[0]) {
        corCalpiyoda(el.x, el.y, +e.target.classList[0]);
      }
    });
  });
}

function corCalpiyoda(x, y, id) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (y == 7) {
        if ((x == el.x && y - 1 == el.y) || (x == el.x && y - 2 == el.y)) {
          let cd = document.querySelector('.card' + el.id);
          cd.classList.add('hoveredCard1');
        }
      } else if (y == 8) {
        console.log('yoq');
      } else {
        if (x == el.x && y - 1 == el.y) {
          let cd = document.querySelector('.card' + el.id);
          cd.classList.add('hoveredCard1');
        }
      }
    });
  });
}
