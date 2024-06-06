import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { Link } from "react-router-dom";
import {calculateRewards} from '../utilities'

function MyCard({data, type}) {

     const isUsersCard = type === 'users'

     return (
        <Card className='card'>
            <Card.Body>
                <Card.Title className='textbold'>{isUsersCard ? data.name : `$${data.amount}`}</Card.Title>
                <div className='transaction-details'>
                   <Card.Text>{isUsersCard ? `${data.totalRewards} Points earned` : moment(data.date).format("MMM Do YYYY")}</Card.Text>
                   {isUsersCard ? <Card.Text> <Link to={`/details/${data.userID}`}>View Details</Link> </Card.Text>
                   : <Card.Text>{calculateRewards(data.amount)} <span>Reward points earned</span></Card.Text>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default MyCard;