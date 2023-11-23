import { useState, useEffect } from 'react'
import './Main.css'
import axios from 'axios'


type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
  }

export default function Main(){
    const [texto,setTexto]=useState("");
    const [filmes, setFilmes]=useState,<FilmeType[]>([]);

    useEffect(()=> {
      const fetchData = async () => {
        try {
          const saida = await axios.get<FilmeType[]>(URL_API);
          setFilmes(saida.data);
        }
        catch(error){
          console.log('Erro ao buscar dados!', error);
        }
      };

      fetchData ();
    }
 )

 function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
  setTexto(e.target.value)
 }

 return(
  <>
<div className='campodepesquisa'></div>

<main className='content-main'>
  {filmes.filter((filme)=>
  filme.titulo.replace(/\s/g, '').toLowerCase().includes(texto.replace(/\s/g, '').toLocaleLowerCase())
  )
  .map((filme)=>
  <Filme id={filme.id} titulo={filme.titulo} sinopse={filme.sinopse} imagem={filme.imagem}/>)
  }
</main>
  </>
 )
}
      