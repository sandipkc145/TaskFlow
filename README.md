## What kind of  project is this ?

    In simple terms, TaskFlow is a personal study tracker app built with React and tailwind. It let you manage and know your ability of focused time on study.

    => ⚠️Note⚠️: This project is still in progress. Currently, you can view the dashboard, static record sessions, and navigate pages. Full Add/Edit/Delete functionality will be added later with the responsiveness.

 ## What are the features of this Project ?

    1. 🌙 Light/Dark mode toggle

    2. 📊 Dashboard with study statistics

    3. 📝 Add new study sessions

    4. 📚 View and manage all sessions

    5. 🎨 Responsive UI built with Tailwind CSS


## What are the Tech stack used for this Project ?

    1. React.js (functional components & hooks)

    2. useState and useContext for state management

    3. Tailwind CSS for styling

    4. Remix Icons for icons

    
## What could be the Future improvements ? 

    1. Connect the form to a database for persistent data

    2. Enable edit/delete of sessions

    3. Add dashboard analytics charts

    4. calender integration with schedulng task can be added
    

## How I Made This Project 🛠️

> 💡 Building TaskFlow was both exciting and challenging. Here’s a detailed look into my process:  

> 1. **Planning the Layout**  
>    I started by designing the main layout with three areas: Header (`Welcome`), Sidebar, and Hero (dynamic content).  
>    I wanted the app to feel clean and intuitive.  

> 2. **Theme Management**  
>    Implementing light/dark mode with React Context (`Themechanger.jsx`) was tricky at first.  
>    I had to ensure that toggling the theme updates the entire app consistently without breaking component styling. Explaination of the feature can be easily seen as they are commented so, startfrom the ```Themechanger.jsx```

> 3. **Dynamic Page Rendering**  
>    `Hero.jsx` renders components based on the `page` state. Passing the state correctly from `App.jsx` was important to make the navigation seamless.  

> 4. **Sidebar Navigation**  
>    Handling active menu highlighting and click events was a bit challenging.  
>    I used `map` over an array of items and applied conditional classes to show the active page. Proper
explaination of the code is given in the ```sidebar.jsx``` as a comment.

> 5. **Dashboard Cards**  
>    Creating reusable `Boards.jsx` components taught me the importance of props and modular design. Dashboard is made using simple props drilling concept of the react   
>    Each card could display different statistics dynamically.  

> 6. **Add Session Form**  
>    The form in `Mainsession.jsx` uses `preventDefault` to avoid page reload.  
>    Learned how forms and events work in React and how to plan for future state-based storage.  

> 7. **All Sessions Page**  
>    Displaying sessions is currently a placeholder, but I planned it with future CRUD functionality in mind.  

> 8. **Styling & Layout**  
>    Tailwind CSS made styling easier, but I faced challenges with spacing, responsive design, and flex layouts.  
>    It helped me understand modern CSS practices better.  

> 9. **Two way binding**
>     in main session two way binding are added so, that  >we can write the data in the screen with the help of react. and reset button is also set


- **React Context & State**
  - Used `createContext()` and `useContext()` to manage global state.
  - `useState()` for local form inputs.

- **Adding Data to Array**
  - Immutable update using spread operator: `setDataArray([...DataArray, newSession])`.
  - Avoids mutating the original array; React state updates asynchronously.

- **Falsy and truthy concept & Early Exit**
  - Guard clauses to stop function if inputs are invalid:
    ```js
    if (!subject || !hour || !date) {
      alert("Please fill all required fields!");
      return;
    }
    ```
  - `!variable` checks for falsy values: `""`, `0`, `null`, `undefined`, `false`, `NaN`.

- **JavaScript Fundamentals**
  - Spread operator `[...array]` for copying arrays.
  - `.trim()` to ignore whitespace-only inputs.


# React Context Debugging Session

## Problem
`console.log` in `DMain` component wasn't showing updated data after adding sessions in `Mainsession`.

## Root Cause
Components were on different pages using conditional rendering:

```javascript
{page === "dashboard" && <Dashboard />}      // DMain is here
{page === "addSession" && <Mainsession />}   // Add session here
```

When on "Add Session" page → `DMain` is **unmounted** (not rendered)  
When navigate back to Dashboard → `DMain` mounts and shows updated data

## Solution
**This is normal React behavior!** Unmounted components don't run their effects.

### How to See Updates
1. Go to Dashboard → See initial data
2. Go to Add Session → Add new session
3. **Go back to Dashboard** → Console shows updated data ✅

## Key Learning
**Components that aren't rendered can't react to state changes. You need to navigate back to the component to see updates.**

