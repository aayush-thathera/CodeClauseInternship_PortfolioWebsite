document.addEventListener("DOMContentLoaded", () => {
  const eventForm = document.getElementById("eventForm");
  const eventList = document.getElementById("eventList");

  let events = JSON.parse(localStorage.getItem("events")) || [];
  function renderEvents() {
    eventList.innerHTML = "";

    if (events.length === 0) {
      eventList.innerHTML = "<p>No events available. Please add one.</p>";
      return;
    }

    events.forEach((event, index) => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <button class="register-btn" onclick="register(${index})">Register</button>
      `;
      eventList.appendChild(card);
    });
  }

  // Add event
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const location = document.getElementById("eventLocation").value;

    events.push({ name, date, location });
    localStorage.setItem("events", JSON.stringify(events));
    eventForm.reset();
    renderEvents();
  });

  // Simulate registration
  window.register = function(index) {
    const username = prompt("Enter your name to register:");
    if (username) {
      alert(`✅ Thank you, ${username}! You are now registered for "${events[index].name}".`);
    }
  };

  renderEvents();
});
