let chess_board = document.querySelector('.chess_board');
let cards = document.querySelector('.cards');
let clicked_stone = [];

let card = '';
for (let i = 0; i < chessObj.length; i++) {
  let rows = document.createElement('div');
  rows.className = 'rows';
  for (let j = 0; j < chessObj[i].length; j++) {
    card += `<div onmouseover="overCard(event)" onmouseleave="leaveCard(event)" class=" ${chessObj[i][j].id} card${chessObj[i][j].id} card"></div>`;
  }
  rows.innerHTML = card;
  card = '';
  cards.appendChild(rows);
}

function overCard(e) {
  e.target.classList.add('hoveredCard');
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (e.target.classList[0] == el.id) {
        document.querySelector('.xCords').innerHTML = el.x;
        document.querySelector('.yCords').innerHTML = el.y;
      }
    });
  });

  //   when stone clicked
  console.log(clicked_stone);
  if (clicked_stone[0] == 'ot') {
    otFunc(e);
  } else if (clicked_stone[0] == 'shoh') {
    shohFunc(e);
  } else if (clicked_stone[0] == 'vazir') {
    vazirFunc(e);
  } else if (clicked_stone[0] == 'fil') {
    filFunc(e);
  } else if (clicked_stone[0] == 'tora') {
    toraFunc(e);
  } else if (clicked_stone[0] == 'piyoda') {
    piyodaFunc(e);
  }
}
function leaveCard(e) {
  e.target.classList.remove('hoveredCard');
  document.querySelectorAll('.hoveredCard1').forEach((el) => {
    el.classList.remove('hoveredCard1');
  });
}

let stons = document.querySelectorAll('.ston');

// slicked stones
stons.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.currentTarget);
    let stone_type =
      e.currentTarget.classList[e.currentTarget.classList.length - 1];
    clicked_stone[0] = stone_type;
    console.log(document.querySelector('.ston_selected'));
    if (document.querySelector('.ston_selected') !== null) {
      document
        .querySelector('.ston_selected')
        .classList.remove('ston_selected');
    }

    e.currentTarget.classList.add('ston_selected');
  });
});

// let stons = document.querySelectorAll(".stone");

// stons.forEach((item) => {
//   item.addEventListener("click", () => {
//     stons.forEach(element => {
//       element.classList.remove('ston_selected')
//     })
//     item.classList.add('ston_selected')
//   });
// });

function to3D(e) {
  cards.classList.toggle('click3D');
  if (e.target.innerHTML == '2D') {
    e.target.innerHTML = '3D';
  } else {
    e.target.innerHTML = '2D';
  }
}
