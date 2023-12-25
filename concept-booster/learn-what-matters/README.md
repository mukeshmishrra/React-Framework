React introduction 
---------------------
facebook ko ek problem nazar aayii ki wo notification and reactions ko show nahi kr pa rahe hain,
unhe notification, reactions and other data deliever krne me page reload krna pad raha hai, aur wo
isliye kyu ki wo php ko use kr rahe the.
now is problem se nipatne ke liye facebook ke ek engineer ne 2013 me ek library bnayi aur wo library bahut hi amazing thi.

normally kya hota hai ki hum page me kuch v change krte hai to browser complete DOM tree ko reload krta hai.
but ye jo library bnaye facebook ke eng ne ab is library ke pass ek khud ka dom tree tha jise 
virtual dom tree kahte hai, aur virtual dom tree me kya hota hai ki only the updated things 
are going to change from the dom tree not whole tree.

this was the amazing thing. 

-------------------------------------------------------------------------

# Component

component ek function hai jo ki jsx return krta hai.
jsx -> javascript xml 
jsx ek html ki trh dikhne wala syntax hai but iske pass superpower hain
jo ki html me nhi hai.
example 

<h1>2+2</h1>
output --> 2+2 

<h1>{ 2+2 }</h1>
output <h1> 4 </h1>

-------------------------------------------------------------------------
# Styling in react
style = {{ color: "red" }}

<div className="main"></div>
-----------------------------------------------------------------------
