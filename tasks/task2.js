/**
 * Петя играет в игру Сладкие загадки и не может найти следующий ход.
 * Нужно составить программу, которая поможет ему.
 * Правильным ходом считается обмен местами двух рядом стоящих элементов так,
 * что в результате получится 3 или более элементов одного цвета, стоящих рядом по горизонтали или вертикали.
 *
 * Дано N - число строк, M число столбцов, в следующих N строках задано поле.
 * Нужно вывести координаты двух элементов для обмена Y X, если вариантов несколько,
 * то вывести с минимальным Y и X, если ход отсутствует, то -1.
 *
 * Created by andrey on 16.03.2023
 */

const assert = require("assert");

const solve = (field) => {
};

var tests = [{
    field: [
        "aab",
        "bba"
    ],
    answer: [{ row: 0, col: 2 }, { row: 1, col: 2 }]
},
{
    field: [
        "abc",
        "def"
    ],
    answer: -1
},
{
    field: [
        "abcdefab",
        "fedcbafe",
        "abcdefab",
        "fedcbafe",
        "abcdefab",
        "fedcbafe",
        "abcdefab",
        "fedcbafe"
    ],
    answer: [{ row: 1, col: 2 }, { row: 1, col: 3 }]
}, {
    field: [
        "aabbcc",
        "ddeeff",
        "aabbcc",
        "ddeeff"
    ],
    answer: -1
}, {
    field: [
        "aabbcca",
        "ddeeffb",
        "aabbccd",
        "ddecffe"
    ],
    answer: [{ row: 2, col: 3 }, { row: 3, col: 3 }]
}
];

tests.forEach((test) => {
    assert.deepEqual(test.answer, solve(test.field));
});