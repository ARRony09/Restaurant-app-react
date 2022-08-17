import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import LoadComment from "./LoadComment";
import CommentForm from './CommentForm';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image}></CardImg>
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle><strong>{props.dish.name}</strong></CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Price: {props.dish.price} /-
                    </CardText>

                    <hr />
                    <LoadComment comments={props.comments} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addcomment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    )
}
export default DishDetail;