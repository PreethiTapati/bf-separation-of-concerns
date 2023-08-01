'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares

const tBody1 = document.createElement('td');
tBody1.innerHTML = 'a';
const tBody2 = document.createElement('td');
tBody2.innerHTML = 'b';
const trEl = divEl.getElementsByTagName('tr')[0];
trEl.appendChild(tBody1);
trEl.appendChild(tBody2);

const tBody4 = document.createElement('td');
tBody4.innerHTML = 'c';
const tBody5 = document.createElement('td');
tBody5.innerHTML = 'd';
const trEl1 = divEl.getElementsByTagName('tr')[1];
trEl1.appendChild(tBody4);
trEl1.appendChild(tBody5);

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        const tbodyEL = divEl.children[0].children[0];
        const trEl = tbodyEL.children[i];
        const tdEl = trEl.children[j];
        const actual = tdEl.innerHTML;
        const expected = expectedInnerHTMLs.shift();
        console.assert(actual === expected, `expected "${expected}"`);
    }
}
