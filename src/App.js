// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Table from "./components/Table.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MananTable from "./components/Table.js";
// import EnhancedTable from "./components/Table.js";
// import Ui from "./components/Ui.js";
import DataTable from "./components/DataTable.js";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="" element={<Form />}>
          
        </Route>
        <Route path="Table" element={<Table />}></Route>
      </Routes> */}
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="Table" element={<DataTable />} />
          {/* <Route path="UI" element={<Ui />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
