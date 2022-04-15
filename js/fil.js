function filFunc(e) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (el.id == e.target.classList[0]) {
        corCalfil(el.x, el.y, +e.target.classList[0]);
      }
    });
  });
}

function corCalfil(x, y, id) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (
        (x + 1 == el.x && y + 1 == el.y) || //ongdan pastga
        (x + 2 == el.x && y + 2 == el.y) ||
        (x + 3 == el.x && y + 3 == el.y) ||
        (x + 4 == el.x && y + 4 == el.y) ||
        (x + 5 == el.x && y + 5 == el.y) ||
        (x + 6 == el.x && y + 6 == el.y) ||
        (x + 7 == el.x && y + 7 == el.y) ||
        (x + 8 == el.x && y + 8 == el.y) || //ongdan pastga
        (x + 1 == el.x && y - 1 == el.y) || //ongdan tepaga
        (x + 2 == el.x && y - 2 == el.y) ||
        (x + 3 == el.x && y - 3 == el.y) ||
        (x + 4 == el.x && y - 4 == el.y) ||
        (x + 5 == el.x && y - 5 == el.y) ||
        (x + 6 == el.x && y - 6 == el.y) ||
        (x + 7 == el.x && y - 7 == el.y) ||
        (x + 8 == el.x && y - 8 == el.y) || //ongdan tepaga
        (x - 1 == el.x && y - 1 == el.y) || //chapdan tepaga
        (x - 2 == el.x && y - 2 == el.y) ||
        (x - 3 == el.x && y - 3 == el.y) ||
        (x - 4 == el.x && y - 4 == el.y) ||
        (x - 5 == el.x && y - 5 == el.y) ||
        (x - 6 == el.x && y - 6 == el.y) ||
        (x - 7 == el.x && y - 7 == el.y) ||
        (x - 8 == el.x && y - 8 == el.y) || //chapdan tepaga
        (x - 1 == el.x && y + 1 == el.y) || //chapda pastga
        (x - 2 == el.x && y + 2 == el.y) ||
        (x - 3 == el.x && y + 3 == el.y) ||
        (x - 4 == el.x && y + 4 == el.y) ||
        (x - 5 == el.x && y + 5 == el.y) ||
        (x - 6 == el.x && y + 6 == el.y) ||
        (x - 7 == el.x && y + 7 == el.y) ||
        (x - 8 == el.x && y + 8 == el.y)
      ) {
        let cd = document.querySelector('.card' + el.id);
        cd.classList.add('hoveredCard1');
      }
    });
  });
}
