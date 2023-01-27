import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import GlobalStyle from "./Styles/global"


function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <GlobalStyle />
    </BrowserRouter>
  )
}

export default AppRoutes
