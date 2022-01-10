import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Layout from "./components/Layout/Layout";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/posts/:postID" element={<PostDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
