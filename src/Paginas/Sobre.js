import Israel from './img/israel.jpg'
import React from 'react'
function Sobre(){
    
    return(
        <div>
     
         <section className=" m-[20px]  flex justify-center items-center">
                 
                 <div className="flex flex-col justify-around ">
                    <div className="w-full flex justify-center">
                        <img src={Israel} className="w-[450px]" alt=""/>
                      </div>
                   <div className="w-[100%]   ">
         
                      <h2 className="font-bold text-1xl lg:text-4xl  flex justify-center m-[20px]">Sobre o Dr. Israel Oliveira Pereira</h2>
                       <p className=" m-[20px] text-1xl lg:w-[800px] text-justify ">Dr. Israel Oliveira Pereira é um advogado altamente qualificado e dedicado, com uma sólida formação acadêmica e uma experiência abrangente nas áreas cível e trabalhista. Seu escritório oferece serviços full service, garantindo um atendimento completo e personalizado para todos os seus clientes.
                    </p>
         
                    <p className="m-[20px] text-1xl lg:w-[800px]  text-justify ">
                        Graduado em Direito pela Universidade de Taubaté em 2021, Dr. Israel rapidamente se especializou em Advocacia Cível pela FMP em 2023 e concluiu suas especializações em Direito Penal e Processual Penal e Prática Penal Avançada pelo Damásio. Ele foi aprovado no XXXII Exame Unificado da OAB FGV, um marco significativo em sua carreira, e está inscrito nos quadros da OAB SP sob o número 464.844.
         
                    </p>
                    <p className="m-[20px] text-1xl lg:w-[800px] text-justify ">
                        Dr. Israel é um profissional autônomo com três anos de experiência prática, destacando-se tanto na consultoria quanto na contenciosa. Ele possui uma habilidade notável para lidar com casos complexos, sempre buscando as melhores soluções jurídicas para seus clientes. Sua fluência em inglês, aprimorada por estudos na Wizard Idiomas e intercâmbios culturais na EC Dublin, Kings School London e OHC London, o capacita a atender uma clientela diversificada e internacional. Além disso, ele possui conhecimentos básicos de espanhol e francês.
         
         
                    </p>
                    <p className="m-[20px] text-1xl lg:w-[800px] text-justify">
                        Além de suas qualificações profissionais, Dr. Israel tem um forte compromisso com o desenvolvimento pessoal e comunitário. Ele dedicou cinco anos como bolsista no Programa Escola da Família e contribuiu como voluntário de vendas na Fundação Estudar por três meses. Sua experiência no exterior, vivendo um ano fora do Brasil e visitando mais de 30 países, foi fundamental para seu crescimento pessoal e profissional.
                    </p>
                    <p className="m-[20px] text-1xl lg:w-[800px] text-justify">
                        Dr. Israel também tem um histórico acadêmico exemplar, com nota máxima em seu trabalho de graduação e participação ativa em diversos grupos de estudo. Ele é autor de trabalhos científicos apresentados no Congresso Internacional de Ciência e Tecnologia da Universidade de Taubaté (CICTED UNITAU): em 2020 sobre "A responsabilidade Cível das Empresas com Base na Lei Geral de Proteção de Dados"; em 2019 sobre "Acidente em Via Urbana na Cidade de Taubaté"; e em 2018 sobre "As Diversas Interpretações do Direito". Ele também foi aluno especial na Universidade Estadual de Santa Cruz (UESC).
         
                    </p>
                    <p className=" text-1xl m-[20px] text-1xl lg:w-[800px] text-justify">    
                        Dr. Israel Oliveira Pereira está sempre em busca de novas oportunidades e desafios aberto a expandir suas áreas de atuação e contribuir significativamente para o campo jurídico. Sua dedicação, competência e experiência o tornam um profissional exemplar e um valioso  recurso para qualquer cliente ou organização.
         
                    </p>
                   </div>
                    

                   
                 </div>
                 <div className="flex fixed bottom-[50px] left-[300px] m-2 items-center lg:fixed lg:bottom-2 lg:left-[1200px]  ">
         
                       <a href="https://wa.me/12997917063?text=Olá, Dr. Israel! Gostaria de marcar uma consulta.  " target="_blank"><img className="w-[50px]" src= "https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-1.png" alt=""/></a>
               </div>
           </section>
   
        </div>
       
    )
}

export default Sobre