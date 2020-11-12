
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class FormModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            show:false
            
        }
        this.handleChange = (e) => {
            this.setState({name:e.target.value})
        }
        this.handleClose = ()=>{
            this.setState({ show: false })
            window.location.reload()
        }
        this.storeMyPokemon = (e) => {
            e.preventDefault()
            let data = {
                name: this.state.name,
                pokemonId: this.props.pokemonId,
                species: this.props.species,
                imageUrl: this.props.imageUrl,
            }
            fetch("http://localhost:4000/myPokemonList/add", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => {
                    res.json()
                    console.log("input data ke backend berhasil")
                    window.location.reload()
                })
                .catch(e => console.log(e))
            
        }
    }
    
    render() {

        return (
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pokemon Catched!, Give him a name!</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.storeMyPokemon}>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Your Pokemon Name</label>
                            <input className="form-control" type="text" onChange={this.handleChange}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button as="button" type="submit" variant="primary">
                            Save Changes
                        </Button>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}
