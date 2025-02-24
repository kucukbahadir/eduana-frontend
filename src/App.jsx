import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-7xl m-0 mx-auto p-8 text-center'>
      <div className='flex justify-center mt-40 mb-4'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="size-24 p-6" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="size-24 p-6 animate-spin [animation-duration:10s]" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card p-8">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-muted-foreground">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
