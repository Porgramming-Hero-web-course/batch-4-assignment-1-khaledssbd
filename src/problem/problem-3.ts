{
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  function countWordOccurrences(sentence: string, word: string): number {
    const words = sentence.toLowerCase().split(' ');
    return words.filter(
      w => w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') === word.toLowerCase()
    ).length;
  }

  console.log(
    countWordOccurrences(
      "I love TYPESCRIPT, I'm trying to be a master in TypeScRIPT.",
      'typescript'
    )
  ); // 2
}