import type { Component } from "solid-js";
import { css } from "lightwindcss";

const App: Component = () => {
  return (
    <div>
      <div
        className={css`
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        Hello, world!
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        Hello, world!
      </div>
    </div>
  );
};

export default App;
