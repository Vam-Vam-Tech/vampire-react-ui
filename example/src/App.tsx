import React from 'react'
import { Button, Progress } from 'vampire-ui'
import 'vampire-ui/dist/index.css'
import './App.css'
const App = () => {

    return (
        <>
            <div className="flex flex-row space-x-2">
                <Button color="blue">Blue</Button>
                <Button color="red" rounded="md">
                    Red
                </Button>
                <Button color="indigo" rounded="lg">
                    Indigo
                </Button>
                <Button color="pink" rounded="2xl">
                    Pink
                </Button>
                <Button color="green" rounded="full">
                    Green
                </Button>
            </div>

            <br />
            <br />
            {/* <Alert type="success">Hello</Alert> */}
        </>
    )
}

export default App
