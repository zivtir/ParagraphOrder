const par = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

const retval = sortWordsInHebrewOrder(par)
console.log(retval)


  function sortWordsInHebrewOrder(paragraph) {

    // Remove all punctuation from the paragraph.
    const sanitizedParagraph = paragraph.replace(/[^a-zA-Z\s]/g, "");
  
    const words = sanitizedParagraph.toUpperCase().split(" ");
  
    // Custom alphabet order.
    const hebrewOrder = "ABGDHVZJTYKLMNSIPXQRWUCEOF";
  
    // Sort the words using a custom comparison function.
    words.sort((a, b) => compare(a, b, hebrewOrder));
  
    // rejoin the paragraph with sorted words.
    return words.join(" ");
  }
  
  // Custom comparison function for the given mapping order.
  function compare(word1, word2, mappingOrder) {
    const minLength = Math.min(word1.length, word2.length);
  
    for (let i = 0; i < minLength; i++) {
      const pos1 = mappingOrder.indexOf(word1[i]);
      const pos2 = mappingOrder.indexOf(word2[i]);
  
      if (pos1 !== pos2) {
        return pos1 - pos2; // based on the index of latter in the mapping return the -1,0, 1 
      }
    }
  
    // If all compared characters are equal, compare word lengths.
    return word1.length - word2.length; 
  }