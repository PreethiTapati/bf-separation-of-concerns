

  'use strict';

const log = (level, text, styling) => {

  // Check log level 
  if (level === 'info') {
    console.info(text);
  } else if (level === 'warn') {
    console.warn(text);
  } else if (level === 'error') {
    console.error(text);
  }

  // Style output
  if (styling) {
    console.log(`%c${text}`, styling); 
  } else {
    console.log(text);
  }

};

