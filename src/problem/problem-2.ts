{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  function removeDuplicates(numArray: number[]): number[] {
    let array: number[] = [];
    numArray.forEach(num => {
      if (!array.includes(num)) {
        array.push(num);
      }
    });
    return array;
  }

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]
}