import React from 'react'
import { Button } from 'vampire-ui'
import 'vampire-ui/dist/index.css'

const App = () => {
  return <div className='bg-white w-screen h-screen flex items-center justify-center space-x-4'>
    <Button size='sm' className="text-green-400">Request UberX</Button>
    <Button size='md'>Request UberX</Button>
    <Button size='lg'>Request UberX</Button>
  </div>
}

export default App
