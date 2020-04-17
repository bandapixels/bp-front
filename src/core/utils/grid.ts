export const createGrid = (ref: HTMLElement, linesGap: number): void => {
  // space between lines
  let gap = linesGap;

  // add vertical lines
  while (gap < ref.offsetWidth) {
    const line = document.createElement("div");
    line.classList.add("gradient-vertical");
    line.style.left = `${gap}px`;
    ref.append(line);
    gap += linesGap;
  }

  gap = linesGap;

  // add horizontal lines
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
  gradientColor: string,
  wrapper: HTMLElement
): void => {
  // mouse position
  const x = e.pageX;
  const y = e.pageY - wrapper.offsetTop;
  // line capture radius
  const [minX, maxX] = [x - 100, x + 100];
  const [minY, maxY] = [y - 100, y + 100];
  // get grid lines
  const gradientBlocksV = wrapper.querySelectorAll(".gradient-vertical");
  const gradientBlocksH = wrapper.querySelectorAll(".gradient-horizontal");
  // lines that fall into the radius zone
  const vLines = [];
  const hLines = [];

  // check which vertical lines are in the radius zone and add them to array, the rest we update the background
  gradientBlocksV.forEach((lineGrid: HTMLElement) => {
    const line = lineGrid;
    // get line offset
    const posX = line.offsetLeft;

    if (minX < posX && posX < maxX) {
      vLines.push(line);
    } else {
      line.style.background = mainColor;
    }
  });

  // find vertical middle element that in the radius zone
  const vMiddleElement = Math.floor(vLines.length / 2);

  // add gradient for lines
  vLines.forEach((lineGrid: HTMLElement, index: number) => {
    const line = lineGrid;
    // get line height
    const blockHeight = line.offsetHeight;
    // find the center for gradient
    const yMainColorCenter = ((y / blockHeight) * 100).toFixed(2);
    let coef = 0;

    // find a coefficient that reduces the size of the gradient for the side lines if an odd amount
    if (index < vMiddleElement && vLines.length % 2 !== 0) {
      // coefficient for lines before middle line
      coef = vMiddleElement - index + 4;
    } else if (index > vMiddleElement && vLines.length % 2 !== 0) {
      // coefficient for lines after middle line
      coef = index - vMiddleElement + 4;
    }

    // find the start and end point of gradient color
    const yMainColorStart = +yMainColorCenter - 17 + coef;
    const yMainColorEnd = +yMainColorCenter + 17 - coef;

    // add gradient to the line
    line.style.background = `linear-gradient(${mainColor}, ${mainColor} ${yMainColorStart}%, ${gradientColor} ${yMainColorCenter}%, ${mainColor} ${yMainColorEnd}%)`;
  });

  // check which horizontal lines are in the radius zone and add them to array, the rest we update the background
  gradientBlocksH.forEach((lineGrid: HTMLElement) => {
    const line = lineGrid;
    // get line offset
    const posY = line.offsetTop;

    if (minY < posY && posY < maxY) {
      hLines.push(line);
    } else {
      line.style.background = mainColor;
    }
  });

  // find horizontal middle element that in the radius zone
  const hMiddleElement = Math.floor(hLines.length / 2);

  // add gradient for lines
  hLines.forEach((lineGrid: HTMLElement, index: number) => {
    const line = lineGrid;
    // get line width
    const blockWidth = line.offsetWidth;
    // find the center for gradient
    const xMainColorCenter = ((x / blockWidth) * 100).toFixed(2);
    let coef = 0;

    // find a coefficient that reduces the size of the gradient for the side lines if an odd amount
    if (index < hMiddleElement && hLines.length % 2 !== 0) {
      // coefficient for lines before middle line
      coef = hMiddleElement - index + 1;
    } else if (index > hMiddleElement && hLines.length % 2 !== 0) {
      // coefficient for lines after middle line
      coef = index - hMiddleElement + 1;
    }

    // find the start and end point of gradient color
    const xMainColorStart = +xMainColorCenter - 9 + coef;
    const xMainColorEnd = +xMainColorCenter + 9 - coef;

    // add gradient to the line
    line.style.background = `linear-gradient(90deg, ${mainColor}, ${mainColor} ${xMainColorStart}%, ${gradientColor} ${xMainColorCenter}%, ${mainColor} ${xMainColorEnd}%)`;
  });
};
