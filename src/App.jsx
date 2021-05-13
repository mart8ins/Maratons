import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import EventContainer from "./components/layout/EventContainer";
import Event from "./components/layout/Event";
import Success from "./components/layout/Success";
import RunnersList from "./components/layout/RunnersList";
import EventRunnerList from "./components/layout/EventRunnerList";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Route path="/" exact component={EventContainer}></Route>
                <Route path="/event/:eventId" exact component={Event}></Route>
                <Route path="/event/:eventId/list" component={EventRunnerList}></Route>
                <Route path="/success" component={Success}></Route>
                <Route path="/list" component={RunnersList}></Route>
                <Footer />
            </div>
        </BrowserRouter>

    )
}

export default App;