import React from 'react'
import { Button, Progress, Input } from 'vampire-ui'

import 'vampire-ui/dist/index.css'

const App = () => {
  return <div>
    <Button label="hey">Hey</Button>
    <Progress.Spinner label="Hey">

    </Progress.Spinner>
    <Input label="Name" children="Name is required" onChange={(e)=>e.target.value} placeholder="Enter Name"/>
  </div>
}

export default App
