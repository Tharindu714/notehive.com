document.addEventListener("DOMContentLoaded", () => {
  // 1. Map each container ID to its list of topics
  const topicsConfig = {
    "diploma-container": [
      { id: "notes-academic-writing", title: "Academic Writing Notes" },
      {
        id: "notes-hardware-networking",
        title: "Computer Hardware & Networking Notes",
      },
      { id: "notes-bioinfo", title: "Bioinformatics & Guest Lectures Notes" },
      { id: "notes-dbms", title: "Database Management System Notes" },
      { id: "notes-mcs", title: "Mathematics for Computer Science Notes" },
      { id: "notes-oopc", title: "Object Oriented Programming Concepts 1" },
      { id: "notes-oopc2", title: "Object Oriented Programming Concepts 2" },
      { id: "notes-oosad", title: "Object Oriented System Analysis & Design" },
      { id: "notes-react", title: "React Native & NoSQL Notes" },
      { id: "notes-research", title: "Research Methodology Notes" },
      {
        id: "notes-radiot",
        title: "Robotic Application Development & IoT Notes",
      },
      { id: "notes-sad", title: "Software Application Development Notes" },
      { id: "notes-web1", title: "Web Development (PHP & MySQL) Notes" },
    ],
    // Higher Diploma topics
    "higher-diploma-container": [
      {
        id: "notes-electronics-se",
        title: "Electronics for Software Engineering",
      },
      { id: "notes-mcs2", title: "Mathematics for Computer Science 2" },
      {
        id: "notes-design-patterns1",
        title: "Object Oriented Design Patterns 1",
      },
      { id: "notes-project-management", title: "Project Management" },
      { id: "notes-quality-assurance", title: "Quality Assurance" },
      { id: "notes-web-component-dev1", title: "Web Component Development 1" },
      { id: "notes-web-component-dev2", title: "Web Component Development 2" },
      { id: "notes-web-programming2", title: "Web Programming 2" },
    ],
    // Higher Diploma topics
    "graduate-diploma-container": [
      {
        id: "notes-android",
        title: "Android Application Development",
      },
      { id: "notes-bcd1", title: "Business Component Development 1" },
      { id: "notes-bcd2", title: "Business Component Development 2" },
      { id: "notes-cyber-law", title: "Cyber Law" },
      {
        id: "notes-design-patterns2",
        title: "Object Oriented Design Patterns 2",
      },
      { id: "notes-dsa", title: "Data Structures & Algorithms" },
    ],
  };

  // 2. Grab the template once
  const tpl = document.getElementById("notes-template").content;

  // 3. Populate each container
  Object.entries(topicsConfig).forEach(([containerId, topics]) => {
    const container = document.getElementById(containerId);
    if (!container) return; // skip if missing
    topics.forEach((topic) => {
      const clone = tpl.cloneNode(true);
      const section = clone.querySelector(".notes-section");
      clone.querySelector(".notes-title").textContent = topic.title;
      clone.querySelector(".notes-body").id = topic.id;
      section.style.marginBottom = "1rem";
      container.appendChild(clone);
    });
  });

  // 4. Hook up toggles for all sections on the page
  document.querySelectorAll(".notes-section").forEach((section) => {
    const hdr = section.querySelector(".notes-header");
    const bd = section.querySelector(".notes-body");
    const btn = section.querySelector(".toggle-btn");
    hdr.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      bd.style.display = isOpen ? "none" : "block";
    });
  });
});
