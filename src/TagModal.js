import React, { Component } from 'react';
import { Button, Modal, Form, ModalHeader, ModalBody, ModalFooter, FormText, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import './Modal.css';

class TagModal extends Component {

    state = {
        visible: true,
        modalIsOpen: false,
        backdrop: true,
        favorite: true,
        feed: true
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }
    favorite(){
        this.setState({
            favorite: !this.state.favorite
        })
        console.log(this.state.favorite)
    }
    myFeed() {
        this.setState({
            feed: !this.state.feed
        })
        console.log(this.state.feed)
    }

    render() {
        return (
        <div>
            <FormGroup className="newTag" >
            <Label newtag="true">
                <button onClick={this.toggleModal.bind(this)}><span>&#x271A;</span></button>
                new
            </Label>
            </FormGroup>
            <Modal isOpen={this.state.modalIsOpen} >
              <ModalHeader toggle={this.toggleModal.bind(this)}>Tag</ModalHeader>
              <ModalBody>

                <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="name" name="name" id="exampleEmail" placeholder="Your Name" />
                </FormGroup>


                <Form inline>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" onChange={this.myFeed.bind(this)} />{' '}
                        My feed
                    </Label>
                </FormGroup>

                <FormGroup check >
                    <Label check>
                        <Input type="checkbox" onChange={this.favorite.bind(this)} />{' '}
                        My favorites
                    </Label>
                </FormGroup>
                </Form>

                <FormGroup>
                    <Label for="exampleSelect">Type(Changing tag type will affect the entire tag, loss of information may occur)</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Fudbalski klub1</option>
                        <option>Fudbalski klub2</option>
                        <option>Fudbalski klub3</option>
                        <option>Fudbalski klub4</option>
                        <option>Fudbalski klub5</option>
                    </Input>
                </FormGroup>   

                <FormGroup>
                    <Label for="file">Photo</Label>
                    <Jumbotron>
                    <Input type="file" name="file" id="exampleFile" src="../2.png" alt="Smiley face" height="42" width="42" />
                    
                    
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                    </Jumbotron>
                </FormGroup>

              </ModalBody>
              <ModalFooter>
                  <FormGroup className="cancelButton">
                  <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
                  </FormGroup>
                  <FormGroup>
                  <Button color="primary">Save</Button>
                  </FormGroup>
              </ModalFooter>
            </Modal>
        </div>
        );
      }
}

export default TagModal;
