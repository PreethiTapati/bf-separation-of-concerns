'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---

//  replace the <p>
const p = divEl.querySelector('p');
p.replaceWith(document.createElement('nav')); 

//  insert something before the <section>
const section = divEl.querySelector('section');
section.before(document.createElement('h2'));

//  remove the <h1>
const h1 = divEl.querySelector('h1'); 
h1.remove();

//  append something to the end
divEl.append(document.createElement('p'));

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
