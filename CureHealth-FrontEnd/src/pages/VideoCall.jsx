import { useState } from "react";

function App() {
  const [joined, setJoined] = useState(false);
  return (
    <div className='ml-10 flex items-center justify-center'>
      <div>
        <h1>Video Call</h1>
      </div>
      <div>
        <button onClick={() => setJoined(true)}>Join Room</button>
      </div>
    </div>
  );
}

export default App;