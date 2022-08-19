import './App.css'

function App() {
  const paragraphes: string[] = [
      "toto",
      "tata",
      "titi",
      "tutu"
  ];

  return (
    <div className="App">
      {paragraphes.map(paragraphe =>
          <div>{paragraphe}</div>)}
    </div>
  )
}

export default App
