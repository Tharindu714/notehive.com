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
    document.addEventListener("click", (e) => {
      // Only trigger when the hero button is clicked
      if (!e.target.closest(".hero-btn")) return;

      // 1) Create swarm container
      const swarm = document.createElement("div");
      swarm.className = "bee-swarm";

      // 2) Spawn N bees with random start/end Y positions
      const beeCount = 20;
      for (let i = 0; i < beeCount; i++) {
        const bee = document.createElement("div");
        bee.className = "bee";
        // random vertical start/end
        const startY = Math.random() * window.innerHeight + "px";
        const endY = Math.random() * window.innerHeight + "px";
        bee.style.setProperty("--startY", startY);
        bee.style.setProperty("--endY", endY);
        // randomize speed/delay
        const duration = 4 + Math.random() * 4; // 3–5s
        const delay = Math.random() * 0.5; // up to 0.5s
        bee.style.animationDuration = duration + "s";
        bee.style.animationDelay = delay + "s";
        swarm.appendChild(bee);
      }

      document.body.appendChild(swarm);

      // 3) Play the bee‑swarm sound
      const audio = new Audio("assets/img/bee.mp3");
      audio.play();

      // 4) Remove swarm & stop sound after 5s
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        swarm.remove();
      }, 8000);
    });
  });

fetch("service.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("service-placeholder").innerHTML = data;
  });
