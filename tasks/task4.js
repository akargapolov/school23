/**
 * Девочка любит собирать пазлы.
 * Однажды ей подарили пятнашки с пронумерованными элементами:
 * в первом ряду собранного пазла элементы 1-2-3, во втором 4-5-6, в третьем 7-8 и пустая клетка.
 * Собирая пазл, девочка перепутала местами несколько элементов.
 * Вытаскивать элементы из пазла нельзя, можно только передвигать в пустую клетку.
 * Выведите последовательность номеров элементов, передвигая которые в пустую клетку, можно собрать пазл.
 *
 * Created by andrey on 17.03.2023
 */

const assert = require("assert");

const TO_STRING = "0123456789abcdefghijklmnopqrstuvwxyz";

const swap = (array, i, j) => {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
};

const solve = (field) => {

};

var tests = [
    {
        field: [
            "123",
            "456",
            "78 "
        ],
        answer: []
    },
    {
        field: [
            "12 ",
            "453",
            "786"
        ],
        answer: ["3", "6"]
    },
    {
        field: [
            "123",
            "468",
            "75 "
        ],
        answer: ["8", "6", "5", "8"]
    },
    {
        field: [
            "263",
            "1 8",
            "754"
        ],
        answer: ["6", "2", "1", "7", "5", "4", "8", "6", "4", "5", "7", "4", "5", "8"]
    },
    {
        field: [
            "5134",
            "a 78",
            "62bc",
            "9def"
        ]
    },
    {
        field: [
            "52 8",
            "9163",
            "a74c",
            "debf"
        ]
    },
    {
        field: [
            "238e",
            "7f4c",
            "15 a",
            "96db"
        ]
    },
    {
        field: [
            "9254",
            "ea7f",
            "16 8",
            "3cbd"
        ]
    },
    {
        field: [
            " 14e",
            "2b93",
            "785d",
            "a6cf"
        ]
    }
];

const checkSolution = (field, answer) => {
    const n = field.length, m = field[0].length;
    field = field.join("").split("");

    answer.forEach((char) => {
        const index = field.indexOf(char);

        if (index === -1) {
            assert.fail("Can't find " + char + " in field " + field.join(""));
        }

        const nextIndexes = [];
        if (index % m !== 0) {
            nextIndexes.push(index - 1);
        }
        if ((index + 1) % m !== 0) {
            nextIndexes.push(index + 1);
        }
        if (index >= m) {
            nextIndexes.push(index - m);
        }
        if (index + m < n * m) {
            nextIndexes.push(index + m);
        }

        const nextIndex = nextIndexes.find((nextIndex) => field[nextIndex] === " ");

        if (nextIndex === undefined) {
            assert.fail("Can't find ' ' near " + char + " in field " + field.join(""));
        }

        swap(field, index, nextIndex);
    });

    assert.equal(TO_STRING.substring(1, n * m) + " ", field.join(""));
};

tests.forEach((test) => {
    const answer = solve(test.field);
    checkSolution(test.field, answer);
});
