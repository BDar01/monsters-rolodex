//import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card monster={monster} />;
        })
        }
    </div>
);

/*class CardList extends Component {
    render() {
        const {monsters} = this.props;

        return (
        <div className="card-list">
            {monsters.map((monster) => {
                const {name, email, id} = monster
                return <Card name={name} email={email} id={id} />
            })
            }
        </div>
        );
    }
}*/

export default CardList;