module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {...require('tailwind-rn/unsupported-core-plugins'), gap: true},
};
