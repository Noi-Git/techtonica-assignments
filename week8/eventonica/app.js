const inquirer = require('inquirer');
//connection available to all
const connection = require('./connection');

const eventConnection = require('./eventfulAPI');

const eventfulKey = require("./keys.js").eventful;
const eventful = require('eventful-node');
const client = new eventful.Client(eventfulKey);

 const app = {};

 app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name:'action',
  }).then((res) => {
    const continueCallback = () => app.startQuestion(closeConnectionCallback);

    if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
    if (res.action === 'Create a new user') app.createNewUser(continueCallback);
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful(continueCallback);
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      closeConnectionCallback();
      return;
    }
  })
}

 app.completeSentence = (continueCallback) => {
  //YOUR WORK HERE
  console.log('Please write code for this function');
  const questions = [
    {
        message: "How do you feel?",
        type: "input",
        name: "favorite"
    }];

    inquirer.prompt(questions).then(answer => {
      console.log(`hi ${answer}`)
      let favoriteEvent = answer['favorite']
      console.log(favoriteEvent);
    });
  //End of your work
  continueCallback();
}

 app.createNewUser = (continueCallback) => {
  //YOUR WORK HERE
  console.log('Please write code for this function');
  
  const questions = [
    {
        message: "What's your first name?",
        type: "input",
        name: "firstName"
    }];

    inquirer.prompt(questions).then (answer => {
      console.log(`hi ${answer}`);
      // console.log(answer['firstName']);
      let nameNew = answer['firstName'];
      console.log(nameNew);

      connection.query('INSERT INTO users (name) VALUES ($1)', [nameNew], (error, results) => {
        if (error) {
          throw error;
        }
     console.log(error, results);
    })
    connection.end();
    continueCallback();
    });
    
 };





 app.searchEventful = (continueCallback) => {
  //YOUR WORK HERE
const questions = [
    {
        message: "What are you looking for?",
        type: "input",
        name: "keyword"
    }];
   console.log('Please write code for this function');

  //End of your work
  inquirer
    .prompt(questions)
    .then (answer => {

      client.searchEvents({
        keywords: answer.keyword,
        location: 'San Francisco',
        date: "Next Week"
      }, function(err, data){
        // console.log(data)
         if(err){
           return console.error(err);
         }
         let resultEvent = data.search.events.event[0];
         //console.log('Received ' + resultEvent.title + ' events');
         console.log('Event: listings:' + resultEvent.title);
        //  for ( let i =0 ; i < resultEvents.length; i++){
          //  console.log(resultEvents[0])
    //       console.log("===========================================================")
    //  console.log('title: ',resultEvent[0].title);
    //  console.log('start_time: ',resultEvent[0].start_time);
    //  console.log('venue_name: ',resultEvent[0].venue_name);
    //  console.log('venue_address: ',resultEvent[0].venue_address);

         
        //  continueCallback();

  inquirer
    .prompt({
      type: "list",
      name: "save",
      message: "Save, Yes or No",
      choices: [
        "Yes",
        "No"
      ]
    })

    .then(answer => {
      if(answer.save === "No") {
      continueCallback();
      return;
      } else if (answer.save === "Yes") {
        const {
          title,
          start_time,
          venue_name,
          venue_address
        } = resultEvent;

    connection.query(
      'INSERT INTO events (title, start_time, venue_name, venue_address) VALUES ($1, $2, $3, $4)', [title, start_time, venue_name, venue_address], (error, results) => {
        if (error) {
          throw error;
        }
      console.log(`We look forware to seeing you at ${title}`);
      }
    )
    // connection.end()

    }
  })

})
}
)
}; 

    

























 app.matchUserWithEvent = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.seeEventsOfOneUser = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 module.exports = app;