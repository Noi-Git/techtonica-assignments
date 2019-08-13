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

// console.log('addUserEvent - ', this._userEvent)
// const user_noi = new User("Noi", "noi.patsin@gmail.com");
// const user_someone = new User("Someone", "someone@gmail.com");

// user_noi.addUserEvent("2th Street Block Party", "We're spicing up your summer the only way we know how, block party style!. This event is FREE to attend!", "Mission District, San Francisco, CA", "Sat, Aug 17, 12 PM");
// user_someone.addUserEvent("Rock Paper Scissors Tournament & Pub Crawl", "Look for the pink Pub Crawl Meeting Point", "498 Broadway, San Francisco, CA", "Wed, Aug 14, 8:30 PM");

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

// const event_1 = new Event("2th Street Block Party", "We're spicing up your summer the only way we know how, block party style!. This event is FREE to attend!", "Mission District, San Francisco, CA", "Sat, Aug 17, 12 PM");
// const event_2 = new Event("Rock Paper Scissors Tournament & Pub Crawl", "Look for the pink Pub Crawl Meeting Point", "498 Broadway, San Francisco, CA", "Wed, Aug 14, 8:30 PM ");


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

    // saveUserEvent(user, events){
    // //Allow users to save events to a personal Events array.
    //     this.users.saveUserEvent(events)
    // }

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
}

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
