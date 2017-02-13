//const Faker = require('Faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const faker = require('faker');
const s = require('underscore.string')

const recordCount = process.argv[2];
let writer = csvWriter({
    headers: [
        "Interviewers.Name",
        "Agency",
        "Date",
        "Time",
        "Location",
        "Best.Language",
        "First.Name",
        "Last.Name",
        "Nickname",
        "Social.Security.Number",
        "How.Old.Are.You",
        "Whats.Your.DOB",
        "Has.Consented.to.Participate",
        "General.1",
        "Housing.1",
        "Housing.2",
        "Risks.1",
        "Risks.2",
        "Risks.3",
        "Risks.4",
        "Risks.5",
        "Risks.6",
        "Risks.7",
        "Risks.8",
        "Risks.9",
        "Risks.10",
        "Risks.11",
        "Social.1",
        "Social.2",
        "Social.3",
        "Social.4",
        "Social.5",
        "Social.6",
        "Social.7",
        "Wellness.1",
        "Wellness.2",
        "Wellness.3",
        "Wellness.4",
        "Wellness.5",
        "Wellness.6",
        "Wellness.7",
        "Wellness.8",
        "Wellness.9",
        "Wellness.10",
        "Wellness.11",
        "Wellness.12",
        "Wellness.13",
        "Wellness.14",
        "Wellness.15",
        "Wellness.16",
        "Wellness.17",
        "Wellness.18",
        "Wellness.19",
        "Wellness.20",
        "Wellness.21",
        "Wellness.22",
        "Wellness.23",
        "Wellness.24",
        "Wellness.25",
        "Wellness.26",
        "Wellness.27",
        "Wellness.28",
        "Wellness.29",
        "Wellness.30"
    ]
})

writer.pipe(fs.createWriteStream('VISPDATE-test-data.csv'))
for (let i = 1; i <= recordCount; i++) {
    writer.write([
        faker.fake("{{name.firstName}} {{name.lastName}}, {{name.suffix}}"),
        faker.fake("{{company.companyName}}"),
        generateDate(),
        generateTime(),
        faker.fake("{{address.city}}, {{address.stateAbbr}}"),
        pickRandomArrayElement(["English", "Spanish", "Mandarin", "Hindi", "Urdu", "Arabic", "Portuguese", "Bengali", "Russion", "Japanese", "Punjabi"]),
        faker.fake("{{name.firstName}}"),
        faker.fake("{{name.lastName}}"),
        faker.fake("{{random.word}}"),
        generateSSN(),
        Math.floor(Math.random() * 100),
        generateDate(),
        generateWeightedBoolean(0.9),
        //Housing
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        //Risks
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        pickRandomArrayElement(["Shelter", "Street, Sidewalk, or Doorway", "Car, Van or RV", "Bus or Subway", "Beach, Riverbed or Park"]),
        //Social
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        generateWeightedBoolean(0.5),
        //Wellness
        pickRandomArrayElement(["Hospital", "Clinic", "VA", "Does not go for care"]),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3),
        generateWeightedBoolean(0.3)
    ])
}
writer.end()

function generateDate() {
    let date = faker.fake("{{date.recent}}").split(" ");
    return (`${date[1]} ${date[2]}, ${date[3]}`);
}

function generateTime() {
    let date = faker.fake("{{date.recent}}").split(" ");
    return (`${date[4]} ${date[5]} ${date[6]}`);
}

function generateSSN() {
    let one = s.pad(Math.floor(Math.random() * 999), 3, 0);
    let two = s.pad(Math.floor(Math.random() * 99), 2, 0);
    let three = s.pad(Math.floor(Math.random() * 9999), 4, 0);
    return (`${one}-${two}-${three}`);
}

function generateWeightedBoolean(trueFreq = 0.5) {
    if (Math.random() <= trueFreq) {
        return (true);
    } else {
        return (false);
    }
}

function pickRandomArrayElement(a) {
    return (a[Math.floor(Math.random() * a.length)]);
}
