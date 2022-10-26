<h2>Recipe Application 'The Clueless Cook'</h2>  

---

1) Introduction
2) Features
3) Installation

---

<h3>Introduction</h3>  

Do you enjoy good food but are you not always sure what to cook?    
Just looking for inspiration? Or do you like to pay attention to what nutrients are in your meal?  

Don't look further because **this application is for you!**  
With this application you can search recipes based on their ingredients, cooking time, meal type, cuisine, or dietary requirements!  
It also has the ability to search for the calorie count and nutrients of products by using the 'Calorie Calculator'.  

---

<h3>Features</h3>

The application is build up out of the following features:  

**Navigation:**  
Every page had a navigation-bar where you can easily navigate between the different pages and functions.  
Clicking on 'Home' will bring you back to the homepage where you can search for recipes.  
Clicking on 'About' brings you to the footer with the about-information of this website.  
Clicking on 'Calculator' will bring you to the 'Calorie Calculator' page.  

**Homepage:**  
The header of the homepage always features some random recipes as a suggestion.  
You can directly go to the recipe-page by clicking on it.  

In the main of the homepage you can search for recipes by typing your ingredient(s) in the 'Recipe search' field.  
You can just search by ingredient name, but you can also use the following options to narrow down your search:  

* Meal Type: this will let you choose what type of meal you would like to find, like: Breakfast, Lunch, Dinner, etc..  
* Cuisine: this will let you choose what type of cuisine you would like to find, like: American, Asian, British, etc..  
* Diet type: this will let you choose what type of diet-requirements you would like to find, like: Balanced, High-Fiber, High-Protein, etc..  
* Time: this indicates how much time it will take to prepare the recipe you choose, like 20 min, 20-40 min, etc..  

After clicking the search button or enter, the application will show you 6 recipes with your chosen ingredient(s).  
Once you've searched for recipes you can select one and click on it. This will open a new tab with the chosen recipe.  

By opening a new tab you can have multiple recipes open at the same time.  
This comes in handy if you'd like to read first how to prepare or what all ingredients are being used and decide which recipe to make after.  
This way your search results will remain open on the homepage.  

**Recipe-page:**  
The recipe-page features all the information needed to prepare the recipe like: ingredients, images, etc..  
It also shows you the nutrients of the recipe and the health labels associated with the recipe.  

**Calorie Calculator-page:**  
The Calorie Calculator lets you find products and their calories, fat and carbohydrates content.  
You can add different products together that add up and give you he total amount of calories, fat and carbohydrates.  

---

<h3>Homepage preview:</h3> 

![preview](assets/previewHomepage.png)

---

<h3>Installation</h3>  
  
**Step 1 - Download and Install an IDE.**  
To be able to run this project you will have to download an IDE like Webstorm if you don't already have one.    
Follow the link below to download Webstorm for macOS, Windows or Linux: https://www.jetbrains.com/webstorm/download/#section=mac    
Then follow the installation instructions on their website.  

  
**Step 2 - Check Node.js and npm version.**  
In the terminal type the following command to find out what version is being used:  
>node -v, then press enter.  

>npm -v, then press enter.  


**Step 3 - Installing dependencies & development dependencies.**  
In the terminal type the following commands:  
>npm init, then press enter and follow the instructions in the terminal or keep pressing enter till you get a new command line.

>npm install parcel --save-dev, then press enter.

The development dependencies will show up in your package.json and package-lock.json files as soon as you install them.  
You can check if the following is added to the package.json file, otherwise add this into the file yourself:

>"scripts": {  
"start": "parcel build src/index.html",   
"test": "echo "Error: no test specified" && exit 1"  
}

The development dependencies used for this application are:

> buffer: v6.0.3  
parcel: v2.7.0  
process: v0.11.10  

To install the dependencies put in the following command in the terminal:

>npm install axios, then press enter.

The dependencies used for this application are:

>axios: v0.27.2


**Step 4 - API**  
This application uses the API from Edamam.com.  
There's multiple options to use this API but this application uses the following API's from Edamam:
* Recipe Search API (version V2)
* Food Database API (version V2)  

To start using the application you will have to sign-up for an account on the Edamam website.  
To do this visit www.edamam.com and go to 'Signup API' in the top right corner.  
Select the API's mentioned above and copy and paste your 'app_key' and 'app_id' in the following files:

__Recipe Search API__  
recipe-page.js -- Line 24 & 25  
fetchRecipeData.js -- Line 12 & 13  
fetchRecipeDataHeader.js -- Line 12 & 13  

__Food Database API__  
fetchFoodInfo.js -- Line 9 & 10


**Step 5 - Run the application**  
Run the application by typing the following command in the terminal:  

> npm run start, ten press enter.

There wll appear a link in the terminal that will take you to the application website. (http://localhost:1234)  
If you want to quit running the npm press Ctrl + C

You are now ready to use the application. Enjoy!  
------------------------- 🤜 🤛 -------------------------
