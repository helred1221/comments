import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './index.css'

function App() {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const commentsLocal = JSON.parse(localStorage.getItem('comments'));

    if (commentsLocal) {
      setComments(commentsLocal);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments])

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'));

    if (login) {
      setAuthor(login.username);
    }
  }, []);

  function dataEHora() {
    const dataDeAgora = new Date();
    console.log(dataDeAgora);
    return dataDeAgora.toLocaleString('pt-BR');
  }

  const handleCommentAdd = (event) => {

    event.preventDefault()

    const newComment = {
      author: author,
      comment: comment,
      date: dataEHora()
    };
    setComments([...comments, newComment]);
  }


  return (
    <>
      <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Comentários Sobre a Situação Sócio-Econômica Brasileira</h1>

        <div className='comment-input-container'>
          <h2>O que voçê deseja comentar?</h2>
          <h2>O poder está em suas mãos!</h2>

          <input
            type="text"
            placeholder="Escreva seu comentário aqui!"
            value={comment}
            className='comment'
            onChange={(event) => setComment(event.target.value)}
            required
          />

          <button className='comment-button' onClick={handleCommentAdd}>Comentar</button>
        </div>

        <div className='comments-container'>
          <h2>Lista de Comentários já feitos</h2>

          {comments.map((item, index) => (
            <div key={index} className='comments'>
              <p>{item.author}</p>
              <p>{item.comment}</p>
              <p>Comentado em: {item.date}</p>
              <hr />
            </div>
          ))
          }

          {comments.length > 0 ? <p style={{ color: "green" }}>Total de Comentários: {comments.length}</p> : null}

        </div>

        <div className='sair-container'>
          <Link to="/"><button className='logout_button'>Sair</button></Link>
        </div>
      </div>
    </>
  )
}

export default App
