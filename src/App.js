import Signup from "./Components/Signup/Signup.jsx";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./Components/SignInForm/registrationForm.js";
import { Provider } from "react-redux";
import store from './Components/stores/index.js';
import Protected from "./Components/protected/protected.js";
import Twitterdata from './Components/data/User.json';
import SearchBar from "./Components/Trends/Trends.js";

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/registrationForm" element={<RegistrationPage />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
      </Provider>
      <SearchBar placeholder="search twitter" data={Twitterdata}/>
    </div>
  );
}

export default App;
