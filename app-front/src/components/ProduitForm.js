import { useState } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ProduitForm({ action, produit, onSubmit }) {
    const [ category, setCategory ] = useState('')
    const [ name, setName ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ inStock, setInStock ] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()

        onSubmit({ name, price, category, inStock })
    }

    return (
        <>
            <h1>{ action === 'add' ? 'Nouveau produit' : 'Modifier un produit' }</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Catégorie</Form.Label>
                    <Form.Select onChange={e => setCategory(e.target.value)}>
                        <option value="chaussures">Chaussures</option>
                        <option value="pantalon">Pantalon</option>
                        <option value="pull">Pull</option>
                        <option value="tee-shirt">Tee-Shirt</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Nom du produit</Form.Label>
                    <Form.Control type="text" placeholder="ex: Tee-shirt en coton" onChange={e => setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Prix (€)</Form.Label>
                    <Form.Control type="number" min="0.01" step="0.01" onChange={e => setPrice(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Nombre en stock</Form.Label>
                    <Form.Control type="number" min="0" step="1" onChange={e => setInStock(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type="submit">{ action === 'add' ? 'Ajouter' : 'Modifier' }</Button>
            </Form>
        </>
    )
}