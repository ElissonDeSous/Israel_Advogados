
import instagran from "./img/instagram-removebg-preview.png"
import OutlookIcon from "./img/IconOutlook.png"
function Contato(){
  return(
    <div>
     <section className=" mt-[20px] ">
           <div className="flex  flex-col lg:items-center     lg:w-[100%]   ">
            <h2 className=" text-4xl flex justify-center m-[20px]">Entre em contato</h2>
            <div className="h-[200px] flex flex-col  w-[400px]">
            <div className="flex m-2   items-center">
                    <img className="w-[50px]"    src= "https://cdn-icons-png.freepik.com/256/3955/3955024.png?semt=ais_hybrid" alt=""/>

                    <a href="https://www.instagram.com/israel.advocacia/">
                    <p className="m-2">@israel.advocacia</p>
                    </a>
                    
             
               </div>
                
             <div className="flex m-2 ">
         
                <img className="w-[50px]" src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-originale.png" alt=""/>
                <a href="https://www.linkedin.com/in/israel-oliveira-pereira-a4a629150/">
                <p className="m-2">Israel Oliveira Pereira
                </p></a>
                
             </div>
             <div className="flex m-2 items-center">
                <a href="" target="_blank"><img className="w-[50px]" src="https://www.liblogo.com/img-logo/ou154oc7d-outlook-logo-outlook-free-icon-of-circle-icons.png" alt=""/></a>
                <p className="m-2">israel.advocacia@outlook.com
                </p>
             </div>
             
           </div>
          
              <div className="flex fixed bottom-[50px] left-[300px] m-2 items-center lg:fixed lg:bottom-2 lg:left-[1200px]  ">
         
                 <a href="https://wa.me/12997917063?text=Olá, Dr. Israel! Gostaria de marcar uma consulta." target="_blank"><img className="w-[50px]" src= "https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-1.png" alt=""/></a>
          </div>
            </div>
                    
        </section>

    </div>
  )
}

export default Contato