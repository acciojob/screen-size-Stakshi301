//your JS code here. If required.
 function updateWindowSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const sizeInfoElement = document.querySelector("#sizeInfo h1");
      sizeInfoElement.textContent = `Width: ${width} and Height: ${height}`;
    }
    updateWindowSize();

    window.addEventListener("resize", updateWindowSize);