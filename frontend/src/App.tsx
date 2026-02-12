import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

import { useState } from "react";
function App() {
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
  ];

  const [alertActive, setalertActive] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  // Technically, you want each button to have set only one state, but for this exercise, it's w/e
  const handleAlertIsVisible = () => {
    setalertActive(!alertActive);
  }

  return (
    <div>
      {alertActive &&
        <Alert onClose={handleAlertIsVisible}>
          <span>It's an alert!</span>
        </Alert>}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />


      <Button onClick={handleAlertIsVisible}>Click me</Button>
    </div>
  )
}

export default App;