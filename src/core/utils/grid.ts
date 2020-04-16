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

  gradientBlocksV.forEach((lineGrid: HTMLElement) => {
    const line = lineGrid;
    const blockHeight = line.offsetHeight;
    const yMainColorStart = ((y / blockHeight) * 100).toFixed(2);
    const yMouseColorStart = +yMainColorStart - 20;
    const yMouseColorEnd = +yMainColorStart + 20;
    const posX = line.offsetLeft;

    if (minX < posX && posX < maxX) {
      line.style.background = `linear-gradient(${mainColor}, ${mainColor} ${yMouseColorStart}%, ${mouseColor} ${yMainColorStart}%, ${mainColor} ${yMouseColorEnd}%)`;
    } else {
      line.style.background = mainColor;
    }
  });

  gradientBlocksH.forEach((lineGrid: HTMLElement) => {
    const line = lineGrid;
    const blockWidth = line.offsetWidth;
    const xMainColorStart = ((x / blockWidth) * 100).toFixed(2);
    const xMouseColorStart = +xMainColorStart - 10;
    const xMouseColorEnd = +xMainColorStart + 10;
    const posY = line.offsetTop;

    if (minY < posY && posY < maxY) {
      line.style.background = `linear-gradient(90deg, ${mainColor}, ${mainColor} ${xMouseColorStart}%, ${mouseColor} ${xMainColorStart}%, ${mainColor} ${xMouseColorEnd}%)`;
    } else {
      line.style.background = mainColor;
    }
  });
};
