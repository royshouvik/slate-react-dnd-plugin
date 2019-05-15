import React, { Component } from "react";
import Editor from "./Editor";
import "./App.css";

import DragDropContainer from "../../dist/container";

class App extends Component {
    render() {
        return (
            <div className="App">
                <DragDropContainer>
                    <div className="wrapper">
                        <div className="editor">
                            <Editor />
                        </div>
                    </div>
                </DragDropContainer>
            </div>
        );
    }
}

export default App;
