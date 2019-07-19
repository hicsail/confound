import React from 'react';
import Navbar from "./components/layout/NavBar";
import Panel from "./components/instructions/Panel";
import Matrix from "./components/matrix/Matrix";
import Alerts from "./components/layout/Alerts";
import AlertState from "./context/alert/AlertState";
import MatrixState from "./context/matrix/MatrixState";

function App() {
    return (
        <AlertState>
            <MatrixState>
                <div className="App">
                    <Navbar title="Confounder Matrix" subtitle="Open-access Tool for Confounder Bias Analysis in SR"/>
                    <main id="content" className="container">
                        <Panel/>
                        <Alerts/>
                        <Matrix/>
                    </main>
                </div>
            </MatrixState>
        </AlertState>
    );
}

export default App;