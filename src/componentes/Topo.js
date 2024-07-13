import { Link } from "react-router-dom";

function Topo(){

    function Menu(){
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden")

    }
    return(
        <div>
            <header id="topo" className=" w-[100%] h-[100px] bg-cyan-950 md: fle-col flex  justify-between text-white ">
            <div className="h-[100px] text-2xl    flex justify-center w-[300px] items-center">
                <h1 className="md:ext-3xl ">Israel Advogados</h1>
              </div>
           <nav className="h-600px bg-cyan-950  ">
            <div className="bg-cyan-950  w-full  ">
             <ul className=" md:flex justify-around  items-center h-[100px] w-[700px] hidden ">
             <li>
                    <Link to = "/" >Página Inicial</Link>
                </li>
                <li>
                    <Link to = "/sobre" >Sobre</Link>
                </li>
                <li>
                    <Link to = "/praticas">Práticas</Link>
                </li>
                <li>
                    <Link to="/contato" >Contato</Link>
                </li>
                <li>
                    <Link to = "agendamento">Agendamento Online</Link>
                </li>
                <li>
                    <Link>Blog</Link>
                </li>
                </ul>
          
           <div className=" md:hidden mr-2  w-[100%] flex ">
            <button onClick={Menu} id="menuBotao" type="button" className="inline-flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
                    <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path></g>
                    </svg>
            </button>
         
           </div>
           <div id="menu" className=" border-solid border-2 border-black  md:hidden hidden relative: right-[0px] h-[400px] absolute  bg-cyan-950 flex flex-col  justify-around items-center w-[100%] ">
               <div className=" px-2 pt-2 pd-3 sm:px-3 flex justify-center items-center ">
                <ul className="   flex items-center flex-col h-[400px] w-[100%]   text-white justify-around ">
                <li>
                    <Link to = "/" >Página Inicial</Link>
                </li>
                <li>
                    <Link to = "/sobre" >Sobre</Link>
                </li>
                <li>
                    <Link to = "/praticas">Práticas</Link>
                </li>
                <li>
                    <Link to="/contato" >Contato</Link>
                </li>
                <li>
                    <Link to = "agendamento">Agendamento Online</Link>
                </li>
                <li>
                    <Link>Blog</Link>
                </li>
                 </ul>
               </div>
           </div>
        </div>
        </nav>
        </header>
        </div>
    )
 
}

export default Topo