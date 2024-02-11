/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-background': "url('/src/components/images/PC_background.jpg')",
      })
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

