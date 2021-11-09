import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { mainTheme } from "./style/theme";
import HomePage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/Aboutpage/Aboutpage";
import Gmls from "./pages/GmlsPage/GmlsPage";
import NvtdPage from "./pages/NvtdPage/NvtdPage";
import NVTDBlogPage from "./pages/NvtdPage/NvtdBlogPage";
import GmlsBlogPage from "./pages/GmlsPage/GmlsBlogPage";


function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path='/gmls' component={Gmls} />
              <Route exact path='/nvtd' component={NvtdPage} />
              <Route exact path='/nvtd/:nvtdId' component={NVTDBlogPage} />
              <Route exact path='/gmls/:gmlsId' component={GmlsBlogPage} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
