import { DraggableCore } from "react-draggable";
import "./App.css";

interface Paragraph {
  id: number;
  value: string;
}

function App() {
  const paragraphes: Paragraph[] = [
    { id: 1, value: "toto" },
    { id: 2, value: "tata" },
    { id: 3, value: "titi" },
    { id: 4, value: "tutu" },
  ];

  const ys: Map<number, number> = new Map();
  console.log(ys);

  return (
    <div className="App">
      <div>
        {paragraphes.map((paragraphe) => (
          <DraggableCore
            // onDrag={(e) => console.log("drag", e)}
            onStart={(e) => console.log("start", e)}
            onStop={(e) => console.log("stop", e)}
          >
            <div
              ref={(ref) => {
                ys.set(paragraphe.id, ref?.getBoundingClientRect().y!);
              }}
            >
              {paragraphe.value}
            </div>
          </DraggableCore>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default App;
