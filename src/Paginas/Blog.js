

function Blog(){
    const Name = "Administrador"
    return(
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl m-[20px] h-[200px] flex items-center ">Dr. Israel Oliveira Pereira</h1>
            <div>
              <div className="lg:w-[800px] p-2 mt[50px]">
                <h2 className="lg:text-4xl  font-bold">{Name}</h2>
                 <h2 className="text-2xl m-[20px]">Titulo do blog </h2>
                 <p className="text-justify">orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis tellus blandit, luctus tellus quis, congue enim. Donec justo ex, sollicitudin sit amet nisi eget, egestas gravida magna. In felis ipsum, accumsan ac pharetra aliquam, dapibus sit amet eros. Aenean porta posuere risus sed tristique. Integer lacus justo, bibendum ut dolor et, hendrerit suscipit nibh. Ut sodales, risus vel facilisis mattis, quam nisi mollis augue, vel tempus ipsum arcu in augue. Nullam aliquam facilisis scelerisque. Donec finibus erat nisl, nec scelerisque arcu posuere ac. Nulla a orci tincidunt enim semper aliquet. Donec scelerisque dolor eget magna ultricies, vitae rutrum libero tempor. Sed a orci at erat suscipit tristique sed ut est.
                 orem ipsum dolor sit amet, consectetur adipiscing elit.
                 </p>
               
              </div>
          
            </div>
            <div className="flex fixed bottom-[50px] left-[300px] m-2 items-center lg:fixed lg:bottom-2 lg:left-[1200px]  ">
         
         <a href="https://wa.me/12997917063?text=Olá, Dr. Israel! Gostaria de marcar uma consulta." target="_blank"><img className="w-[50px]" src= "https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-1.png" alt=""/></a>
      </div>
        </div>
    )
}
export default Blog