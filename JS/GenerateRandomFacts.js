function generateRandomMealFact () {
    let facts = [
        'Pringles once filed a lawsuit to prove that they weren’t potato chips',
        'Potatoes are 80% water',
        'Scientists can make diamonds out of peanut butter',
        'Humans share 60% of our DNA with bananas',
        'Green, yellow, and red bell peppers are not actually the same vegetable',
        'One burger patty can contain hundreds of different cows',
        'An 11-year-old invented the Popsicle by accident',
        'Farm-raised salmon is naturally white and then dyed pink',
        'Potatoes can absorb and reflect Wi-fi signals',
        'The red food dye used in Skittles is made from boiled beetles',
        'Raw oysters are still alive when you eat them',
        'Every banana you eat is a clone',
        'Carrots were originally purple',
        'Grapes will explode if you put them in the microwave',
        'The most expensive pizza in the world costs $12,000 dollars',
        'White chocolate isn’t chocolate',
        'Crackers are worse for your teeth than sugar',
        'Russia took a long time to classify beer as being alcoholic',
        'One in four hazelnuts end up in Nutella',
        'You can find peanuts in dynamite',
        'Expiration dates on bottled water have nothing to do with the water',
        'Bird saliva is a delicacy in China',
        'Food is allowed to contain some amount of insects',
        'Food tastes different when you’re flying',
        'Tonic water glows in the dark',
        'In an emergency, coconut water can be used for blood plasma',
        'Eskimos use refrigerators to stop their food from freezing',
        'There are more Indian restaurants in London than in Mumbai or Delhi',
        'It’s impossible to cook an egg on a sidewalk',
        'Breakfast is NOT the most important meal of the day'
    ]

  let randomFact = facts[Math.floor(Math.random() * facts.length)]
  let randomFact2 = facts[Math.floor(Math.random() * facts.length)]
  let randomFact3 = facts[Math.floor(Math.random() * facts.length)]

  let factParagraph = document.getElementById('fact-p');
  let factParagraph2 = document.getElementById('fact-p2');
  let factParagraph3 = document.getElementById('fact-p3');


  factParagraph.innerHTML = randomFact;
  factParagraph2.innerHTML = randomFact2;
  factParagraph3.innerHTML = randomFact3;
}

const button = document.getElementById('fact-button')
button.addEventListener("click", generateRandomMealFact)