const color = prompt('Введите цвет');

const colorArray = {
  "red": "red", "Red": "red", "RED": "red",
  "blue": "blue", "Blue": "blue", "BLUE": "blue",
  "green": "green", "Green": "green", "GREEN": "green",
  "yellow": "yellow", "Yellow": "yellow", "YELLOW": "yellow",
  "black": "black", "Black": "black", "BLACK": "black",
  "white": "white", "White": "white", "WHITE": "white",
  "purple": "purple", "Purple": "purple", "PURPLE": "purple",
  "orange": "orange", "Orange": "orange", "ORANGE": "orange",
  "pink": "pink", "Pink": "pink", "PINK": "pink",
  "brown": "brown", "Brown": "brown", "BROWN": "brown",

  "красный": "red", "Красный": "red", "КРАСНЫЙ": "red",

  "синий": "blue", "Синий": "blue", "СИНИЙ": "blue",

  "зелёный": "green", "Зелёный": "green", "ЗЕЛЁНЫЙ": "green",
  "зеленый": "green", "Зеленый": "green", "ЗЕЛЕНЫЙ": "green",

  "жёлтый": "yellow", "Жёлтый": "yellow", "ЖЁЛТЫЙ": "yellow",
  "желтый": "yellow", "Желтый": "yellow", "ЖЕЛТЫЙ": "yellow",

  "чёрный": "black", "Чёрный": "black", "ЧЁРНЫЙ": "black",
  "черный": "black", "Черный": "black", "ЧЕРНЫЙ": "black",

  "белый": "white", "Белый": "white", "БЕЛЫЙ": "white",

  "фиолетовый": "purple", "Фиолетовый": "purple", "ФИОЛЕТОВЫЙ": "purple",

  "оранжевый": "orange", "Оранжевый": "orange", "ОРАНЖЕВЫЙ": "orange",

  "розовый": "pink", "Розовый": "pink", "РОЗОВЫЙ": "pink",

  "коричневый": "brown", "Коричневый": "brown", "КОРИЧНЕВЫЙ": "brown"
};
if (color === null) {
  alert('Ввод отменён пользователем.');
} else if (color.trim() === "") {
  alert('Вы не ввели цвет.');
} else if (colorArray[color]) {
  document.body.style.backgroundColor = colorArray[color];
  let createElement = document.createElement('h1');
  document.body.prepend(createElement);
  createElement.innerText = `Фон изменён на <${colorArray[color]}>`;
  createElement.style.color = "white";
} else {
  alert('Ошибка! Введите корректный цвет.');
}




