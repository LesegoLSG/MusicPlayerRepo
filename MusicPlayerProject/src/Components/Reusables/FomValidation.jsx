// FormValidation.js

export const validateEmail = (email) => {
  // Basic email validation logic
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Password validation logic
  // Example: Password must contain at least 1 letter, 1 number or special character, and be at least 10 characters long
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d|[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,}$/;
  return passwordRegex.test(password);
};

export const validateSimplePassword = (password) => {
  // Password validation logic
  return password.trim() !== "";
};

export const validatePersonalDetails = (name, dateOfBirth, gender) => {
  // Personal details validation
  return name.trim() !== "" && dateOfBirth !== "" && gender !== "";
};

export const validateTerms = (termsChecked) => {
  // Validation for terms checkbox
  return termsChecked;
};
