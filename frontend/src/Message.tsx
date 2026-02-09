// PascalCasing for React Functional Components
function Message() {
    const name = "Clancy";
    // JSX syntax, which looks like HTML but is actually JavaScript
    if (name) {
        return <h1>Hello {name}</h1>
    }
    return <h1>Hello World</h1>
}

export default Message;