import React from "react"
import { useState } from "react"
import emailJS from "@emailjs/browser"


function Agendamento(){
    const [Name,setName ] = useState("")
    const [Email,setEmail ] = useState("")
    const [Message,setMessage ] = useState("")

    function sendEmail(e){
        e.preventDefault()
        if(Email === "" || Name === "" || Message === "" ){
            alert("Preeencha todos os campos")
            return;
        }
         const templateParams = {
            from_Name: Name,
            Message: Message,
            Email: Email
         }
        emailJS.send("service_idw59ko",  "template_b4t86hg", templateParams, "m-uaFHSj99eKGzOag")
        .then((response)=>{
            console.log("email  enviado", response.status, response.text)
            setName('');
            setEmail('');
            setMessage('');      
            
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
           <div className="flex justify-center">
           <input type="submit"  value="Enviar"  className="p-2 mt-6 w-[300px] text-2xl h-[50px] cursor-pointer text-white bg-green-500" />
           </div>
          
        </form>
      </div>
        </div>
       
    )
}
export default Agendamento