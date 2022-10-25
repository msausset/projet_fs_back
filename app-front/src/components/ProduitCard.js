import { Link } from 'react-router-dom';
import axios from 'axios';

import '../ProduitCard.css';

export default function ProduitCard({ produit }) {

    const getEmoji = category => {
        switch(category) {
            case 'tee-shirt':
                return '👕';

            case 'pantalon':
                return '👖';

            case 'pull':
                return '🧵';

            case 'chaussures':
                return '👟';

            default:
                return false;
        }
    }

    const deleteProduit = async id => {
        await axios({
            method: 'DELETE',
            url: 'http://localhost:5000/api/produit/' + id
        }).then(response => {
            console.log(response.data)
            alert('Produit supprimé')
            window.location = '/'
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='ProduitCard my-2 p-3'>
            <div className='ProduitCard-header mb-2 d-flex justify-content-between'>
                <small className='text-uppercase'>{ getEmoji(produit.category) + ' ' + produit.category }</small>
                <div className='ProduitCard-actions'>
                    <Link to={"/modifier-produit/" + produit._id} title="Modifier le produit" className='mx-4'><span className='material-symbols-rounded'>edit</span></Link>
                    <span className='material-symbols-rounded' title='Supprimer le produit' onClick={() => deleteProduit(produit._id)}>delete</span>
                </div>
            </div>
            <div className='ProduitCard-body d-flex justify-content-between'>
                <div className='ProduitCard-description'>
                    <span>{ produit.name }</span><br/>
                    <div>
                        { produit.inStock > 0 ? <span className="disponible">En stock</span> : <span className="indisponible">Rupture de stock</span> } · <span><strong>{ produit.price }</strong></span>
                    </div>
                </div>
                {
                    produit.inStock > 0 ? (
                        <div className='ProduitCard-addToCart d-flex align-items-center'>
                            <input type='number' min='1' max={ produit.inStock } step='1' />
                            <span className='material-symbols-rounded ms-2' title='Ajouter au panier'>add_circle</span>
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}