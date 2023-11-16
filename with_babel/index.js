/**
 * babel allows you to write JSX syntax
 */


// Corrected the function and moved code outside
function createButton() {
    const [isLiked, setLike] = React.useState(false);

    if (isLiked) {
        return <h1>you liked it!</h1>;
    } else {
        // Create an element of type button to like the post and return it
        return <button onClick={()=>setLike(true)}>Like</button>
    }
}

// Grab the root element where the new element should be injected
const rootElement = document.getElementById("root");

// Create a root element using rootElement
const root = ReactDOM.createRoot(rootElement);

// Call the createButton function and render the result
root.render(React.createElement(createButton));