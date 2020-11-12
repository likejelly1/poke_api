import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export default class MyPokemonList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            pokemonId: "",
            species: "",
            imageUrl: "",
            list:null,
        }

        this.releasePokemon = (id) => {
            const data = {
                id:id
            }
            
            fetch("http://localhost:4000/myPokemonList/delete", {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) 
            })
                .then(res => res.json())
                .then(response => {
                    console.log("delete Data Berhasil")
                    window.location.reload()
                })
                .catch(err=> console.log(err))
        }

    }
    
    render() {
        fetch("http://localhost:4000/myPokemonList/getAll")
            .then(res => res.json())
            .then(response => {
                this.setState({
                    list: response.data.map((item) => {
                        return (
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 h-100">
                                <Card style={{ width: '18em' }}>
                                    <Card.Img variant="top" src={item.imageUrl} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                        {item.species}
                                        </Card.Text>
                                        <Button as="button" onClick={this.releasePokemon(item._id)} variant="primary">Release Pokemon</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                })
                
            } )
            .catch(err=> console.error(err))

        return (
            
            <section id="myPokemonList" className="bg-dark text-light pt-4">
                <div className="container">
                    <h2 className="mb-3 h2">
                        <u>M</u>y Pokemon List
                    </h2>
                    <div className="row bg">
                        {
                         this.state.list
                        }

                        
                    </div>
                </div>
            </section>
        )
    }
}
