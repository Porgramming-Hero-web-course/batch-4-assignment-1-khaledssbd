{
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  type Person = {
    name: string;
    age: number;
    email: string;
  };

  const validateKeys = <T extends Person, S extends keyof T>(obj: T, keys: S[]): obj is T => {
    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  };

  const person: Person = {
    name: 'Khaled',
    age: 28,
    email: 'khaled@example.com',
  };

  console.log(validateKeys(person, ['name', 'age'])); // true
}
