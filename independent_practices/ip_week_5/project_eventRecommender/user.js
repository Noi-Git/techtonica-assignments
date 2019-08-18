/* ===== User ==== */
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UI {
  addUserToList(user) {
    const userList = document.getElementById("user-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><a href="#" class="delete">Delete</a></td>
        `;
    userList.appendChild(row);
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
    const form = document.querySelector("#user-form");
    // Insert alert
    container.insertBefore(div, form);

    // Disappear after 3 seconds
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  deleteUser(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    // clear user field
    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
  }
}

/* ========= Evnet Listeners User ========= */
document.getElementById("user-form").addEventListener("submit", function(e) {
  const name = document.getElementById("username").value;
  const email = document.getElementById("useremail").value;

  // instantiate a book
  const user = new User(name, email);
  const ui = new UI();

  // Validate
  if (name === "" || email === "") {
    // alert('Failed')
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addUserToList(user);

    // Show success
    ui.showAlert("User Added!", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

/* ===== Event Listener for delete ====== */
document.getElementById("user-list").addEventListener("click", function(e) {
  // console.log(123);
  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteUser(e.target);

  // Show message
  ui.showAlert("User Removed!", "error");

  e.preventDefault();
});
