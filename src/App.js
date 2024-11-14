import { Route, Routes, Switch } from "react-router";
import routesConfig from "@routes/routesConfig.js"

import Footer from "@components/Footer"
import Header from "@components/Header";

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Routes>
            {routesConfig.map((route) => (
                <Route
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
