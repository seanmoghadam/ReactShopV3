import React from "react";
import Navigation from "./Components/Navigation/Navigation";


export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTitle: true,
            title: "",
            posts: []
        }
    }

    // wird ausgeführt wenn die Komponente initial gerendert wird
    componentDidMount() {

    }


    // wird ausgeführt wenn die Komponente aus dem React Dom entfernt wird
    componentWillUnmount() {

    }

    static getDerivedStateFromProps() {
        return {}
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

