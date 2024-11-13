import OrdersCard from "..";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
describe('OrdersCard', () => {
    it('should render the OrdersCard component', () => {
        const { container } = render(<OrdersCard totalPrice={100} totalProducts={3} />);
        expect(container).toMatchSnapshot();
    });
    
    it('should render the OrdersCard component with different props', () => {
        const { container } = render(<OrdersCard totalPrice={200} totalProducts={2} />);
        expect(container).toMatchSnapshot();
    });
    
    it('should render the correct total price', () => {
        const { getByText } = render(<OrdersCard totalPrice={200} totalProducts={2} />);
        expect(getByText('$200')).toBeInTheDocument();
    });

})