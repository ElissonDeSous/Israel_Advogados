import Banner from ".././assets/imagemcontato.png"

function Contato(){
  return(
    <div>
     <section className=" mt-[20px] flex flex-col items-center justify-center">
           <div className="flex  flex-col lg:items-center     lg:w-[400px]   ">
            <h2 className=" text-4xl flex justify-center m-[20px]">Entre em contato</h2>
            <div className="h-[200px] flex flex-col  w-[400px]">
            <div className="flex m-2   items-center">


              <a className="flex"  href="https://www.instagram.com/israel.advocacia/">
                <img className="w-[50px]" src="https://cdn-icons-png.freepik.com/256/3955/3955024.png?semt=ais_hybrid" />
                <p className="m-2">Israel Oliveira Pereira</p>
              </a>
                    
             
               </div>
                
             <div className="flex m-2 ">
         
             <a className="flex"  href="https://www.linkedin.com/in/israel-oliveira-pereira-a4a629150/">
                <img className="w-[50px]" src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-originale.png"/>
                <p className="m-2">Israel Oliveira Pereira</p>
              </a>
            
                
             </div>
             <a className="flex relative left-2 "   href="https://israeladvogados.com/agendamento">
                <img className="w-[50px]" src="https://static-00.iconduck.com/assets.00/outlook-icon-1024x1024-5jgkdjd0.png"/>
                <p className="m-2">Israel Oliveira Pereira</p>
              </a>
            
           
             
           </div>
          
              <div className="flex fixed bottom-[50px] left-[300px] m-2 items-center lg:fixed lg:bottom-2 lg:left-[1200px]  ">
         
                 <a href="https://wa.me/12997917063?text=Olá, Dr. Israel! Gostaria de marcar uma consulta." target="_blank"><img className="w-[50px]" src= "https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-1.png" alt=""/></a>
          </div>
            </div>
            <div>
             <img width="900px" src={Banner} />
            </div>
                    
        </section>

    </div>
  )
}

export default Contato