# Orange & Apple

This app is a simple checkout page

The project includes two tables.
The first table has three rows, one showing the item, the other the unit price while the last allows the user select a quantity they want
The second table also also has three rowx, the first showing the total purchase, the second the total quantity of item bought, and the last showing the total cost for each item

In the first table, the button can be clicked and the quantity bought will reflect accordingly.
The decrease button only works when the number of item is greater than 0
The clicking of the button in the first table also affect the second table also.
The prices for each item is calculated dynamically depending on the quantity of each item bought
When a user buys apple, he automatically gets one for free.
When a user buys 3 or more oranges, for every three he buys, he pays for two.

When the quantity of oranges bought is 3 or more, a question mark appeats in the price of oranges column
This when clicked will inform the customer how the bonus/discount is being calculated for oranges
The last row of the second table is a sum total of all quantity of fruit received by the customer and also the total price to be paid after bomus is activated.

# code explanation

I used React library to buy this project. This is because React is a very good choice for SPAs
The project as the module App.jsx as its entry point.
I created a components folder that includes all the components I used.
The App component has two children component; the Header component, and the Body component
The Header component is just the header that includes company name (Apples & Oranges)
The Body component also has three sub components; Quantity, Summary , and PayBtn
The Quantity component contains the necessary information for the first table in the app.
The Summary component contains the necessary information for the second table in the app. 
The Summary component contains SummaryRows sub component
The SummaryRows is just a component that represents rows in the Summary component
I used React useReducer hooks to pass information between components wihin the Body component.
I had an initial object with the form { Orange: 0, Apple: 0 }
Depending on the action by the user, I dispatched a dispatch function that increases or decreases the quantity of fruit bought
Since this object is available for all Body component children, I dynamically calculated the price and discount in other components that needed that value.


# Trade offs

Due to time constraint, I didn't implement the pay now button functionality
Also, I made the design as basuc as possible while still taking into consideration user experience
I used prop-drilling in some instances. On every other day, I prefer composition pattern to prop drilling