import React, { Component } from "react";
import MenuItem from "./MenuItem.js";

import DishDetail from './DishDetail';
import { Modal, ModalFooter, ModalBody, CardColumns, Button } from 'reactstrap'
import { connect } from 'react-redux'
import * as actionType from '../../redux/actionTypes'


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addcomment: (dishId, rating, author, comment) => dispatch({
            type: actionType.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}
class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }
    toggleOpen = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    render() {
        document.title = 'Menu';
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)}
                />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
            dishDetail = <DishDetail dish={this.state.selectedDish}
                comments={comments}
                addComment={this.props.addcomment} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color='secondary' onClick={this.toggleOpen}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);