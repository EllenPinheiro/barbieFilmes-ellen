import { useState } from 'react'
import Lupa from '..//img/icone-lupa-rosa.png'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
  id:number,
  titulo:string,
  sinopse:string,
  imagem:string
}

export default function Main() {
  //let textodigitado = 'Barbie'
  //Hooks são funções do React que ajudam a gente a fazer tarefas
  //específicas
  const [texto,setTexto]=useState("")

  const filmes:FilmeType[] = [
      {
          id:1,
          titulo:'Barbie',
          sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
          imagem:'/barbie.png'
      },
      {
          id:2,
          titulo:'Filme Barbie',
          sinopse:'Depois de ser expulsa da Barbieland por ser.',
          imagem:'/KEN.png'
      },
      {
          id:3,
          titulo:'Filme Barbie',
          sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
          imagem:'/boneca.jpg'
      }
  ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um filme</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Filme'
                       onChange={TrataTexto} />
                       <img src={Lupa} alt="" />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
              

        {/* use algo do vetor para tentar criar os filmes */}
        {/* <Filme titulo='Barbie Live Action' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie (1).png' />
         <Filme titulo='Barbie Segredo das Fadas' sinopse='Mundos mágicos, fadas e cavalos voadores são alguns dos
         elementos encontrados neste filme da Barbie. Ela precisa viajar a um mundo encantado para salvar Ken.
          Nesta aventura, serão revelados segredos e algumas amizades serão testadas.' imagem='/Barbie_Fairy_Secret.png' />
        <Filme titulo='Barbie Moda e Magia' sinopse='Em um conto de fadas fashion, Barbie é demitida do seu emprego,
        cai num golpe e decide viajar a Paris para salvar o ateliê de moda da sua tia, que está prestes a ser fechado.'
        imagem='/barbie_modaemagia.jpg' />
        <Filme titulo='Barbie Escola de Princesas' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/BarbieEscola.jpg' />
        <Filme titulo='Barbie e o Castelo de Diamante' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbieCasteloDiamante.png' />
        <Filme titulo='Barbie - A Sereia das Pérolas' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbieSereiaPerolas.jpg' />
        <Filme titulo='Barbie e as Sapatilhas Mágicas' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie-sapatilhasmagicas.png' />
        <Filme titulo='Barbie em Vida de Sereia' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbieEm_vidadesereia.jpg' />  */}
      </main>
    
    </>
  )
}