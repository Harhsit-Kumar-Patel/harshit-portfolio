import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "build/**",
      "node_modules/**",
      "resumewebsite/**",
      "src/**"
    ]
  }
];

export default config;
