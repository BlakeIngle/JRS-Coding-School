var numArr = []
for (let i = 0; i < 1000; i++) {
    let n = Math.ceil(Math.random() * 100) - 50;
    numArr.push(n);
}
var stringArr = [
    'pollution',
    'narrow',
    'lowly',
    'thirsty',
    'abaft',
    'eminent',
    'cast',
    'throne',
    'tasteful',
    'lethal',
    'suggest',
    'condemned',
    'spurious',
    'vivacious',
    'reaction',
    'slim',
    'aboriginal',
    'subtract',
    'suppose',
    'tumble',
    'shop',
    'deadpan',
    'seashore',
    'serious',
    'complete',
    'important',
    'suit',
    'jumpy',
    'sun',
    'lie',
    'succeed',
    'unfasten',
    'disagreeable',
    'wire',
    'lush',
    'shake',
    'nest',
    'sky',
    'agreeable',
    'detect',
    'ready',
    'pipe',
    'vase',
    'wonderful',
    'owe',
    'direction',
    'frightening',
    'quiver',
    'burly',
    'resonant',
    'star',
    'stretch',
    'optimal',
    'call',
    'cake',
    'painful',
    'free',
    'employ',
    'sniff',
    'magenta',
    'current',
    'boundless',
    'stem',
    'military',
    'offbeat',
    'evanescent',
    'unpack',
    'stupendous',
    'safe',
    'cheerful',
    'windy',
    'count',
    'mysterious',
    'homeless',
    'exercise',
    'bloody',
    'smiling',
    'bright',
    'annoyed',
    'festive',
    'unequaled',
    'colossal',
    'toy',
    'loutish',
    'ambiguous',
    'abject',
    'itchy',
    'tricky',
    'stimulating',
    'powerful',
    'stay',
    'savory',
    'jealous',
    'equal',
    'cycle',
    'rustic',
    'side',
    'spiffy',
    'cheap',
    'furniture',
]
var movies = [
    {
        title: "Django: Unchained",
        director: "Quentin Tarantino",
        releaseYear: 2012
    },
    {
        title: "The Boondock Saints",
        director: "Troy Duffy",
        releaseYear: 1999
    },
    {
        title: "Blade Runner 2049",
        director: "Dennis Villeneuve",
        releaseYear: 2017
    },
    {
        title: "Princess Mononoke",
        director: "Hayao Miyazaki",
        releaseYear: 1997
    },
];

var filteredNums;
var filteredStrings;
var filteredMovies;

var directors;
var titles;

////////////////////////////////
//   YOUR CODE STARTS HERE    //
////////////////////////////////
// use the higher-order Array.filter function
// to filter the contents of three arrays

// filter the numbers so that the filteredNums array
//  only contains positive, even numbers
filteredNums = numArr.filter((n) => {
    return n % 2 == 0 && n > 0;
})

// filter the strings so that the filteredStrings array
//  only contains words that start or end with the letter s
filteredStrings = stringArr.filter((word) => {
    let firstLetter = word.charAt(0);
    let lastLetter = word.charAt(word.length - 1);

    return firstLetter === 's' || lastLetter === 's';
});

// filter the movies so that the filteredMovies array
//  only contains movies that released 
//  during or after the year 2000  
filteredMovies = movies.filter((movie) => {
    return movie.releaseYear >= 2000;
});

// map the movies array into an array of movie titles 
//  (where the title is just the string, not an object)
titles = movies.map((movie) => {
    return movie.title;
});

// map the movies array into an array of directors' names
//  (where the names are just the string, not an object)
directors = movies.map((movie) => {
    return movie.director;
});

// make this array an array of movie titles (strings) of
//  only movies that released in or after the year 2000
var movies = [
    {
        title: "Django: Unchained",
        director: "Quentin Tarantino",
        releaseYear: 2012
    },
    {
        title: "The Boondock Saints",
        director: "Troy Duffy",
        releaseYear: 1999
    },
    {
        title: "Blade Runner 2049",
        director: "Dennis Villeneuve",
        releaseYear: 2017
    },
    {
        title: "Princess Mononoke",
        director: "Hayao Miyazaki",
        releaseYear: 1997
    },
];

filteredMovies = movies.filter((movie) => {
    return movie.releaseYear >= 2000;
});

var newerMovieTitles = filteredMovies.map((movie) => {
    return movie.title
});

var newMoviesThatStartWithD = newerMovieTitles.filter(title => title.charAt(0) == 'D')
/**
 * Expected output:
 * [
 *  "Django: Unchained",
 *  "The Boondock Saints",
 *  ...
 * ]
 */

////////////////////////////////
//    YOUR CODE ENDS HERE     //
////////////////////////////////

console.log(filteredNums)
console.log(filteredStrings)
console.log(filteredMovies)

console.log(titles)
console.log(directors)

console.log(newerMovieTitles);