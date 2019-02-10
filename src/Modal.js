import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormText, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import './Modal.css';

class TagModal extends Component {

    state = {
        visible: true,
        modalIsOpen: false,
        backdrop: true
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        return (
        <div>
            <FormGroup className="newTag" >
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>New</Button>
            </FormGroup>
          <Modal isOpen={this.state.modalIsOpen}>
              <ModalHeader toggle={this.toggleModal.bind(this)}>Tag</ModalHeader>
              <ModalBody>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup check inline="true">
                    <Label check>
                        <Input type="checkbox" />{' '}
                        My feed
                    </Label>
                </FormGroup>
                <FormGroup check inline="true">
                    <Label check>
                        <Input type="checkbox" />{' '}
                        My favorites
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Fudbalski klub1</option>
                        <option>Fudbalski klub2</option>
                        <option>Fudbalski klub3</option>
                        <option>Fudbalski klub4</option>
                        <option>Fudbalski klub5</option>
                    </Input>
                </FormGroup>
                {/* <span><img src="tag.photo" alt="slika" /></span> */}
                
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
                  <Button color="primary">Sign Up</Button>
                  </FormGroup>
              </ModalFooter>
          </Modal>
        </div>
        );
      }
}

export default TagModal;
