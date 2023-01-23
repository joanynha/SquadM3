import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate()

  const [nome, setNome] = useState()
  const [autor, setAutor] = useState()
  const [ano, setAno] = useState()
  const [imagem, setImagem] = useState()
  const [sinopse, setSinopse] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = {nome, autor, ano, imagem, sinopse, userId: 1};

    await blogFetch.post("/ficcaocientifica", {
     nome: nome,
     autor: autor,
     ano: ano,
     imagem: imagem,
     sinopse: sinopse,
    }) 
    alert (`Livro "${nome}" adicionado com sucesso!`);

    navigate("/");
  };
 
  return (
    <div className="new-post">
      <h2>Inserir novo livro:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="nome">Título</label>
          <input 
          type="text"
          required
          name="nome" 
          id="nome" 
          placeholder='Escreva o nome do livro'
          onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="autor">Autor</label>
          <input 
          type="text"
          required
          name="autor" 
          id="autor" 
          placeholder='Escreva o nome do autor'
          onChange={(e) => setAutor(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="ano">Ano de publicação</label>
          <input 
          type="number"
          required
          min={1000}
          max={2023}
          maxLength={4}
          minLength={4}
          name="ano" 
          id="ano" 
          placeholder='Escreva o ano de publicação'
          onChange={(e) => setAno(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="imagem">Imagem do livro</label>
          <input 
          type="text"
          required
          name="imagem" 
          id="imagem" 
          placeholder='Coloque o link da imagem'
          onChange={(e) => setImagem(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="sinopse">Sinopse</label>
          <textarea
          required
          name="sinopse" 
          id="sinopse" 
          placeholder="Escreva a sinopse"
          onChange={(e) => setSinopse(e.target.value)}>
          </textarea>
        </div>
        <input type="submit" value="Adicionar" className="btn"/>
      </form>
    </div>
  )
}

export default NewPost