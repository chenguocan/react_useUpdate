import React from 'react';
import useUpdate from "./useUpdate"

const App = (props) => {
    return (<Child></Child>)
}

const Child = (props) => {
    const [n, setN] = React.useState(0);
    useUpdate(() => {
        console.log("变了")
    }, n)

    return (
        <div>Child{n}
            <button onClick={() => {
                setN(n + 1)
            }}>+1
            </button>
        </div>
    )
}
export default App;