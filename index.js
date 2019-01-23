// Require libraries
const format = require('date-fns/format');
const colors = require('colors/safe');

// Get hour number in 24 format
const hour = format(new Date(), "H");

// Ask for hours range
if (hour >= 6 && hour < 12) {
  console.log(colors.blue('Good morning'));
} else if (hour >= 12 && hour < 18) {
  console.log(colors.yellow('Good morning'));
} else if (hour >= 18 && hour < 23) {
  console.log(colors.gray('Good evening'));
}
