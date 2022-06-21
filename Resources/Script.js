const intro = ['Your moon in Scorpio ', 'Your sun in Taurus ', 
'Your ascendant in Gemini ', 'The new cycle of the moon ', 
'Your seventh house in Leo ', 'Mercury retrograde ', ];

const secondSection = ['is creating some conflicts and difficulties with your partner; try having an open and hoest conversation about the elephant in the room.', 
'brings you new opportinuties at work. Your should wait for the right moment to ask for a raise.', 
'is creating some internal confussion as to what to do next.', 
'in conjunstion with Mars in Pices, signals death and ribirth.', 
'is giving you a clear message that you should stay away from people of Aquarious.', 
'could bring some turbulances to your finances in the forseable future.'];

const thirdSection = [' Keep your eyes oppen as Neptune in Sagitarious brings the wisdom needed to navigate the events ahead',
' Beware of foes posing as friends who seek to undermine you', 
' It is imperative that you stay open to what the wind brings to your door, as there might be some unexpected events unfolding', 
' Trust that the in everything that you haver learned thus far and the tools you have aquired', 
' Be mindful of your health and your energy', 
' Remember that it is always darkest before dawn'];

const final = [ ' and dont forget that there are always those who you can reach out to for help in times of need.', 
' and try to keep a positive outlook on things as that is already the battle half won.', 
' and be grateful for what you DO have as things could always be much worse.', 
' and make and effort to help others as much as you can for life will always return it tenfold.'];

const randomArray = (array)=>{
    let randomIndex = Math.floor(Math.random()* array.length);
    return array[randomIndex];
}

let mixedMessage = `The message of the stars for you during this week is: ${randomArray(intro)}${randomArray(secondSection)}${randomArray(thirdSection)}${randomArray(final)}`;

console.log(mixedMessage);
