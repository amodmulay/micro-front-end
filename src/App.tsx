import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { lazy, Suspense } from 'react';
const Micro2Header = lazy(() => import('../../micro2/src/components/Header'));
const MicroHeader = lazy(() => import('../../micro1/src/components/Header'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Main Project</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
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
      <div>
            <h1>Main Project</h1>
            <Suspense fallback={<div>Loading Header...</div>}>
        <MicroHeader />
        <Micro2Header />
      </Suspense>
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
