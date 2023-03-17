/**
 * Предлагается сыграть в игру со словами.
 * Нужно отгадать все слова, которые можно составить из заданного набора букв путем их перестановки.
 * Дан набор букв, словарь популярных слов английского языка, минимальная длина слова.
 * Нужно вывести все возможные варианты слов, упорядоченные по длине, если длины совпадают, то по алфавиту.
 *
 * Created by andrey on 16.03.2023
 */

const assert = require("assert");
const fs = require("fs");

let words = fs.readFileSync("en.txt").toString().split("\n");

const solve = (word, minLength) => {

};

var tests = [{
    word: "neo",
    minLength: 2,
    answer: ["no", "on", "one"]
},
{
    word: "ucrsh",
    minLength: 4,
    answer: ["rush", "such", "crush"]
},
{
    word: "rfyia",
    minLength: 3,
    answer: ["air", "far", "fry", "ray", "airy", "fair", "fairy"]
}, {
    word: "dpuno",
    minLength: 3,
    answer: ["duo", "nod", "pond", "undo", "upon", "pound"]
}, {
    word: "moilcpse",
    minLength: 6,
    answer: ["copies", "impose", "police", "simple", "compile", "complies"]
}];

tests.forEach((test) => {
    assert.deepEqual(solve(test.word, test.minLength), test.answer);
});
