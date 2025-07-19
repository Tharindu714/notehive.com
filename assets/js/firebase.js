import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

console.log("⚙️ Module script loaded");

const firebaseConfig = {
  apiKey: "AIzaSyBK91Ctrz9IiRas9t30NnwI_IBQCoZLFPs",
  authDomain: "note-web-tharindu.firebaseapp.com",
  projectId: "note-web-tharindu",
  storageBucket: "note-web-tharindu.appspot.com",
  messagingSenderId: "1019157701275",
  appId: "1:1019157701275:web:db0c8d4cc6e5b0758cdc3e",
  measurementId: "G-GHVN3R4C7Z",
};

// 1) Initialize Firebase
console.log("Initializing Firebase with config:", firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("✅ Firebase initialized, Firestore instance:", db);

// 2) Check jQuery
console.log(
  "jQuery version:",
  typeof $ === "function" ? $.fn.jquery : "❌ jQuery not loaded"
);

// Helper: Highlight selected stars
/**
 * Visually fills stars up to the average.
 * @param {jQuery} $card — jQuery‑wrapped card element
 * @param {number} avg — average rating (e.g. 3.5)
 */
function highlightStars($card, avg) {
  $card.find(".star").each(function () {
    const val = $(this).data("value");
    $(this).toggleClass("filled", val <= avg);
  });
}

/**
 * Listens in real‑time to Firestore ratings for a note
 * and updates the UI.
 * @param {string} noteId — Firestore doc ID for this note
 * @param {HTMLElement} cardEl — DOM element of the card
 */
function listenForRatings(noteId, cardEl) {
  const $card = $(cardEl); // wrap DOM into jQuery
  const ratingsRef = collection(db, "ratings", noteId, "entries");

  onSnapshot(
    ratingsRef,
    (snapshot) => {
      let sum = 0;
      snapshot.forEach((docSnap) => (sum += docSnap.data().value));
      const count = snapshot.size;
      const rawAvg = count ? sum / count : 0;
      const avg = Math.round(rawAvg * 2) / 2;

      // Update UI
      $card.find(".avg-rating").text(`(${avg.toFixed(1)})`);
      $card.find(".count-rating").text(count);
      highlightStars($card, avg);
    },
    (err) => {
      console.error(`onSnapshot error for ${noteId}:`, err);
    }
  );
}

/**
 * Attaches click handlers to the stars in a card
 * so that clicking sends a new rating to Firestore.
 * @param {HTMLElement} cardEl — DOM element of the card
 * @param {string} noteId — Firestore doc ID for this note
 */
function attachStarRating(cardEl, noteId) {
  const $card = $(cardEl); // wrap DOM into jQuery

  $card.on("click", ".star", async function () {
    const val = $(this).data("value");
    try {
      const docRef = await addDoc(
        collection(db, "ratings", noteId, "entries"),
        {
          value: val,
          timestamp: serverTimestamp(),
        }
      );
      console.log(`⭐️ Rating ${val} added for ${noteId} (ID: ${docRef.id})`);
    } catch (e) {
      console.error("Error writing rating:", e);
    }
  });
}

// Render notes dynamically
// Load cards under a specific subject container
async function loadNotesBySubject(subjectName, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`❌ Container not found: ${containerId}`);
    return;
  }

  const q = query(collection(db, "notes"), where("subject", "==", subjectName));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    container.innerHTML = `<p>No notes available for ${subjectName}</p>`;
    return;
  }

  const row = document.createElement("div");
  row.className = "row";
  container.appendChild(row);

  snapshot.forEach((docSnap) => {
    const note = docSnap.data();
    const noteId = docSnap.id;

    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 mb-4";

    col.innerHTML = `
        <div class="properties__card" data-note-id="${noteId}">
          <div class="properties__img overlay1">
            <a href="#"><img src="${note.imageUrl}" alt="Lecture Image"/></a>
          </div>
          <div class="properties__caption">
            <p>${note.subject}</p>
            <h3><a href="#">${note.title}</a></h3>
            <p>${note.description}</p>
            <div class="properties__footer d-flex justify-content-between align-items-center">
              <div class="restaurant-name">
                <div class="rating">
                  ${[1, 2, 3, 4, 5]
                    .map(
                      (n) =>
                        `<i class="fas fa-star star" data-value="${n}"></i>`
                    )
                    .join("")}
                </div>
                <p><span class="avg-rating">(0.0)</span> based on <span class="count-rating">0</span> ratings</p>
              </div>
                <div class="price"><span>⮜ Rate Here</span></div>
            </div>
            <a href="${
              note.downloadLink
            }" class="border-btn border-btn2">Download PDF</a>
          </div>
        </div>`;

    row.appendChild(col);

    const cardEl = col.querySelector(".properties__card");
    attachStarRating(cardEl, noteId);
    listenForRatings(noteId, cardEl);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  //Diploma subjects
  loadNotesBySubject("Academic Writing", "notes-academic-writing");
  loadNotesBySubject(
    "Computer Hardware & Networking",
    "notes-hardware-networking"
  );
  loadNotesBySubject("BioInformatics", "notes-bioinfo");
  loadNotesBySubject("Database Management System", "notes-dbms");
  loadNotesBySubject("Mathematics for Computer Science", "notes-mcs");
  loadNotesBySubject("OOP Concept 1", "notes-oopc");
  loadNotesBySubject("OOP Concept 2", "notes-oopc2");
  loadNotesBySubject("Object Oriented System Analysis & Design", "notes-oosad");
  loadNotesBySubject("React Native", "notes-react");
  loadNotesBySubject("Research Methodology", "notes-research");
  loadNotesBySubject("Robotic Application Development & IoT", "notes-radiot");
  loadNotesBySubject("Software Application Development", "notes-sad");
  loadNotesBySubject("Web Development 1", "notes-web1");
  // Higher Diploma subjects
  loadNotesBySubject(
    "Electronics for Software Engineering",
    "notes-electronics-se"
  );
  loadNotesBySubject("Mathematics for Computer Science 2", "notes-mcs2");
  loadNotesBySubject(
    "Object Oriented Design Patterns 1",
    "notes-design-patterns1"
  );
  loadNotesBySubject("Project Management", "notes-project-management");
  loadNotesBySubject("Quality Assurance", "notes-quality-assurance");
  loadNotesBySubject("Web Component Development 1", "notes-web-component-dev1");
  loadNotesBySubject("Web Component Development 2", "notes-web-component-dev2");
  loadNotesBySubject("Web Programming 2", "notes-web-programming2");
  // Graduate Diploma subjects
  loadNotesBySubject("Android Application Development", "notes-android");
  loadNotesBySubject("Business Component Development 1", "notes-bcd1");
  loadNotesBySubject("Business Component Development 2", "notes-bcd2");
  loadNotesBySubject("Cyber Law", "notes-cyber-law");
  // You can call loadNotesBySubject() more times for other subjects
});

import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Open dialog
document.getElementById("open-note-dialog").addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("noteModal"));
  modal.show();
});

// Handle form submission
document.getElementById("noteForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const subject = document.getElementById("subject").value.trim();
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const imageUrl = document.getElementById("imageUrl").value.trim();
  const downloadLink = document.getElementById("downloadLink").value.trim();

  if (!subject || !title || !description || !imageUrl || !downloadLink) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const newNoteRef = doc(collection(db, "notes"));
    await setDoc(newNoteRef, {
      subject,
      title,
      description,
      imageUrl,
      downloadLink,
    });

    alert("✅ Note uploaded successfully!");
    e.target.reset();

    // Optional: Reload the UI if needed
    // location.reload();
  } catch (err) {
    console.error("Error uploading note:", err);
    alert("❌ Failed to upload note.");
  }

  bootstrap.Modal.getInstance(document.getElementById("noteModal")).hide();
});
