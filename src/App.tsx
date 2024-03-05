
import Header from './components/Header'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionImpostoRenda from "./components/SectionImpostoRenda";

function App() {


  return (
    <>
      <Header/>
        <BrowserRouter>
            <Routes>
              <Route path='/imposto-renda' element={<SectionImpostoRenda/>}/>
            </Routes>
        </BrowserRouter>
      <Main/>
    </>
  )
}

export default App
