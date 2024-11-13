import {totalPrice} from '../index';

describe('totalPrice', () => {
    it('should return the total price of the products', () => {
        const products = [
            {name: 'Product 1', price: 100},
            {name: 'Product 2', price: 200},
            {name: 'Product 3', price: 300}
        ];
        expect(totalPrice(products)).toBe(600);
    });
    it('should return 0 if the products array is empty', () => {
        const products = [];
        expect(totalPrice(products)).toBe(0);
    });
    

})