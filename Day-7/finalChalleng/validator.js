
 function validateAge(age) {
  if (typeof age !== "number") {
    throw new Error("Age must be a number");
  }
  if (age < 18) {
    throw new Error("Must be 18 or older");
  }
  return true;
}

export { validateAge };
