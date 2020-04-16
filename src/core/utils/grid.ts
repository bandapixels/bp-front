export const createGrid = (ref: HTMLElement, linesGap: number): void => {
  let gap = linesGap;

  while (gap < ref.offsetWidth) {
    const line = document.createElement("div");
    line.classList.add("gradient-vertical");
    line.style.left = `${gap}px`;
    ref.append(line);
    gap += linesGap;
  }

  gap = linesGap;

  while (gap < ref.offsetHeight) {
    const line = document.createElement("div");
    line.classList.add("gradient-horizontal");
    line.style.top = `${gap}px`;
    ref.append(line);
    gap += linesGap;
  }
};

export const addAnimationToGrid = (
  e,
  mainColor: string,
  mouseColor: string
): void => {
  const x = e.clientX;
  const y = e.clientY;
  const [minX, maxX] = [x - 100, x + 100];
  const [minY, maxY] = [y - 100, y + 100];
  const gradientBlocksV = document.querySelectorAll(".gradient-vertical");
  const gradientBlocksH = document.querySelectorAll(".gradient-horizontal");
  const vLines = [];
  const hLines = [];

  gradientBlocksV.forEach((lineGrid: HTMLElement) => {
    const line = lineGrid;
    const posX = line.offsetLeft;

    if (minX < posX && posX < maxX) {
      vLines.push(line);
    } else {
      line.style.background = mainColor;
    }
  });

  const vMiddleElement = Math.floor(vLines.length / 2);

  vLines.forEach((lineGrid: HTMLElement, index: number) => {
    const line = lineGrid;
    const blockHeight = line.offsetHeight;
    const yMainColorStart = ((y / blockHeight) * 100).toFixed(2);
    let coef = 0;

    if (index < vMiddleElement) {
      coef = vMiddleElement - index + 4;
    } else if (index > vMiddleElement) {
      coef = index - vMiddleElement + 4;
    }

    const yMouseColorStart = +yMainColorStart - 17 + coef;
    const yMouseColorEnd = +yMainColorStart + 17 - coef;

    line.style.background = `linear-gradient(${mainColor}, ${mainColor} ${yMouseColorStart}%, ${mouseColor} ${yMainColorStart}%, ${mainColor} ${yMouseColorEnd}%)`;
  });

  gradientBlocksH.forEach((lineGrid: HTMLElement) => {
    const line = lineGrid;
    const posY = line.offsetTop;

    if (minY < posY && posY < maxY) {
      hLines.push(line);
    } else {
      line.style.background = mainColor;
    }
  });

  const hMiddleElement = Math.floor(hLines.length / 2);

  hLines.forEach((lineGrid: HTMLElement, index: number) => {
    const line = lineGrid;
    const blockWidth = line.offsetWidth;
    const xMainColorStart = ((x / blockWidth) * 100).toFixed(2);
    let coef = 0;

    if (index < hMiddleElement) {
      coef = hMiddleElement - index + 0;
    } else if (index > hMiddleElement) {
      coef = index - hMiddleElement + 0;
    }

    const xMouseColorStart = +xMainColorStart - 8 + coef;
    const xMouseColorEnd = +xMainColorStart + 8 - coef;

    line.style.background = `linear-gradient(90deg, ${mainColor}, ${mainColor} ${xMouseColorStart}%, ${mouseColor} ${xMainColorStart}%, ${mainColor} ${xMouseColorEnd}%)`;
  });
};
