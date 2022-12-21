import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      py={6}
      width={1 / 2}
      mx="auto">
      <table className="transaction-history">
       <thead>
         <tr>
          <th>Type</th>
           <th>Amount</th>
           <th>Currency</th>
         </tr>
       </thead>
       <tbody>
         {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

    // <table className="transaction-history">
    //   <thead>
    //     <tr>
    //       <th>Type</th>
    //       <th>Amount</th>
    //       <th>Currency</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {items.map(({ id, type, amount, currency }) => (
    //       <tr key={id}>
    //         <td>{type}</td>
    //         <td>{amount}</td>
    //         <td>{currency}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
