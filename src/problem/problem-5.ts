{
  // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  function getProperty<T, S extends keyof T>(object: T, key: S): T[S] {
    return object[key];
  }

  const me = {
    name: 'Khaled',
    age: 28,
  };
  console.log(getProperty(me, 'name')); // "Khaled"
  console.log(getProperty(me, 'age')); // 28
}