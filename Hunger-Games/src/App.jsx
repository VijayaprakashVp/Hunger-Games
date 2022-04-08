import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RestaurantDetails />} />
        <Route path="/all" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
}

export default App;
