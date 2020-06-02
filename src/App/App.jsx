import React from "react";
import Navigation from "./Components/Navigation/Navigation";


export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTitle: true,
            title: ""
        }
    }

    toggleButton = () => {
        this.setState({
            showTitle: !this.state.showTitle
        });
    };

    handleTitleInput = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    render() {

        return <div className={"app-wrapper"}>
            <Navigation title={this.state.title} updateTitle={(e) => this.handleTitleInput(e)}/>

            <button className="button" onClick={this.toggleButton}>
                Drück mich
            </button>
        </div>;

    }
}

