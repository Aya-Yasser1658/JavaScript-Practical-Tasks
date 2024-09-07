function sortWordsByLength(sentence) {
    const words = sentence.split(' ');
    words.sort((a, b) => a.length - b.length);
    const sortedSentence = words.join(' ');
    return sortedSentence;
}
const sentence = "this is a sentence to show if code work well or not";
console.log(sortWordsByLength(sentence)); 
