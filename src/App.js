import React from "react";
import axios from "axios";
import './App.css'

class App extends React.Component {
    // state is a global object
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();//calls fetch advice
    }


    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });//we dont do ({advice : advice})as names are same so we can omit the latter

            })

            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        const {advice} = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;