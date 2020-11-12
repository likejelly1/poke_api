import React, { Component } from 'react'
import { Button, Media, Modal } from 'react-bootstrap'
import  catchNow  from '../../../Utils'
import { FormModal } from '..'

export class PokemonDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            modalHeading: "",
            imageUrl: "",
            height: "",
            weigth: "",
            ability: "",
            types: "",
            id: "",
            showFormModal:false
        }
        this.handledClose = () => {
            this.setState({show:false}) 
            window.location.reload()
        }
        this.capturing = () => {
            let captured = catchNow()
            if (captured) {
                this.setState({
                    show: false,
                    showFormModal:true
                })    
            } else {
                alert("Failed to catch! try back later")
                window.location.reload()
            }
        }
    }
    
    render() {
        const url = this.props.url
        const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
        let abilities = []
        let types = []
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                response.abilities.map((item, index) => {
                    abilities.push(item.ability.name)
                })
                response.types.map((item, index) => {
                    types.push(item.type.name)
                })
                this.setState({
                    modalHeading: response.name,
                    imageUrl : imageUrl + response.id + ".png",
                    height: response.height,
                    weight: response.weight,
                    ability:abilities.join(","),
                    types: types.join(","),
                    id: response.id
                })
                
            })
            .catch(err => console.log(err))
        
       
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header >
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.state.modalHeading}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={this.state.imageUrl}
                                alt={this.state.modalHeading}
                            />
                            <Media.Body>
                                <tr>
                                    <td>Height</td>
                                    <td>:</td>
                                    <td>{this.state.height}</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>:</td>
                                    <td>{this.state.weight}</td>
                                </tr>
                                <tr>
                                    <td>Abilities</td>
                                    <td>:</td>
                                    <td>{this.state.ability}</td>
                                </tr>
                                <tr>
                                    <td>Types</td>
                                    <td>:</td>
                                    <td>{this.state.types}</td>
                                </tr>
                            </Media.Body>
                        </Media>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-info" onClick={this.capturing}>Catch Now</Button>
                        <Button onClick={this.handledClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <FormModal
                    show={this.state.showFormModal}
                    species={this.state.modalHeading}
                    pokemonId={this.state.id}
                    imageUrl={this.state.imageUrl} />
            </div>
        )
    }
}

export default PokemonDetails
