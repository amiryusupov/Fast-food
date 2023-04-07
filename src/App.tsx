import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./route";
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./assets/style/Global.style";
import theme from "./assets/style/themes";
import Navbar from "./components/Home/Navbar";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Navbar/>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              {routes.map((item) => {
                return (
                  <Route
                    key={item.id}
                    index
                    path={item.path}
                    element={item.component}
                  />
                )
              })}
            </Routes>
          </Suspense>
      </ThemeProvider>
  );
}

export default App;
