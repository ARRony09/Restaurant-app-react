import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import LoadComment from "./LoadComment";

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image}></CardImg>
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle><strong>{props.dish.name}</strong></CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Price: {props.dish.price} /-</p>
                    </CardText>

                    <hr />
                    <LoadComment comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    )
}
export default DishDetail;