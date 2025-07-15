import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {

  return (
    <>
      <Routes>
          <Route index element={ <HomePage/>}/>
          <Route path="*" element={ <NotFoundPage/>}/>
      </Routes>
   
     
  
    </>
  )
}

export default App
