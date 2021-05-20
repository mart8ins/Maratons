import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Profile from "./components/user/Profile";
import EventContainer from "./components/event/EventContainer";
import Event from "./components/event/Event";
import Success from "./components/utils/Success";
import RunnersList from "./components/runners/RunnersList";
import EventRunnerList from "./components/event/EventRunnerList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RunnersContextProvider from "./context/RunnersContext";
import EventContextProvider from "./context/EventContext";
import AuthContextProvider from "./context/AuthContext";


function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <EventContextProvider>
                    <RunnersContextProvider>
                        <div className="app">
                            <Header />
                            <Switch>
                                <Route path="/" exact component={Home}></Route>
                                <Route path="/profile" exact component={Profile}></Route>
                                <Route path="/all-events" exact component={EventContainer}></Route>
                                <Route path="/event/:eventId" exact component={Event}></Route>
                                <Route path="/event/:eventId/list" component={EventRunnerList}></Route>
                                <Route path="/success" component={Success}></Route>
                                <Route path="/list" component={RunnersList}></Route>
                            </Switch>
                            <Footer />
                        </div>
                    </RunnersContextProvider>
                </EventContextProvider>
            </AuthContextProvider>
        </BrowserRouter>

    )
}

export default App;