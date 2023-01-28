import { BrowserRouter, Route, Routes } from "react-router-dom"
import History from "./Pages/History"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import GlobalStyle from "./Styles/global"


function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
    </BrowserRouter>
  )
}

export default AppRoutes
