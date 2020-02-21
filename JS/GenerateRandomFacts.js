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

    let facts2 = [
      'Mountain Dew is mainly just orange juice.',
      'Brussels sprouts, broccoli, cabbage, cauliflower, and kohlrabi all come from the same plant!',
      'Pineapple juice can help tenderize meat',
      'Eating lollipops is just swallowing flavored saliva',
      'Almonds are a member of the peach family!',
      'Baby carrots are just regular carrots that have been shaved down to the bite-size pieces we see bagged in stores',
      'Ice cream sometimes contains a form of seaweed in it (as a thickening agent) called red algae',
      'Altitude can change taste',
      'The oldest evidence for soup is from 6,000 B.C. and calls for hippopotamus and sparrow meat',
      'Central Appalachia’s tooth decay problem is referred to as Mountain Dew mouth, due to the beverage’s popularity in the region.',
      'Ketchup was sold in the 1830’s as medicine.',
      'Dry swallowing one teaspoon of sugar can commonly cure hic-ups.',
      'In Kentucky, it is illegal to carry an ice cream cone in your back pocket',
      'The fear of cooking is known as Mageirocophobia and is a recognised phobia',
      'The tea bag was introduced in 1908 by Thomas Sullivan of New York.',
      'The tall chef’s hat is called a toque.',
      'Arachibutyrophobia is the fear of peanut butter sticking to the roof of the mouth.',
      'In South Africa, termites and ants are often roasted and eaten by the handful, like popcorn.',
      'Pearls melt in vinegar.',
      'Apples belong to the rose family, as do pears and plums.',
      'One of the most popular pizza toppings in Brazil is green peas.',
      'About 70% of olive oil being sold is not actually pure olive oil.'
    ]


  let facts3 = [
    'Real aged balsamic vinegar actually costs anywhere from $75 to $400 or more.',
    'Store bought 100% “real” orange juice is 100% artificially flavored.',
    'The winner of the 2013 Nathan’s Hot Dog Eating contest consumed 69 hot dogs in 10 minutes.',
    'The Dunkin’ Donuts in South Korea offer doughnut flavors such as Kimchi Croquette and Glazed Garlic.',
    'Ounce by ounce, Nutritious food costs up to 10 times more than junk food.',
    'Chicken contains 266% more fat than it did 40 years ago.',
    'There is a food substitute intended to supply all daily nutritional needs, known as “Soylent”.',
    'The ’57’ on the Heinz ketchup bottle represents the number of pickle types the company once had.',
    'The ancient Greeks chewed a gum-like substance called mastic that came from the bark of a tree.',
    'Honeybee workers must visit 2 million flowers to make one pound of honey',
    'The fear of vegetables is called Lachanophobia.',
    'If you boil beetroot in water, and then massage the water into your scalp each night, it works as an effective cure for dandruff.',
    'In the United States, lettuce is the second most popular fresh vegetable.',
    'Grape growing is the largest food industry in the world as there are more than 60 species and 8000 varieties of grapes.',
    'The average person eats eight pounds of grapes each year.',
    'There are more than 7,000 varieties of apples grown in the world.',
    'A cluster of bananas id formerly called a ‘hand’. Along that theme, a single banana is called a ‘finger’.',
    'Onion is Latin for ‘large pearl’.',
    'Humans are born craving sugar.',
    'Radishes are members of the same family as cabbages.'
  ]



  let randomFact = facts[Math.floor(Math.random() * facts.length)]
  let randomFact2 = facts[Math.floor(Math.random() * facts.length)]
  let randomFact3 = facts2[Math.floor(Math.random() * facts2.length)]
  let randomFact4 = facts2[Math.floor(Math.random() * facts2.length)]
  let randomFact5 = facts3[Math.floor(Math.random() * facts3.length)]



  let factParagraph = document.getElementById('fact-p');
  let factParagraph2 = document.getElementById('fact-p2');
  let factParagraph3 = document.getElementById('fact-p3');
  let factParagraph4 = document.getElementById('fact-p4');
  let factParagraph5 = document.getElementById('fact-p5');



  factParagraph.innerHTML = randomFact;
  factParagraph2.innerHTML = randomFact2;
  factParagraph3.innerHTML = randomFact3;
  factParagraph4.innerHTML = randomFact4;
  factParagraph5.innerHTML = randomFact5;


}

const button = document.getElementById('fact-button')
button.addEventListener("click", generateRandomMealFact)