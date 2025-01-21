import * as React from "react";
import * as ReactDOM from "react-dom/client";
import QuestionList from "./QuestionList";

const App = () => {
    return (
        <div className="container">
            <h1>Hello This is from Application</h1>
            <QuestionList/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

// document.addEventListener('DOMContentLoaded', () => {
//     ReactDom.render(<App />, document.getElementById('root'))
// })

export default App