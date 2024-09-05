import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./context/store";
import PersonalInfo from "./pages/PersonalInfo";
import SalaryIndications from "./pages/SalaryIndications";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import EntryPage from "./pages/EntryPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./styles/global.css";
import { Wrapper } from "./AppStyled";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <div className="app">
              <Header />
              <Routes>
                <Route path="/" element={<EntryPage />} />
                <Route path="/personal-info" element={<PersonalInfo />} />
                <Route
                  path="/salary-indications"
                  element={<SalaryIndications />}
                />
                <Route path="/summary" element={<Summary />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
    </Wrapper>
  );
};

export default App;
