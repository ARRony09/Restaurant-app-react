import React from "react";
import dateFormat from "dateformat";


const LoadComment = props => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dS mmmm, yyyy, h:MM TT")}</p>
                </div>
            )
        })
    );
}

export default LoadComment;