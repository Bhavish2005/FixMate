import React from "react";
import { calculatePasswordStrength } from "../utils/passwordStrengthUtils";

export default function PasswordStrengthBar({ password }) {
  const { score, label } = calculatePasswordStrength(password);

  let color = "bg-red-500";
  if (label === "Weak") color = "bg-orange-500";
  if (label === "Medium") color = "bg-yellow-500";
  if (label === "Strong") color = "bg-green-500";
  if (label === "Very Strong") color = "bg-indigo-500";

  return (
    <div className="mt-2 flex items-center space-x-3">
      {/* Bar container */}
      <div className="flex-1 h-2 rounded bg-gray-700 overflow-hidden">
        <div
          className={`h-2 rounded transition-all duration-300 ${color}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>

      {/* Label */}
      <span
        className={`text-sm font-medium ${
          label === "Very Weak"
            ? "text-red-400"
            : label === "Weak"
            ? "text-orange-400"
            : label === "Medium"
            ? "text-yellow-400"
            : label === "Strong"
            ? "text-green-400"
            : "text-indigo-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

