import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/about/About";
import Layout from "./common/Layout";
import Message from "./pages/message/Message";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about-us" element={<About />} />
          <Route path="/message" element={<Message />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
