console.log("Quotes");
  function quotes() {
  /*assign quotes to an array element and then prompt the user for a number, use that number to run a 
  function that returns an assigned quote for that 'day', display that quote to the user*/
  let quote0 =
  "I was very much aiming to go into movies eventually, like a lot of 'SNL' people. But, \
  soon after I arrived, all these really good actors started, like Fred Armisen, Bill Hader, Jason Sudeikis \
  and Andy Samberg, and I thought, 'If I were casting a movie, I would put all of them in it over me.'";
  let quote1 =
  "People say, 'Oh, you're doing the job of journalists.' I think it's very important \
  to note that we can't do our job without journalists. Journalists can do their job without late-night \
  comedians. They'd be just fine without us. But we, of course, use their work every day to build our pieces.";
  let quote2 =
  "We made a choice not to go back to wearing suits, mostly because the show’s on at 12:30 \
  (at night) and I don’t think anybody who’s watching is wearing a (f-ing) suit. If people were wearing \
  suits in their home at 12:30, I would put my suit back on.";
  let quote3 =
  "Sal Gentile, who writes 'A Closer Look,' made a really good observation about what \
  happened to our show, which is we used to be a sane show for sane people in a crazy world. And then we \
  became crazy people.";
  let quote4 =
  "And I guess the idea was that it was this... you know, the kids would just be terrified. He had a piano. \
  The keys were made from the bones of his victims. And it would just, kids would be terrified and then they would \
  wake up and they'd be super upset if they had seen Mac Tonight and then the only way to get them to calm down was \
  to go to McDonald's.";
  let quote5 = "My parents introduced me to 'SNL,' Monty Python, and Richard Pryor probably way earlier \
  than they had any right to.";

  const quotes = [quote0, quote1, quote2, quote3, quote4, quote5]; //quote array

  var num = prompt("Enter your favorite number for the Seth quote of the day");
  var result = num % 5;
  var quotetoday = quotes[result];
  document.write('<p>"' + quotetoday + '"<br>&emsp; - Seth Meyers</p');
  }