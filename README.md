# Valentine's Day Proposal Page 💝🐧

A fun and interactive web page to ask someone to be your Valentine! Features an adorable animated penguin holding a heart, with a beautiful envelope opening animation. 😊

## 🎯 Features

- Adorable CSS-only animated penguin with blinking eyes and waving flippers! 🐧
- Beautiful envelope opening animation with a love letter seal
- Gradient background with floating heart emojis
- Interactive "Yes" button with celebration animation
- Evasive "No" button that moves away on hover (making it unclickable!)
- Confetti celebration when "Yes" is clicked
- Fully responsive design for mobile and desktop

## 🚀 How to Open the Page

### Method 1: Open Directly in Browser (Easiest!)

1. **Download or clone this repository** to your computer
2. **Navigate to the folder** where you saved the files
3. **Double-click on `index.html`** - it will open in your default web browser
4. That's it! The page is ready to use! 💕

### Method 2: Using a Local Web Server

If you prefer to use a local server:

**Using Python (if you have Python installed):**
```bash
# Navigate to the repository folder
cd path/to/myrepo

# For Python 3:
python3 -m http.server 8000

# For Python 2:
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: `http://localhost:8000`

**Using Node.js (if you have Node.js installed):**
```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to the repository folder and run
http-server

# Or use npx (no installation needed)
npx http-server
```

Then open your browser and go to the URL shown in the terminal (usually `http://localhost:8080`)

### Method 3: Using GitHub Pages (Share Online!)

To share the page online with your Valentine:

1. Go to your repository settings on GitHub
2. Scroll down to "Pages" section
3. Under "Source", select the branch (e.g., `main` or your current branch)
4. Click "Save"
5. GitHub will provide you with a URL like: `https://yourusername.github.io/myrepo/`
6. Share this URL with your Valentine! 🎉

## 📱 How It Works

1. Open the page in a web browser
2. Click on the envelope with the love letter seal to open it 💌
3. A cute penguin appears holding a heart! 🐧💕
4. Your Valentine will see the question: "Will you be my Valentine?"
5. Two buttons appear: "Yes! 💖" and "No..."
6. If they try to click "No", the button playfully moves away!
7. When they click "Yes! 💖", the penguin jumps for joy with confetti celebration! 🎊

## 💻 Files

- `index.html` - The main HTML page with the adorable penguin and all styles/scripts embedded
- `valentine.html` - Alternative version with the same penguin design
- `style.css` - (Legacy) Styling for simplified version
- `script.js` - (Legacy) JavaScript for simplified version

## 🎨 Customization

Feel free to customize the page:
- Edit the question and penguin styles in `index.html`
- Change colors, animations, and penguin appearance in the `<style>` section
- Adjust interactive behavior in the `<script>` section at the bottom of `index.html`
- The penguin is built entirely with CSS - no images required!

Enjoy and good luck! 💖🐧
