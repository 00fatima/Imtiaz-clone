const swiper = new Swiper('.slider-wrapper', {
  loop: true,
grabCursor: true,
spaceBetween: 16,

slidesPerView: 2,

  // If we need pagination
  pagination: {
el: '.swiper-pagination',
clickable: true,
dynamicBullets: true
},

  // Navigation arrows
  navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
},
// break pont 
  breakpoints: {
0:{
  slidesPerView: 1
},
640: {
slidesPerView: 4
},
// when window width is >= 1024px
1024: {
slidesPerView: 6
    },
  }
});


// chat boot 
function toggleChat() {
  const chatBar = document.getElementById("chatBar");
  if (chatBar.style.display === "flex") {
    chatBar.style.display = "none";
  } else {
    chatBar.style.display = "flex";
  }
}
const products = [
  {
    category: "beverage",
    name: "Pepsi 1.5 Ltr Bottle",
    price: 180,
    description: "Refreshing carbonated soft drink.",
    image: "https://www.pepsico.com/images/pepsi-1.5ltr.png"
  },
  {
    category: "beverage",
    name: "Sprite 1.5 Ltr Bottle",
    price: 185,
    description: "Lemon and lime flavored soft drink.",
    image: "https://www.sprite.com/images/sprite-1.5ltr.png"
  },
  {
    category: "snack",
    name: "Hilal Bake Time Plain Cake Slices 6's Box",
    price: 205,
    description: "Soft and delicious cake slices, perfect for tea time.",
    image: "https://shop.imtiaz.com.pk/_next/image?url=https%3A%2F%2Fimtiaz-i.s3.ap-southeast-1.amazonaws.com%2F55126%2Fgallery%2FCON170000593.jpg&w=1920&q=90"
  }
];

// Beverages
const beverages = [
  {
    name: "Pepsi 1.5 Ltr Bottle",
    price: 180,
    description: "Refreshing carbonated soft drink.",
    image: "https://www.pepsico.com/images/pepsi-1.5ltr.png"
  },
  {
    name: "Sprite 1.5 Ltr Bottle",
    price: 185,
    description: "Lemon and lime flavored soft drink.",
    image: "https://www.sprite.com/images/sprite-1.5ltr.png"
  },
  {
    name: "Nestle Milo 400g",
    price: 450,
    description: "Chocolate malt drink powder.",
    image: "https://www.nestle.com/milo-400g.png"
  }
];

// Snacks
const snacks = [
  {
    name: "Hilal Bake Time Plain Cake Slices 6's Box",
    price: 205,
    description: "Soft and delicious cake slices, perfect for tea time.",
    image: "https://shop.imtiaz.com.pk/_next/image?url=https%3A%2F%2Fimtiaz-i.s3.ap-southeast-1.amazonaws.com%2F55126%2Fgallery%2FCON170000593.jpg&w=1920&q=90"
  },
  {
    name: "Lays Chips 160g",
    price: 120,
    description: "Crispy potato chips in multiple flavors.",
    image: "https://www.lays.com/images/160g.png"
  }
];

// Grocery
const grocery = [
  {
    name: "Olive Oil 500ml",
    price: 850,
    description: "Extra virgin olive oil, perfect for cooking and salads.",
    image: "https://www.example.com/images/olive-oil-500ml.png"
  },
  {
    name: "Rice Basmati 5kg",
    price: 1250,
    description: "Premium long-grain Basmati rice.",
    image: "https://www.example.com/images/basmati-rice-5kg.png"
  }
];

// Dairy
const dairy = [
  {
    name: "Fresh Milk 1 Ltr",
    price: 120,
    description: "Pure and fresh cow milk, packed hygienically.",
    image: "https://www.example.com/images/fresh-milk-1ltr.png"
  },
  {
    name: "Butter 200g",
    price: 220,
    description: "Creamy salted butter for cooking and baking.",
    image: "https://www.example.com/images/butter-200g.png"
  }
];

// Bakery
const bakery = [
  {
    name: "Brown Bread 400g",
    price: 75,
    description: "Healthy whole wheat brown bread loaf.",
    image: "https://www.example.com/images/brown-bread-400g.png"
  },
  {
    name: "Croissant 2 pcs",
    price: 90,
    description: "Fresh buttery croissants, perfect for breakfast.",
    image: "https://www.example.com/images/croissant-2pcs.png"
  }
];

function send() {
  const input = document.getElementById("userInput");
  const message = input.value.trim().toLowerCase(); // lowercase for easy match

  if (message) {
    const chatBody = document.querySelector(".chat-body");

    // user msg
    const userMsg = document.createElement("p");
userMsg.innerHTML = `<img src="https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/robot-bot-icon.png" 
style="height:20px; vertical-align:middle; margin-right:5px;"> ${message}`;
chatBody.appendChild(userMsg);

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // bot reply
    setTimeout(() => {
      let reply = "Sorry, I couldn't understand what you want";

      if (message === "hi" || message === "hello" ) {
        reply = "Hello 👋, how can I help you today?";
      }
      else if (message === "assalam o alikum") {
        reply = "Assalamu Alaikum! 👋 Welcome to Imtiaz Store. How can I help you today?";
      }
      else if (message === "thanks" || message === "hello") {
        reply = "Thank you for visiting Imtiaz Store! 🛒";
      }
      else if (message.includes("product") || message.includes("items") ) {
    reply = "Here are some products:\n";
    products.forEach((p) => {
        reply += `- ${p.name} (${p.price} PKR)\n`;
    });
}
else if (message.includes("beverage")  ) {
    reply = "Here are some beverages items:\n";
    beverages.forEach((p) => {
        reply += `- ${p.name} (${p.price} PKR)\n`;
    });
}
else if (message.includes("snack") ) {
    reply = "Here are some Snacks items:\n";
    snacks.forEach((p) => {
        reply += `- ${p.name} (${p.price} PKR)\n`;
    });
}
else if (message.includes("grocery") ) {
    reply = "Here are some Grocery items:\n";
    grocery.forEach((p) => {
        reply += `- ${p.name} (${p.price} PKR)\n`;
    });
}
else if (message.includes("dairy") ) {
    reply = "Here are some Dairy items:\n";
    dairy.forEach((p) => {
        reply += `- ${p.name} (${p.price} PKR)\n`;
    });
}
else if (message.includes("bakery") ) {
    reply = "Here are some Bakery items:\n";
    bakery.forEach((p) => {
        reply += `- ${p.name} (${p.price} PKR)\n`;
    });
}
else if (message === "order" || message === "cart") {
  reply = `Here’s how you can place an order at Imtiaz Store:
1️⃣ Choose a product from our categories (Beverages, Snacks, Grocery, etc.)
2️⃣ Tell me the quantity you want.
3️⃣ Provide your delivery address.
4️⃣ Choose your payment method (Cash on Delivery / Online Payment).
✅ That’s it! Your order will be confirmed and delivered to you.`;
}

        const botMsg = document.createElement("p");
  botMsg.innerHTML = `<img src="https://shop.imtiaz.com.pk/_next/image?url=https%3A%2F%2Fblinkximtiaz-i.s3.ap-southeast-1.amazonaws.com%2F55126%2Flogo%2F1656401353.png&w=128&q=90" 
    style="height:20px; vertical-align:middle; margin-right:5px;"> ${reply}`;
  
  chatBody.appendChild(botMsg);
  chatBody.scrollTop = chatBody.scrollHeight;
}, 3000);
  }
}
