const quotes = {
  'Bessie A. Stanley': 'He has achieved success who has lived well, laughed often, and loved much.',
  'Johnny Carson': 'Nancy Reagan fell down and broke her hair.',
  'Fran Lebowitz': 'Humility is no substitute for a good personality.',
  'Albert Einstein': 'If you are out to describe the truth, leave elegance to the tailor.',
  'Unknown': 'Just once, I wish we would encounter an alien menace that wasn"t immune to bullets.',
};

const btnGenerateEl = document.getElementById('btnGenerate');
const quotesEl = document.getElementById('quotes');
const authorEl = document.getElementById('author');

function generateQuotes() {
  // let randomIndex = 0;
  // let entriesObject = Object.entries(quotes);
  // for (let i = 0; i < entriesObject.length; i++) {
  //   randomIndex = Math.floor(Math.random() * i);
  // }
  // let quote = entriesObject[randomIndex][1];
  // let author = entriesObject[randomIndex][0];


  let authors = Object.keys(quotes)
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];

  quotesEl.textContent = quote;
  authorEl.textContent = author;
};
btnGenerateEl.addEventListener('click', generateQuotes);