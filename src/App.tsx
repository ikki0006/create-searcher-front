import Button from "@mui/material/Button";
import { useState } from "react";
import styles from "./app.module.scss";
import reactLogo from "./assets/images/react.svg";
import Header from "./components/header";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className={styles.logo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="styles.read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button variant="outlined">Hello World</Button>
    </div>
  );
}

export default App;
