// 1a.
const mcuShows = ["Loki", "What If...?"];
// 1b.
const starWarsShows = ["The Mandalorian", "The Bad Batch"];
// 1c.
const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    "Monsters At Work"];
// 1d.
console.log(disneyPlusShows);
// 2a.
const netflixMovies = {
    action: "Extraction",
    crime: "The Irishman"
};
// 2b.
const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night In Miami"
};
// 2c.
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: "Hamilton"
};
// 2d.
console.log(streamingMovies);
// 3a.
const disneyJunior = [
    "Mickey Mouse Clubhouse",
    "Spidey And His Amazing Friends"
];
// 3b.
const [mickey, spidey] = disneyJunior;
// 3c.
console.log(mickey, spidey);
// 4a.
const avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};
// 4b.
const {warMachine, theHulk} = avengers;
// 4c.
console.log(warMachine, theHulk);
// 4d.
const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironMan: `Tony Stark`
};
// 4e.
const {blackWidow: nat, ...other} = moreAvengers;
// 4f.
console.log(nat, other);

// BONUS

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
};

// 5a.
const all = [
    ...bonus["first"],
    ...bonus["second"],
    ...bonus["third"]
];

// ! OR

// const all = [
//     ...bonus.first,
//     ...bonus.second,
//     ...bonus.third
// ];

// ! Destructuring the ALL array ! \\
// const [one, two, three, four, five, six, seven, eight, nine] = all;

// ! Destructuring the BONUS object ! \\

const {first, second, third} = bonus;
const [one, two, three] = first;
const [four, five, six] = second;
const [seven, eight, nine] = third;

