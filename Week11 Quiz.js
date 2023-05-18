const svg = document.getElementById("svg-canvas");

window.addEventListener("resize", resizeSvg);

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
}

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
    
    for(let circle of svg.children){
const width = 950;
const height = 800;

const svg = document.getElementById('basesvg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);

function makeCircle(cx = null, cy = null, r = null, fill = null) {
  const newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  newCircle.setAttribute('cx', cx !== null ? cx : Math.random() * width);
  newCircle.setAttribute('cy', cy !== null ? cy : Math.random() * height);
  newCircle.setAttribute('r', r !== null ? r : Math.random() * (Math.min(width, height) / 2));
  newCircle.setAttribute('fill', fill !== null ? fill : `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);

  svg.appendChild(newCircle);
}

makeCircle();
makeCircle(100, 100, 50, 'red');
makeCircle(null, null, null, 'blue');
makeCircle();
}
}