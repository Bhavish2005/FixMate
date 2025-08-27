// utils/passwordStrengthUtils.js

export function calculatePasswordStrength(password) {
  let score = 0;

  if (!password) return { score: 0, label: "Very Weak" };

  // Criteria examples
  if (password.length >= 6) score += 20;
  if (password.length >= 10) score += 20;
  if (/[A-Z]/.test(password)) score += 20;
  if (/[0-9]/.test(password)) score += 20;
  if (/[^A-Za-z0-9]/.test(password)) score += 20;

  let label = "Very Weak";
  if (score <= 20) label = "Very Weak";
  else if (score <= 40) label = "Weak";
  else if (score <= 60) label = "Medium";
  else if (score <= 80) label = "Strong";
  else label = "Very Strong";

  return { score, label };
}
