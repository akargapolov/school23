/**
 * При разработке игры Короли и дамы программисты столкнулись с задачей определения пересечения двух карт.
 * Ширина карты 110 пикселей, высота 160 пикселей.
 * Даны координаты центра карт и угол поворота в градусах, требуется определить пересекаются ли две карты.
 * В случае пересечения вывести yes, иначе no.
 *
 * Created by andrey on 17.03.2023
 */

const assert = require("assert");

const solve = (card1, card2) => {

};

var tests = [{
    card1: { x: 0, y: 0, rotation: 0 },
    card2: { x: 500, y: 0, rotation: 0 },
    answer: "no"
},
{
    card1: { x: 0, y: 0, rotation: 90 },
    card2: { x: 100, y: 0, rotation: 0 },
    answer: "yes"
},
{
    card1: { x: -88, y: 40, rotation: 0 },
    card2: { x: 16, y: -8, rotation: 0 },
    answer: "yes"
},
{
    card1: { x: 48, y: 104, rotation: 65 },
    card2: { x: -88, y: 40, rotation: -25 },
    answer: "no"
},
{
    card1: { x: -200, y: 88, rotation: -30 },
    card2: { x: -80, y: 16, rotation: -30 },
    answer: "yes"
}
];

tests.forEach((test) => {
    assert.equal(test.answer, solve(test.card1, test.card2));
});