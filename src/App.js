import { BrowserRouter,Route,Routes } from "react-router-dom";


import Home from "./Paginas/Home"
import Sobre from "./Paginas/Sobre"
import Praticas from "./Paginas/Praticas"
import Contato from "./Paginas/Contato";
import Agendamento from "./Paginas/Agendamento";

import Topo from "./componentes/Topo";
import Footer from "./componentes/Footer";

function App ()
{
  return(
    <div>
   <BrowserRouter>
   <Topo/>
    <Routes>
       <Route path = '/' element = {<Home/>}  />
       <Route path = '/sobre' element = {<Sobre/>}  />
       <Route path = '/praticas' element = {<Praticas/>}  />
       <Route path = '/contato' element = {<Contato/>}  />
       <Route path = '/agendamento' element = {<Agendamento/>}  />
    </Routes>

    <Footer/>
   </BrowserRouter>

    </div>
  )
}
export default App;
