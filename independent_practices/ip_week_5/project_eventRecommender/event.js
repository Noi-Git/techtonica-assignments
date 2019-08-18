/* ===== Event ==== */
class Event {
  constructor(eventName, eventDescription, eventPrice, eventDate) {
    this.eventName = eventName;
    this.eventDescription = eventDescription;
    this.eventPrice = eventPrice;
    this.eventDate = eventDate;
  }
}

class UI {
  addEventToList(event) {
    const eventList = document.getElementById("event-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${event.eventName}</td>
        <td>${event.eventDate}</td>
        <td>${event.eventPrice}</td>
        <td>${event.eventDescription}</td>
        <td><a href="#" class="delete">Delete</a></td>
        `;
    eventList.appendChild(row);
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".container");
    // Get form
    const form = document.querySelector("#event-form");
    // Insert alert
    container.insertBefore(div, form);

    // Disappear after 3 seconds
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  deleteEvent(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    // clear event field
    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventPrice").value = "";
    document.getElementById("eventDescription").value = "";
  }
}

/* ========= Evnet Listeners Event ========= */
document.getElementById("event-form").addEventListener("submit", function(e) {
  const eventName = document.getElementById("eventName").value;
  const eventDate = document.getElementById("eventDate").value;
  const eventPrice = document.getElementById("eventPrice").value;
  const eventDescription = document.getElementById("eventDescription").value;

  // instantiate a book
  const event = new Event(eventName, eventDate, eventPrice, eventDescription);
  const ui = new UI();

  // Validate
  if (
    eventName === "" ||
    eventDate === "" ||
    eventPrice === "" ||
    eventDescription === ""
  ) {
    // alert('Failed')
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addEventToList(event);

    // Show success
    ui.showAlert("Event Added!", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// delete event
document.getElementById("event-list").addEventListener("click", function(e) {
  // console.log(123);
  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteEvent(e.target);

  // Show message
  ui.showAlert("Event Removed!", "error");

  e.preventDefault();
});
