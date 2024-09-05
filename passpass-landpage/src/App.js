// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='title-container'>
          <h1>PassPass BETA (v0.9.1)</h1> <a href="https://github.com/Zac-Milioli/PassPass-BETA"><img src="../favicon.ico" alt="lock icon" width="80" height="80"/></a>
        </div>
      </header>
      <main className='common-text'>
        <div className='left-align'>
          <h2>Faça suas contas muito mais seguras de forma rápida e simples!📱💻</h2>
          <p>
            Com <strong>PassPass</strong> você não precisa mais se preocupar com o risco de descobrirem suas senhas. Usando um complexo sistema e processos para lidar com as informações inseridas, garantem que a suas senhas sejam todas geradas com máxima segurança, total anonimidade e em um piscar de olhos! 😉
          </p>
        </div>
        <br />
        <br />
        <div className='right-align'>
          <h2>Menos perrengue para lembrar suas dezenas de senhas 🤯</h2>
          <p>
            O <strong>PassPass</strong> lembra por você! Bom, na verdade não, mas... Nosso sistema não armazena <strong>NENHUMA</strong> informação de nossos usuários, porém, caso as informações que você insira no momento de geração sejam as mesmas, o <strong>PassPass</strong> vai te entregar a mesma senha! Nada mais de administradores de senha em cada computador, caderninho de senhas e muito menos senhas em um arquivo de texto 😅
          </p>
        </div>
        <br />
        <br />
        <div className='left-align'>
          <h2>Nada mais de malícia! 💣</h2>
          <p>
            O sistema utilizado no <strong>PassPass</strong> foi cautelosamente pensado para que a engenharia reversa seja não apenas muito complexa, mas também para que não entregue o resultado completo no final. O que isso quer dizer? Não podemos contar, é a fórmula secreta <strong>PassPass</strong>🔒. Mas garantimos que com as senhas geradas pelo <strong>PassPass</strong> você estará mais seguro.
          </p>
        </div>
        <br />
        <br />
        <div className='center-align'>
          <h2>Poupe seu tempo digitando longas senhas ⌨</h2>
          <p>
            Simplesmente copie e cole os resultados gerados pela aplicação 😄
          </p>
        </div>
        <br />
        <br />
        <div className='left-align'>
          <h2>Nada de cobranças 💸💸</h2>
          <p>
            <strong>PassPass</strong> é gratuito. Temos como objetivo melhorar a segurança dos usuários da internet.
          </p>
          <p>
            Caso tenha interesse de contribuir com o projeto ou apoiar o criador, entre em contato pelo <a href="https://www.linkedin.com/in/zac-milioli/" className='hyperlink'>Linkedin</a> ou envie doações para meu pix com uma mensagem motivacional 😎 
          </p>
          <p>
            (Banco Inter, chave: zacmilioli@gmail.com)
          </p>
        </div>
        <br />
        <br />
      </main>
      <footer className='footer'>
        <p>
          <strong>PassPass</strong> é uma aplicação desenvolvida por Zac Milioli com design de Eduardo Kipper
        </p>
      </footer>
    </div>
  );
}

export default App;