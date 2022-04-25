window.addEventListener("load", function (_) {
  document.getElementById("submit").addEventListener("click", function (_){
    let textInput = document.getElementById("textInput");
    if (textInput.value != ''){
      let p = document.createElement("p");
      p.setAttribute("class", "render")
      p.setAttribute("style", "color: " + document.getElementById("colorInput").value + ';');
      document.getElementsByTagName("body")[0].appendChild(p);
      p.innerText = textInput.value;
      html2canvas(p, {
        onrendered: function (canvas) {
          let screenshot = canvas.toDataURL('image/png');
          document.getElementById('output').setAttribute('src', screenshot);
          p.remove();
        },
      });
    }
  });
});