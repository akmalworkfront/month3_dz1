const traficLightDefault = '/default.png';
const traficLightRed = '/red.png';
const traficLightYellow = '/yellow.png';
const traficLightGreen = '/green.png';

const container = document.createElement('div');
const img = document.createElement('img');
document.body.prepend(container);

container.classList.add('trafic-light');
container.prepend(img);
img.setAttribute('src', traficLightDefault);

const label = document.createElement('img');
container.append(label);

document.body.style.cssText = `
  margin: 0;
  height: 100vh;
  display: flex;
`;

container.style.cssText = `
  height: 500px;
  margin: auto;
  text-align: center;
  position: relative;
`;

img.style.cssText = `
  max-height: 100%;
  width: auto;
  object-fit: contain;
`;



const color = prompt('Введите цвет');

const colorArray = {

  "red": traficLightRed, "Red": traficLightRed, "RED": traficLightRed,
  "yellow": traficLightYellow, "Yellow": traficLightYellow, "YELLOW": traficLightYellow,
  "green": traficLightGreen, "Green": traficLightGreen, "GREEN": traficLightGreen,

  "красный": traficLightRed, "Красный": traficLightRed, "КРАСНЫЙ": traficLightRed,

  "жёлтый": traficLightYellow, "Жёлтый": traficLightYellow, "ЖЁЛТЫЙ": traficLightYellow,
  "желтый": traficLightYellow, "Желтый": traficLightYellow, "ЖЕЛТЫЙ": traficLightYellow,

  "зелёный": traficLightGreen, "Зелёный": traficLightGreen, "ЗЕЛЁНЫЙ": traficLightGreen,
  "зеленый": traficLightGreen, "Зеленый": traficLightGreen, "ЗЕЛЕНЫЙ": traficLightGreen
};

if (color === null) {
  alert('Ввод отменён пользователем.');
} else {
  const input = color.trim();
  if (input === "") {
    alert('Вы не ввели цвет.');
  } else if (colorArray[input]) {
    img.setAttribute('src', colorArray[input]);
    let src = img.getAttribute('src')
    if (src === traficLightRed) {
      label.setAttribute('src', '/stop.png');
      
      label.style.cssText = `
        position: absolute;
        top: 4%;
        width: 90px;
        height: 90px;
      `;
      
    } else if (src === traficLightYellow) {
      label.innerText = "WAIT";
     
    } else if (src === traficLightGreen) {
      label.setAttribute('src', '/go.png');
      label.style.cssText = `
        position: absolute;
        bottom: 24.6%;
        width: 90px;
        height: 90px;
      `;
    }
  } else {
    alert('Ошибка! Введите корректный цвет');
    img.setAttribute('src', traficLightDefault);
  }
}