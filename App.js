const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[React.createElement("h1",{},"I m first grandson"),React.createElement("h2",{},"I m first grandaughter")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I m first grandson"),React.createElement("h2",{},"I m first grandaughter")])])

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)