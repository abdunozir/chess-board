function toraFunc(e) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (el.id == e.target.classList[0]) {
        corCaltora(el.x, el.y, +e.target.classList[0]);
      }
    });
  });
}

function corCaltora(x, y, id) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (
        (x == el.x && y - 1 == el.y) ||
        (x == el.x && y - 2 == el.y) ||
        (x == el.x && y - 3 == el.y) ||
        (x == el.x && y - 4 == el.y) ||
        (x == el.x && y - 5 == el.y) ||
        (x == el.x && y - 6 == el.y) ||
        (x == el.x && y - 7 == el.y) ||
        (x == el.x && y - 8 == el.y) || //TEPAGA
        (x == el.x && y + 1 == el.y) || //PASTGA
        (x == el.x && y + 2 == el.y) ||
        (x == el.x && y + 3 == el.y) ||
        (x == el.x && y + 4 == el.y) ||
        (x == el.x && y + 5 == el.y) ||
        (x == el.x && y + 6 == el.y) ||
        (x == el.x && y + 7 == el.y) ||
        (x == el.x && y + 8 == el.y) || // PASTGA
        (x - 1 == el.x && y == el.y) || // chapge
        (x - 2 == el.x && y == el.y) ||
        (x - 3 == el.x && y == el.y) ||
        (x - 4 == el.x && y == el.y) ||
        (x - 5 == el.x && y == el.y) ||
        (x - 6 == el.x && y == el.y) ||
        (x - 7 == el.x && y == el.y) ||
        (x - 8 == el.x && y == el.y) || //chapga
        (x + 1 == el.x && y == el.y) || //ongga
        (x + 2 == el.x && y == el.y) ||
        (x + 3 == el.x && y == el.y) ||
        (x + 4 == el.x && y == el.y) ||
        (x + 5 == el.x && y == el.y) ||
        (x + 6 == el.x && y == el.y) ||
        (x + 7 == el.x && y == el.y) ||
        (x + 8 == el.x && y == el.y) // ongga
      ) {
        let cd = document.querySelector('.card' + el.id);
        cd.classList.add('hoveredCard1');
      }
    });
  });
}
