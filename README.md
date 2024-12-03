# Welcome to the PokeAPI Integration  
## Within this project, their are lots of features that help it run smoothly  
### Once you download the application, the page you want to open to your default web browswer in the "index.HTML" file  
The "index.HTML" file should bring you to the hompage, featuring a a welcome header, a pokeball image, and a button to begin the application.  
Click the "Search for Pokemon" button and you will be brought to the "search" page.  
Here, you are prompted for either a pokemon name, or their corrisponding ID number.  
Enter the pokemon you wish to see and a detials box will pop up. It will give you the name, ID, and type of pokemon.  
If you wish to see more details, you can click the "View Details" button and you will be taken to the details page for that pokemon.  
There is also a feature that sorts the pokemon by what type they are. To access this page, there is a link in the nav bar that is labled "pokemon Types. 
The link will bring you to a page with all the pokemon types and each button will show you all the pokemon with that type assigned to them.  

### How the javaScript Works  
1. Search.js
   Starts buy retrieving the input from the search bar by using an EventListener    
   This input will be changed into "query" and put into the function "fetchPokemon"
   This function connects to the pokeapi and checks for any pokemon with the same name or title and displays the information retieved  
   It is diplayed by calling the "displayPokemon" function with "data" plugged in from the preivious function
   It will then create a new div element in the HTML file to show the info from "data"
2. Details.js
   This file starts by identifying which pokemon you are using by checking its ID  
   It will then connect to the pokeapi and display the details of the pokemon you searched using the displayDetials fuction  
   This function will then find the div with "pokemonDetails" as the id and insert new HTML elements to display extra information for the user  
4. Types.js
   This file starts with connecting to the pokeapi then fing the "typeList"
   Once the list is retrieved, it is then sorted into seperate categories and created a div element for each one (as a button)
   Then the function "fetchPokemonByType" is used to determine what thge type of the pokemon is
   The last function is used to display each pokemon in the correct category by using the corresponding types and appending them
   
   
   


