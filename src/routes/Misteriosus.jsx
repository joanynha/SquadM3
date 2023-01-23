import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import "./Home.css";
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async() => {
     
      try {

        const response = await blogFetch.get("/misteriosuspense");
        
        const data = response.data;

        setPosts(data);
      } catch (error) {
        console.log(error);
      }

    };

    useEffect(() => {
      getPosts();
    }, []);

  const deleteLivro = async (id) => {

    await blogFetch.delete(`/misteriosuspense/${id}`)
      .then(
        alert("Livro excluído com sucesso. Recarregue a página."),
        navigate('/start')
      )
      .catch((error) => {
        console.log(error)
      })
    } 

  return <div className="home">
    <h1>livros</h1>
    {posts.length === 0 ? <img className="load" src="https://retchhh.files.wordpress.com/2015/03/loading1.gif"></img> : (
      posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.nome}</h2>
          <p>{post.autor}</p>
          <p>{post.ano}</p>
          <p>{post.sinopse}</p>
          <img src={post.imagem}></img>
          <button className="btn" onClick={() => deleteLivro(post.id)}>Excluir</button>
        </div>
      ))
    )}
  </div>
}



export default Home