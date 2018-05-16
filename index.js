/**
 * Inserts one string into another string after every nth character
 *
 * @param {string} stringToModify The string that will get modified
 * @param {string} stringToInsert The string that will get inserted at every nth character
 * @param {number} atEveryOther The number of characters between each instance of the stringToInsert
 * @return {string}
 */

function insertEveryNth(stringToModify, stringToInsert, atEveryOther = 1) {
  let splitString = [...stringToModify]
  let newString = ''
  for (var i = 0; i < splitString.length; i++) {
    newString += splitString[i]
    if ((i + 1) % atEveryOther == 0) {
      newString += stringToInsert
    }
  }
  return newString
}

module.exports.insert = insertEveryNth
