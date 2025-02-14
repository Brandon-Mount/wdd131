document.addEventListener("DOMContentLoaded", () => {
    // Store and display a welcome message using localStorage
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage) {
        const userName = localStorage.getItem("userName") || "Guest";
        welcomeMessage.textContent = `Welcome back, ${userName}!`;

        // Function to update user's name
        function updateUserName() {
            const newName = prompt("Enter your name:");
            if (newName) {
                localStorage.setItem("userName", newName);
                welcomeMessage.textContent = `Welcome back, ${newName}!`;
            }
        }

        document.getElementById("update-name").addEventListener("click", updateUserName);
    }

    // Recipe filtering functionality
    const recipes = [
        { name: "Quick & Easy Pasta", category: "Dinner" },
        { name: "Homemade Tacos", category: "Dinner" },
        { name: "Classic Chocolate Chip Cookies", category: "Dessert" },
        { name: "Fresh Garden Salad", category: "Lunch" }
    ];

    function displayRecipes(filter = "All") {
        const recipeContainer = document.getElementById("recipe-list");
        if (!recipeContainer) return;

        recipeContainer.innerHTML = "";
        
        const filteredRecipes = filter === "All" ? recipes : recipes.filter(recipe => recipe.category === filter);
        
        filteredRecipes.forEach(recipe => {
            const recipeElement = document.createElement("article");
            recipeElement.classList.add("recipe-item");
            recipeElement.innerHTML = `<h3>${recipe.name}</h3><p>Category: ${recipe.category}</p>`;
            recipeContainer.appendChild(recipeElement);
        });
    }
    
    const filterOptions = document.getElementById("filter-options");
    if (filterOptions) {
        filterOptions.addEventListener("change", (event) => {
            displayRecipes(event.target.value);
        });
    }
    
    displayRecipes();
      
    // Cooking tools functionality
    const tools = [
        { name: "Chef’s Knife", description: "A versatile knife for chopping, slicing, and dicing." },
        { name: "Cutting Board", description: "A durable surface for safe and easy food preparation." },
        { name: "Measuring Cups & Spoons", description: "Essential for accurate ingredient measurements." },
        { name: "Mixing Bowls", description: "Used for mixing ingredients and food prep." }
    ];

    function displayTools() {
        const toolsContainer = document.getElementById("tools-list");
        if (!toolsContainer) return;

        toolsContainer.innerHTML = "";

        tools.forEach(tool => {
            const toolElement = document.createElement("article");
            toolElement.classList.add("tool-item");
            toolElement.innerHTML = `<h3>${tool.name}</h3><p>${tool.description}</p>`;
            toolsContainer.appendChild(toolElement);
        });
    }
    
    displayTools();

     // Update footer with last modification date
     const footer = document.querySelector("footer p");
     if (footer) {
         const lastModified = new Date(document.lastModified);
         footer.innerHTML += `<br>Last updated: ${lastModified.toDateString()} ${lastModified.toLocaleTimeString()}`;
     }
});

