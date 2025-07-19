fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
  });

fetch("slider-area.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("slider-placeholder").innerHTML = data;
  });

fetch("service.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("service-placeholder").innerHTML = data;
  });
