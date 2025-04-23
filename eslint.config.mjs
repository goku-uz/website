import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Downgrade error level to warnings
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-undef": "warn",
      
      // Downgraded TypeScript "any" related rules
      "@typescript-eslint/no-explicit-any": "off", // Turn off completely
      "@typescript-eslint/explicit-module-boundary-types": "off", // Don't require return types that would prevent "any"
      "@typescript-eslint/no-unsafe-assignment": "off", // Allow assigning "any" values
      "@typescript-eslint/no-unsafe-member-access": "off", // Allow accessing properties on "any" values
      "@typescript-eslint/no-unsafe-call": "off", // Allow calling "any" values as functions
      "@typescript-eslint/no-unsafe-return": "off", // Allow returning "any" values
      "@typescript-eslint/ban-ts-comment": "warn", // Downgrade ts-ignore/ts-expect-error comments to warnings
      
      "react/no-unescaped-entities": "warn",
      "react/display-name": "warn",
      "@next/next/no-img-element": "warn",
      "@next/next/no-html-link-for-pages": "warn"
    }
  }
];

export default eslintConfig;
