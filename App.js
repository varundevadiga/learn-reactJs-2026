
/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *        <h1>hello h1</h1>
 *        <h1>hello h1</h1>
 *      </div>
 *      <div id="child2">
 *        <h1>hello h1</h1>
 *        <h1>hello h1</h1>
 *      </div>
 * </div>
 * 
 */
const parent = React.createElement(
    "div", {id: "parent"}, 
    [
    React.createElement(
        "div",
        {id: "child1"},
        [
            React.createElement("h1", {}, "I am a h1 tag from child1"), 
            React.createElement("h2", {}, "I am a h2 tag from child1")
        ]
    ),  React.createElement(
        "div",
        {id: "child2"},
        [
            React.createElement("h1", {}, "I am a h1 tag from child 2"), 
            React.createElement("h2", {}, "I am a h2 tag from child 2")
        ]
    ) ]

);

// const heading = React.createElement("h1", {id:  "heading"}, "Hello from react!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

