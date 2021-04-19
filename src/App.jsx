import Header from "./components/layout/Header";
import EventContainer from "./components/layout/EventContainer";
import Event from "./components/layout/Event";
import Success from "./components/layout/Success";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Route path="/" exact component={EventContainer}></Route>
                <Route path="/event/:eventId" component={Event}></Route>
                <Route path="/success" component={Success}></Route>
            </div>
        </BrowserRouter>

    )
}

export default App;