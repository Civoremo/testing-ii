import React from "react";

class Players extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [
                { id: 1, name: "Jonny B Good" },
                { id: 2, name: "Al Coholic" },
                { id: 3, name: "Bob Itsaboythreeouncesfivepounds" },
            ],
            strikes: 0,
            balls: 0,
            hits: 0,
            fouls: 0,
        };
    }

    render() {
        return (
            <div>
                <div>
                    <div data-testid="strikesOutput">
                        {this.state.strikes + " Strikes"}
                    </div>
                    <div>{this.state.balls + " Balls"}</div>
                    <div>{this.state.hits + " Hits"}</div>
                    <div>{this.state.fouls + " Fouls"}</div>
                </div>
                <div>
                    <button>Strike</button>
                    <button>Ball</button>
                    <button>Hit</button>
                    <button>Foul</button>
                </div>
            </div>
        );
    }
}

export default Players;
