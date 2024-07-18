import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useInsertDocument } from "../../hooks/useInsertDocumnt";

function Criar (){
    

    const [titulo, setTitulo]= useState("");
    const [imagem, setImage] = useState("");
    const [paragrafo1,setParagrafo1] = useState("")
    const [paragrafo2,setParagrafo2] = useState("")
    const [paragrafo3,setParagrafo3] = useState("")
    const [paragrafo4,setParagrafo4] = useState("")
    const [paragrafo5,setParagrafo5] = useState("")
    const [paragrafo6,setParagrafo6] = useState("")
    const [paragrafo7,setParagrafo7] = useState("")
    const [paragrafo8,setParagrafo8] = useState("")
    const [paragrafo9,setParagrafo9] = useState("")
    const [paragrafo10,setParagrafo10] = useState("")
    const [paragrafo11,setParagrafo11] = useState("")
    const [paragrafo12,setParagrafo12] = useState("")
    const [paragrafo13,setParagrafo13] = useState("")
    const [paragrafo14,setParagrafo14] = useState("")
    const [paragrafo15,setParagrafo15] = useState("")
    const [paragrafo16,setParagrafo16] = useState("")
    const [paragrafo17,setParagrafo17] = useState("")
    const [paragrafo18,setParagrafo18] = useState("")
    const [paragrafo19,setParagrafo19] = useState("")
    const [paragrafo20,setParagrafo20] = useState("")
    const [paragrafo21,setParagrafo21] = useState("")
    const [paragrafo22,setParagrafo22] = useState("")
    const [paragrafo23,setParagrafo23] = useState("")
    const [paragrafo24,setParagrafo24] = useState("")
    const [paragrafo25,setParagrafo25] = useState("")
    const [paragrafo26,setParagrafo26] = useState("")
    const [paragrafo27,setParagrafo27] = useState("")
    const [paragrafo28,setParagrafo28] = useState("")
    const [paragrafo29,setParagrafo29] = useState("")
    const [paragrafo30,setParagrafo30] = useState("")
  

    const{insertDocument} = useInsertDocument("posts");


    const navigate = useNavigate();
    function Enviarpost(event){
        event.preventDefault();

        setTitulo("")
        setImage("");
        

        try{
             new URL(imagem)
        }catch(error){
             console.log("imagem precisa ser URL")
        }
        insertDocument({
            titulo,
            imagem,
            paragrafo1,
            paragrafo2,
            paragrafo3,
            paragrafo4,
            paragrafo5,
            paragrafo6,
            paragrafo7,
            paragrafo8,
            paragrafo9,
            paragrafo10,
            paragrafo11,
            paragrafo12,
            paragrafo13,
            paragrafo14,
            paragrafo15,
            paragrafo16,
            paragrafo17,
            paragrafo18,
            paragrafo19,
            paragrafo20,
            paragrafo21,
            paragrafo22,
            paragrafo23,
            paragrafo24,
            paragrafo25,
            paragrafo26,
            paragrafo27,
            paragrafo28,
            paragrafo29,
            paragrafo30,
        })
        navigate("/blog")
    }
    return(
        <div>
            <div className="flex flex-col justify-center items-center ">
                <h1 className="m-[20px] text-3xl xl:text-4xl font-bold">Painel Administrativo</h1>
                <form onSubmit={Enviarpost} className="flex flex-col items-center  ">
                    <input className="border-solid border-2 mb-6 w-[300px] xl:w-[900px] border-black" type="text" placeholder="Insira um titulo" onChange={(e)=> setTitulo(e.target.value)} value={titulo}/>


                    <input className=" w-[300px] xl:w-[900px] border-solid border-2 mb-6 border-black" type="text" placeholder="insira URL da imagem" onChange={(e) => setImage(e.target.value)} value={imagem}/>

 
              <div className="flex flex-col items-center ">
                <h1 className="text-2xl  mb-[10px] text-center font-bold">Párgrafo 1</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="  resize-none h-[200px] border-solid border-2 border-black w-[300px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo1(e.target.value)} value={paragrafo1}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Páragrafo 2</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo2(e.target.value)} value={paragrafo2}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 3</h1>

                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo3(e.target.value)} value={paragrafo3}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 4</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo4(e.target.value)} value={paragrafo4}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 5</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo5(e.target.value)} value={paragrafo5}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 6</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo6(e.target.value)} value={paragrafo6}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 7</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo7(e.target.value)} value={paragrafo7}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 8</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo8(e.target.value)} value={paragrafo8}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 9</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo9(e.target.value)} value={paragrafo9}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 10</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo10(e.target.value)} value={paragrafo10}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 11</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo11(e.target.value)} value={paragrafo11}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 12</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo12(e.target.value)} value={paragrafo12}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 13</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo13(e.target.value)} value={paragrafo13}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 14</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo14(e.target.value)} value={paragrafo14}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 15</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black resize-none w-[300px] h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo15(e.target.value)} value={paragrafo15}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 16</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo16(e.target.value)} value={paragrafo16}>
              
                  </textarea>

                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 17</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo17(e.target.value)} value={paragrafo17}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 18</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo18(e.target.value)} value={paragrafo18}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 19</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo19(e.target.value)} value={paragrafo19}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 20</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo20(e.target.value)} value={paragrafo20}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 21</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo21(e.target.value)} value={paragrafo21}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 22</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo22(e.target.value)} value={paragrafo22}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 23</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo23(e.target.value)} value={paragrafo23}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px]  text-center font-bold">Párgrafo 24</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo24(e.target.value)} value={paragrafo24}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 25</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo25(e.target.value)} value={paragrafo25}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 26</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo26(e.target.value)} value={paragrafo26}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 27</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo27(e.target.value)} value={paragrafo27}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 28</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo28(e.target.value)} value={paragrafo28}>
              
                  </textarea>
                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 29</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] resize-none h-[200px] xl:w-[900px] mb-6" onChange={(e)=> setParagrafo29(e.target.value)} value={paragrafo29}>
              
                  </textarea>

                  <h1 className="text-2xl mb-[10px] text-center font-bold">Párgrafo 30</h1>
                  <textarea wrap="hard" placeholder="Insira algum conteudo " className="border-solid border-2 border-black w-[300px] h-[200px] resize-none xl:w-[900px] mb-6" onChange={(e)=> setParagrafo30(e.target.value)} value={paragrafo30}>
              
                  </textarea>
                
              </div>
                   
                     <button  className="border-solid border-2 h-[50px] bg-green-500 text-black font-bold border-black w-[400px]">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Criar