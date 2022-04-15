function shohFunc(e) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (el.id == e.target.classList[0]) {
        // console.log(el.x, el.y);
        corCal(el.x, el.y, +e.target.classList[0]);
      }
    });
  });
}

function corCal(x, y, id) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (
        (x + 1 == el.x && y - 2 == el.y) ||
        (x - 1 == el.x && y - 2 == el.y) ||
        (x - 1 == el.x && y + 2 == el.y) ||
        (x + 1 == el.x && y + 2 == el.y) ||
        (x - 2 == el.x && y + 1 == el.y) ||
        (x - 2 == el.x && y - 1 == el.y) ||
        (x + 2 == el.x && y + 1 == el.y) ||
        (x + 2 == el.x && y - 1 == el.y)
      ) {
        let cd = document.querySelector('.card' + el.id);
        cd.classList.add('hoveredCard1');
      }

      
    });
  });
}
