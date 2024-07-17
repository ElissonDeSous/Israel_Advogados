import React from "react"
import { useState } from "react"
import emailJS from "@emailjs/browser"


function Agendamento(){
    const [Name,setName ] = useState("")
    const [Email,setEmail ] = useState("")
    const [Message,setMessage ] = useState("")
    const [erro, setErro] = useState("")
    const [sucesso, setSucesso]  = useState("")

    function sendEmail(e){
        e.preventDefault()
      
        if(Name === "" || Email === "" || Message === ""){
            setErro("Preencha todos os campos")
            setSucesso("")
            return;
        }

       
         const templateParams = {
            from_Name: Name,
            Message: Message,
            Email: Email
         }
        emailJS.send("service_idw59ko",  "template_b4t86hg", templateParams, "m-uaFHSj99eKGzOag")
        .then((response)=>{
           setSucesso("Formulario enviado com sucesso")
            setName('');
            setEmail('');
            setMessage('');  
            setErro("");    
            
        }, (erro)=>{
            console.log("ERRO: ", erro)
        }
    
    )
        
    }

    return(
        <div>
             <div className="flex flex-col justify-center items-center h-[600px">
        
        <div>
          <h2 className=" text-2xl mt-11 mb-11 lg:text-3xl">Agendamento Online</h2> 
        </div>

        <form action="" onSubmit={sendEmail} className="flex justify-around flex-col lg:h-[400px]">
           <input className=" mb-6 border-solid border-2 border-black h-[50px] p-8 w[300px] " type="text" placeholder="Digite seu nome" name="" id="" onChange={(e)=> setName(e.target.value)} value={Name} />


           <input className=" mb-6 border-solid border-2 border-black h-[50px] p-8" type="email" placeholder="Digite seu email" name="" id="" onChange={(e)=> setEmail(e.target.value)} value={Email} />

           <textarea placeholder="Digite sua mensagem... " className=" mt-6 p-8 border-solid border-2 border-black  lg:h-[400px] w-[300px] lg:w-[700px]" name="" id="" onChange={(e)=> setMessage(e.target.value)} value={Message}>
               
           </textarea>
           <div>
                 <h2 className="text-red-500 text-center font-bold text-2xl">{erro}</h2>
           </div>
           <div>
                 <h2 className="text-green-500 text-center font-bold text-2xl">{sucesso}</h2>
           </div>
           <div className="flex justify-center">
           <input type="submit"  value="Enviar"  className="p-2 mt-6 w-[300px] text-2xl h-[50px] cursor-pointer text-white bg-green-500" />
           </div>
          
        </form>
      </div>
      <div className="flex fixed bottom-[50px] left-[300px] m-2 items-center lg:fixed lg:bottom-2 lg:left-[1200px]  ">
         
         <a href="https://wa.me/12997917063?text=Olá, Dr. Israel! Gostaria de marcar uma consulta." target="_blank"><img className="w-[50px]" src= "https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-1.png" alt=""/></a>
      </div>
        </div>
       
    )
}
export default Agendamento