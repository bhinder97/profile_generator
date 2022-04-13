const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.question('What is your name? ', (name) => {
    console.log(`Thank you for your valuable feedback: ${name}`);

    rl.question('Whats an activity you like doing? ', (activity) => {
      console.log(`Thank you for your valuable feedback: ${activity}`);

      rl.question('What do you listen to while doing that? ', (song) => {
        console.log(`Thank you for your valuable feedback: ${song}`);

        rl.question('Which meal is your favourite? ', (meal) => {
          console.log(`Thank you for your valuable feedback: ${meal}`);
  
          rl.question('Whats your favourite thing to eat for that meal? ', (food) => {
            console.log(`Thank you for your valuable feedback: ${food}`);
    
            rl.question('Which sport is your absolute favourite? ', (sport) => {
              console.log(`Thank you for your valuable feedback: ${sport}`);

              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
                console.log(`Thank you for your valuable feedback: ${power}`);
                console.log(`${name} loves listening to ${song} while ${activity}, devouring ${food} for ${meal}, prefers ${activity} over any other sport, and is amazing at ${power}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});


//rl.close();

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!