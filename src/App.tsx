import { useState } from "react"
import { ItemSuggestion } from "./components/ItemSuggestion"

type ProgressType = 'pending' | 'started' | 'done'
//pending deixara de ser pendente e começa a se inicializar e termina, assim: 1-pendente 2-começou 3- termino


function App() {
  const [progess, setProgress] = useState<ProgressType>('pending')
  const [textarea, setTextArea] = useState<string>('')
  const [chat, setChat] = useState<string[]>([])

  function handleSubmitChat(){
    if(!textarea){
      return
    } 
   if(progess === 'pending'){
      setChat(text => [...text, textarea])
      setChat(text => [...text, 'Aqui será a pergunta gerada por ia'])
      console.log(chat)
      setProgress('started')
   }
  }

  console.log(textarea)
  
  return (

    <div className="container">
      <div className="sidebar">
        <details open className="suggestion">
          <summary >Tópicos sugeridos </summary>
          <ItemSuggestion title="HTML"/>
          <ItemSuggestion title="javaScript"/>
          <ItemSuggestion title="CSS"/>
          <ItemSuggestion title="TypeScript"/>
        </details>

        <details open className="historic">
          <summary>Históricos </summary>
          <ItemSuggestion title="Java"/>
          <ItemSuggestion title="PHP"/>
        </details>
      </div>

      <div className="content">
       {progess === 'pending' && (
        
          <div className="box-home">
            <span>Ola, eu sou o</span>
            <h1>teach<span>.me</span></h1>
            <p>
            estou aqui para te ajudar nos seus estudos. Selecione um dos tópicos sugeridos ao lado ou digite um tópico que deseja estudar para começarmos
            </p>
          </div>
        )}

        {progess !== 'pending' && (
        
        <div className="box-chat">
          {chat[0] && (
            <h1>Você está estudando sobre <span>{chat[0]}</span></h1>
          )}

          {chat[1] && (
               <div className="question">
               <h2><img src="./assets/question.svg" /> Pergunta</h2>
               <p>{chat[1]}</p>
             </div>
          )}

         {chat[2] && (
           <div className="answer">
            <h2>Sua Resposta</h2>
            <p>{chat[2]}</p>
          </div>
         )}

          {chat[3] && (
            <div className="feedback">
                <h2>Feedback teach<span>.me</span></h2>
                <p>{chat[3]}</p>
            <div className="actions">
              <button>Estudar novo tópico</button>
            </div>
          </div>
          )}
        </div>
        )}
        
        <div className="box-input">
            <textarea 
              value={textarea}
              onChange={element => setTextArea(element.target.value)}
              placeholder={
                progess === 'started' ? "insira a sua resposta..." : "Indira o tema que deseja estudar..."
              }
            />
            <button onClick={handleSubmitChat}>{progess === 'pending' ?  'Enviar pergunta' : 'enviar resposta'}</button>
          </div> 

        <footer className="box-footer">
          <p>teach<span>.me</span></p>
        </footer>
      </div>
    </div>

  )
}

export default App
