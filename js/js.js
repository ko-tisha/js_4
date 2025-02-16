document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;
  
    const limitedX = x % 100;
    const limitedY = y % 100;

    const coordinatesDiv = document.getElementById("coordinates");

    coordinatesDiv.style.color = x > 500 ? "#513DFE":"#A100A4";
    coordinatesDiv.textContent = `X: ${limitedX}, Y: ${limitedY}`;
  });