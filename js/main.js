
var quoteArray = [
    { quoter: `“Be yourself; everyone else is already taken.”`, author: '― Oscar Wilde' },
    { quoter: '“So many books, so little time.”', author: '― Frank Zappa' },
    { quoter: '“Be the change that you wish to see in the world.”', author: '― Mahatma Gandhi' },
    { quoter: `“Always forgive your enemies; nothing annoys them so much.”`, author: '― Elbert Hubbard' },
    { quoter: '“If you tell the truth, you dont have to remember anything.”', author: '― Frank Zappa' },
    { quoter: '“I have not failed. Ive just found 10,000 ways that wont work.”', author: '― Thomas A. Edison ' },
    { quoter: `“If you don't stand for something you will fall for anything.” `, author: '― Gordon A. Eadie' },
    { quoter: '“Outside of a dog, a book is mans best friend.Inside of a dog its too dark to read.”', author: '― Groucho Marx' },
    { quoter: '“I solemnly swear that I am up to no good.”', author: '― J.K. Rowling' },
    { quoter: `“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”`, author: '― Dr. Seuss' },
    { quoter: '“A day without sunshine is like, you know, night.”', author: '― Steve Martin' },
    { quoter: '“Never put off till tomorrow what may be done day after tomorrow just as well.”', author: '― Mark Twain' }
];

var check = [];

function randomQuote() {
    if (check.length == quoteArray.length) {
        check = [];
    }

    var quoteRandom;

    do {
        quoteRandom = Math.floor(Math.random() * quoteArray.length);
    }

    while (check.includes(quoteRandom))

    check.push(quoteRandom);
    console.log(check);

    document.getElementById('quote').innerHTML = quoteArray[quoteRandom].quoter;
    document.getElementById('author').innerHTML = quoteArray[quoteRandom].author;
}

