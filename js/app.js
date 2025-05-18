/**Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false */

function validPhoneNumber(phoneNumber) {
  
  if (phoneNumber.length !== 14) return false;


  if (phoneNumber[0] !== '(') return false;

  if (phoneNumber[4] !== ')') return false;

  if (phoneNumber[5] !== ' ') return false;
  
  if (phoneNumber[9] !== '-') return false;


  const digitPositions = [1,2,3, 6,7,8, 10,11,12,13];
  for (let i = 0; i < digitPositions.length; i++) {
    const pos = digitPositions[i];
    const ch = phoneNumber[pos];
    if (ch < '0' || ch > '9') {
      return false;
    }
  }


  return true;
}
/**Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses! */
{function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join('');  
  const firstPart = numbers.slice(3, 6).join(''); 
  const secondPart = numbers.slice(6).join('');   
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}}