  const topics = [
    { id: 'notes-academic-writing',       title: 'Academic Writing Notes' },
    { id: 'notes-hardware-networking',     title: 'Computer Hardware & Networking Notes' },
    { id: 'notes-bioinfo',                 title: 'Bioinformatics Notes' },
    { id: 'notes-dbms',                    title: 'Database Management System Notes' },
    { id: 'notes-mcs',                     title: 'Mathematics for Computer Science Notes' },
    { id: 'notes-oopc',                    title: 'Object Oriented Programming Concepts 1' },
    { id: 'notes-oopc2',                   title: 'Object Oriented Programming Concepts 2' },
    { id: 'notes-oosad',                   title: 'Object Oriented System Analysis & Design' },
    { id: 'notes-react',                   title: 'React Native & NoSQL Notes' },
    { id: 'notes-research',                title: 'Research Methodology Notes' },
    { id: 'notes-radiot',                  title: 'Robotic Application Development & IoT Notes' },
    { id: 'notes-sad',                     title: 'Software Application Development Notes' },
    { id: 'notes-web1',                    title: 'Web Development (PHP & MySQL) Notes' }
  ];

  // 2. Grab template + destination container
  const tpl      = document.getElementById('notes-template');
  const container = document.querySelector('.courses-area'); 
  // (or another wrapper where you want them all)

  // 3. Build everything in one sweep
  topics.forEach(topic => {
    const clone = tpl.content.cloneNode(true);
    const section = clone.querySelector('.notes-section');
    const titleEl = clone.querySelector('.notes-title');
    const bodyEl  = clone.querySelector('.notes-body');

    titleEl.textContent     = topic.title;
    bodyEl.id               = topic.id;
    section.style.marginBottom = '1rem';  // replicate your <br />

    container.appendChild(clone);
  });

  // 4. Hook up accordion toggles
  document.body.querySelectorAll('.notes-section').forEach(section => {
    const hdr = section.querySelector('.notes-header');
    const bd  = section.querySelector('.notes-body');
    const btn = section.querySelector('.toggle-btn');

    hdr.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      bd.style.display = open ? 'none' : 'block';
    });
  });