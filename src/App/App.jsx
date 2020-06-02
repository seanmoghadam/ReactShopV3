import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import {allBooks} from "../api";
import Loading from "./Components/Loading/Loading";
import BookListing from "./Components/BookListing/BookListing";


export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            loading: true
        }
    }

    // wird ausgeführt wenn die Komponente initial gerendert wird
    componentDidMount() {
        allBooks()
            .then(books => {
                this.setState({
                    books,
                    loading: false
                })
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                })
            })
    }


    // wird ausgeführt wenn die Komponente aus dem React Dom entfernt wird
    componentWillUnmount() {

    }

    /* static getDerivedStateFromProps() {
          return {}
     }*/

    render() {
        console.log(this.state.books);

        const {loading, books} = this.state;


        return <main>
            <Navigation/>
            <Loading loading={loading}/>
            <div className={"main-wrapper"}>
                <div className={"main-col-wrapper"}>
                    {!loading && <BookListing books={books}/>}
                </div>
            </div>
        </main>;

    }
}

