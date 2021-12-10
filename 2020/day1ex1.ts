import * as fs from 'fs';

// read file and split by newline and map to number
const input = fs.readFileSync('2020/inputs/1.txt', 'utf8').split('\n').map(Number);

// map all pairs of numbers that sum to 2020
const result = input.map((n, i) => {
    const pair = input.filter((m, j) => i !== j && n + m === 2020);
    return pair.length > 0 ? `${pair[0]} * ${n} = ${pair[0] * n}` : ""
}).filter(n => n !== "");

console.log(result[0]);


input.forEach((n, i) => {
    input.forEach((m, j) => {
        input.forEach((o, k) => {
            if (i !== j && j !== k && i !== k && n + m + o === 2020) {
                console.log(`${n} * ${m} * ${o} = ${n * m * o}`);
                process.exit();
            }
        })
    })
});
