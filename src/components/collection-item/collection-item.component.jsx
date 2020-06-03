import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, add}) => {
    const { name, price, imageUrl } = item;

    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>   
        <CustomButton onClick={() => add(item)} inverted>
            Add to cart
        </CustomButton>     
    </div>
)};

const mapDispatchToPros = dispatch => ({
    add: item => dispatch(AddItem(item))
});

export default connect(null, mapDispatchToPros)(CollectionItem);