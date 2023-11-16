// Corrected the function and moved code outside
function createButton() {
    const [isLiked, setLike] = React.useState(false);

    if (isLiked) {
        return React.createElement("h1", null, "You liked it!");
    } else {
        // Create an element of type button to like the post and return it
        return React.createElement(
            "button",
            { onClick: () => setLike(true) },
            "Like"
        );
    }
}

// Grab the root element where the new element should be injected
const rootElement = document.getElementById("root");

// Create a root element using rootElement
const root = ReactDOM.createRoot(rootElement);

// Call the createButton function and render the result
root.render(React.createElement(createButton));