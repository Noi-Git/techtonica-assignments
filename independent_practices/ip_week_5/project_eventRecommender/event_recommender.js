/* ===== User ==== */
class User {
    constructor(userName, userEmailAddress) {
        this._userName = userName;
        this._userEmailAddress = userEmailAddress;
        this._userEvent = [];
        console.log('constructor - this._userEvent', this._userEvent);
    }
    addUserEvent(eventName, eventDescription, eventAddress, eventDate) {
        const eventType = new Event(eventName, eventDescription, eventAddress, eventDate);
        this._userEvent.push(eventType);
        console.log('addUserEvent - ', this._userEvent)
    }
}

/* ===== Event ==== */
class Event {
    constructor(eventName, eventDescription, eventAddress, eventDate) {
        this._eventName = eventName;
        this._eventDescription = eventDescription;
        this._eventAddress = eventAddress;
        this._eventDate = eventDate;
        this._availableTicket = [];
    }
}

class EventRecommender {
    // constructor(events, users) {
    // All main properties should go here.
    // this.events = [];
    // this.users = [];
    // }

    addEvent(eventName, eventDescription, eventAddress, eventDate) {
    // Adds a new Event to the System
        let addEvent = new Event(eventName, eventDescription, eventAddress, eventDate);
        this.events.push(addEvent);
    }

    addUser(user) {
    // Adds a new User to the System
        // let addUser = new User(userName, userEmailAddress);
        // this.users.push(addUser);
        const userList = document.getElementById('user-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.userName}</td>
        <td>${user.userEmailAddress}</td>
        <td><a href="#" class"delete">Delete</a></td>
        `;
        userList.appendChild(row);
    }

/*
    saveUserEvent(user, events){
    //Allow users to save events to a personal Events array.
        this.users.saveUserEvent(events)
    }
    
    deleteUser(userToDelete) {
        // Deletes a User from the system
        this.users = this.users.filter(user => user.userName != userToDelete);
    }
    
    deleteEvent(eventToDelete) {
        // Deletes the Event from the system
        this.events = this.events.filter(event => event.deleteEvent != eventToDelete);
    }
    
    filter(eventName){
        for(let i = 0; i < this.events.length; i++) {
            if(this.events[i].eventName === eventName) {
                return this.events[i];
            }
        }
    }
          */
}

/*
// instantiate eventRecommender from Class EventRecommender
const eventRecommender = new EventRecommender();

// add users to object eventRecommender
eventRecommender.addUser("Noi", "noi.patsin@gmail.com");
eventRecommender.addUser("Someone", "someone@gmail.com");
console.log('eventRecommender after addUser - ', eventRecommender.users);
// add events to object eventRecommender
eventRecommender.addEvent("2th Street Block Party", "We're spicing up your summer the only way we know how, block party style!. This event is FREE to attend!", "Mission District, San Francisco, CA", "Sat, Aug 17, 12 PM");
eventRecommender.addEvent("Rock Paper Scissors Tournament & Pub Crawl", "Look for the pink Pub Crawl Meeting Point", "498 Broadway, San Francisco, CA", "Wed, Aug 14, 8:30 PM");
console.log('eventRecommender after addEvent - ', eventRecommender.events);
*/

document.getElementById('user-form').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value
    const useremail = document.getElementById('useremail').value
    // const userevent = document.getElementById('userevent').value

    const userList = new User(userName, userEmailAddress);

    // instantiate EventRecommender
    const eventRecommender = new EventRecommender();

    //validate
    if(title === '' || title === '') {
        eventRecommender.showAlert('Please fill in all fields', 'error')
    } else {
        eventRecommender.addUser(userName, userEmailAddress);

        eventRecommender.showAlert('User Added', 'success');
        eventRecommender.clearFields();
    }
    e.preventDefault();
})
