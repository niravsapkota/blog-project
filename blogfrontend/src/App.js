import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import BlogListPage from './pages/BlogListPage'
import BlogPage from "./pages/BlogPage";
import BlogUpdatePage from "./pages/BlogUpdatePage";
import BlogCreate from "./pages/BlogCreatePage";

function App() {
  return (
    <Router>
    <div className="container">
      <div className="app">
      <Header />
      <Routes>
      <Route path="/" exact Component={BlogListPage} />
      <Route path="/blog/:id" Component={BlogPage} />
      <Route path="/blog/:id/update" Component={BlogUpdatePage} />
      <Route path="/blog/create" Component={BlogCreate} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
