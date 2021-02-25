import Home from './pages/home/home'
import './App.css';
import {
  Route,
  Redirect ,
  BrowserRouter as Router
} from 'react-router-dom';
import BlogDetail from './pages/blog-detail/blog-detail';
import BlogEdit from './pages/blog-edit/blog-edit';

const App = () => {     
  return (
    <div className="App">      
      <Router>
      <Route path="/blog-details/:id">
        <BlogDetail />
      </Route>
      <Route path="/blog-edit/:id">
        <BlogEdit />
      </Route>
      <Route path="/blog-create">
        <BlogEdit />
      </Route>
       <Route path="/home">
        <Home />
      </Route>
      <Route exact path="*">
<Redirect to="/home" />
</Route>
    </Router>
    </div>
  );
}

export default App;
