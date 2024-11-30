function deepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
 return keys1.every((key) =>
    obj1[key] && typeof obj1[key] === "object"
      ? deepEqual(obj1[key], obj2[key])
      : Object.is(obj1[key], obj2[key])
  );
}
// Test case
console.log(deepEqual({ a: NaN, b: {c:-1} }, { a: NaN, b: {c:1} })); // false
console.log(deepEqual({ a: 1 }, { a: 1 })); // true

console.log(Object.is(NaN, NaN));
