import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Loading from "./Components/Loading/Loading";
import Cart from "./Components/Cart/Cart";
import {allBooks} from "../api";
import BookListing from "./Components/BookListing/BookListing";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            books: [],
            cart: [],
            isDrawerOpened: false
        }
    }

    //wird direkt nach dem erstellen (mounten) der Komponente ausgeführt
    componentDidMount() {
        allBooks()
            .then(books => {
                this.setState({books})
            })
            .catch(e => console.error(e))
            .finally(() => {
                this.setState({
                    loading: false
                })
            })
    }

    //wird direkt nach dem zerstören der komponente ausgeführt
    componentWillUnmount() {
    }

    static getDerivedStateFromProps() {
        return {}
    }

    addItemToCart = (book) => {

    };

    removeItemFromCart = (index) => {

    };

    toggleDrawer = () => {
        this.setState({
            isDrawerOpened: !this.state.isDrawerOpened
        })


    };

    render() {

        const {books, loading, cart, isDrawerOpened} = this.state;

        const getGeneratedClass = (defaultClass) => {
            return defaultClass;
        };

        return <div>
            <Navigation toggleDrawer={this.toggleDrawer}
                        isDrawerOpened={isDrawerOpened}/>

            <Loading loading={loading}/>

            <div className={getGeneratedClass("main-wrapper drawer-opened")}>
                <div className="main-col-wrapper">
                    <div className="content-wrapper">
                        <BookListing
                            books={books}
                            addItemToCart={this.addItemToCart}
                            isDrawerOpened={isDrawerOpened}
                            toggleDrawer={this.toggleDrawer}
                        />
                    </div>
                </div>
            </div>
            <div className={getGeneratedClass("drawer-wrapper drawer-opened")}>
                <Cart cart={cart} removeItemFromCart={this.removeItemFromCart}/>
            </div>
        </div>
    }

}
