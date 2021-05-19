import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import EventContainer from "./components/event/EventContainer";
import Event from "./components/event/Event";
import Success from "./components/utils/Success";
import RunnersList from "./components/runners/RunnersList";
import EventRunnerList from "./components/event/EventRunnerList";
import { BrowserRouter, Route } from "react-router-dom";
import RunnersContextProvider from "./context/RunnersContext";


function App() {
    return (
        <BrowserRouter>
            <RunnersContextProvider>
                <div className="app">
                    <Header />
                    <Route path="/" exact component={EventContainer}></Route>
                    <Route path="/event/:eventId" exact component={Event}></Route>
                    <Route path="/event/:eventId/list" component={EventRunnerList}></Route>
                    <Route path="/success" component={Success}></Route>
                    <Route path="/list" component={RunnersList}></Route>
                    <Footer />
                </div>
            </RunnersContextProvider>
        </BrowserRouter>

    )
}

export default App;