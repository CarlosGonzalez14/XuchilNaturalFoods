import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomTabBar from "./components/BottomTabBar";
import ProcessControl from "./pages/ProcessControl";
import Logbook from "./pages/Logbook";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <div className="pb-16"> 
        <Routes>
          <Route path="/process-control" element={<ProcessControl />} />
          <Route path="/logbook" element={<Logbook />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<ProcessControl />} />
        </Routes>
      </div>
      <BottomTabBar />
    </Router>
  );
}

export default App;
