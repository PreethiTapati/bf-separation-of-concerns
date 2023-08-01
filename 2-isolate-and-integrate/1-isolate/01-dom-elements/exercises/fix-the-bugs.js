'use strict';

const element = document.createElement('button');
element.innerHTML = 'go home'; // Corrected property name to innerHTML
element.className = 'large-btn'; // Corrected property name to className

// the assertions are correct!  change the code above to pass them
console.assert(element.nodeName === 'BUTTON', 'Test 1: nodeName');
console.assert(element.innerHTML === 'go home', 'Test 2: innerHTML');
console.assert(element.className === 'large-btn', 'Test 3: className');
