const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Dream big and dare to fail. – Norman Vaughan",
    "Act as if what you do makes a difference. It does. – William James",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "If you want to achieve greatness stop asking for permission. – Anonymous",
    "Opportunities don’t happen. You create them. – Chris Grosser",
    "Great things never come from comfort zones. – Anonymous",
    "Don’t stop when you’re tired. Stop when you’re done. – Marilyn Monroe",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
    "Be so good they can’t ignore you. – Steve Martin"
];

function generateQuote() {
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random() * quotes.length);
    text.innerHTML = `<p>"${quotes[index]}"</p>`;
}

// Update the quote every 3 seconds
setInterval(generateQuote, 3000);
