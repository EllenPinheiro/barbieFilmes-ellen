import Filme from './../filme/Filme'
import './Main.css'
export default function Main(){
    return(
        <main className="content-main">
            <Filme titulo='Barbie Live Action' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='blabla'/>
            <Filme titulo='Barbie Sereia' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='blabla'/>
        </main>
    )
}