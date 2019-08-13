/* ===== User ==== */
class User {
    constructor(userName, userEmailAddress) {
        this._userName = userName;
        this._userEmailAddress = userEmailAddress;
        this._userEvent = [];
    }
    addUserEvent(saveUserEvent) {
        const eventType = new eventRecommender(saveUserEvent);
        this._userEvent.push(eventType);
    }
}
const user_Noi = new User("Noi", "noi.patsin@gmail.com");
const user_someone = new User("Someone", "someone@gmail.com");

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
const event_1 = new Event("2th Street Block Party", "We're spicing up your summer the only way we know how, block party style!. This event is FREE to attend!", "Mission District, San Francisco, CA", "Sat, Aug 17, 12 PM");
const event_2 = new Event("Rock Paper Scissors Tournament & Pub Crawl", "Look for the pink Pub Crawl Meeting Point", "498 Broadway, San Francisco, CA", "Wed, Aug 14, 8:30 PM ");


class EventRecommender {
    constructor(events, users) {
    // All main properties should go here.
    this.events = [];
    this.users = [];
    }

    addEvent(eventName, eventDescription, eventAddress, eventDate) {
    // Adds a new Event to the System
        let addEvent = new Event(eventName, eventDescription, eventAddress, eventDate);
        this.events.push(addEvent);
    }

    addUser(userName, userEmailAddress) {
    // Adds a new User to the System
        let addUser = new User(userName, userEmailAddress);
        this.users.push(addUser);
    }

    saveUserEvent(){
    //Allow users to save events to a personal Events array.
    }

    deleteUser() {
    // Deletes a User from the system
    }
   
    deleteEvent() {
    // Deletes the Event from the system
    }

    filter(){
    }
}

