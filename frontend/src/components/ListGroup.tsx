import { MouseEvent } from "react";

function ListGroup() {
    const items = [
        "New York",
        "San Francisco",
        "Tokyo",
        "London",
        "Paris"
    ];

    // Event handler
    const handleClick = (e: MouseEvent) => console.log(e)
    // You don't want to automatically call it in the return statement because it will trigger when user click on the item

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => <li
                    key={item}
                    onClick={handleClick}
                    className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;