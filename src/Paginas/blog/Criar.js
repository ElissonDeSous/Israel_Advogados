import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useInsertDocument } from "../../hooks/useInsertDocumnt";

function Criar (){
    

    const [titulo, setTitulo]= useState("");
    const [imagem, setImage] = useState("");
    const [texto,setTexto] = useState("")
    const [formError, setFormError] = useState("")

    const{insertDocument} = useInsertDocument("posts");


    const navigate = useNavigate();
    function Enviarpost(event){
        event.preventDefault();

        setTitulo("");
        setImage("");
        setTexto("");

        try{
             new URL(imagem)
        }catch(error){
             console.log("imagem precisa ser URL")
        }
        insertDocument({
            titulo,
            imagem,
            texto
        })
        navigate("/blog")
    }
    return(
        <div>
            <div className="flex flex-col justify-center items-center h-[400px]"    >
                <h1 className="m-[20px] text-4xl font-bold">Painel Administrativo</h1>
                <form onSubmit={Enviarpost} className="flex flex-col   ">
                    <input className="border-solid border-2 mb-6 border-black" type="text" placeholder="Insira um titulo" onChange={(e)=> setTitulo(e.target.value)} value={titulo}/>


                    <input className="border-solid border-2 mb-6 border-black" type="text" placeholder="insira URL da imagem" onChange={(e) => setImage(e.target.value)} value={imagem}/>


                     <textarea placeholder="Insira algum conteudo " className=" border-solid border-2 border-black w-[400px] mb-6" onChange={(e)=> setTexto(e.target.value)} value={texto}>
                         
                     </textarea>
                     <button  className="border-solid border-2 bg-green-500 text-black font-bold border-black w-[400px]">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Criar