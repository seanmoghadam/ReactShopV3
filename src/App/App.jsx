import React from "react";

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTitle: true
        }
    }

    toggleButton = () => {
        this.setState({
            showTitle: !this.state.showTitle
        });
    };

    render() {
        console.log(this.props);

        this.props.title = "";

        return <div>
            <button className="button" onClick={this.toggleButton}>
                Drück mich
            </button>
            {this.state.showTitle ? <h1>{this.props.title}</h1> : null}
        </div>;

    }
}

