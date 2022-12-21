import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Table, HeadRow, BodyRow, TypeData } from 'components/TransactionHistory/TransactionHistory.Styled'

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      bg='backgroundSecondary'
      py={6}>
      <Table>
          <thead>
            <HeadRow>
              <Box
                as='th'
                py={4}>Type</Box>
              <th>Amount</th>
              <th>Currency</th>
            </HeadRow>
          </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
            <BodyRow key={id}>
              <TypeData>{type}</TypeData>
              <td>{amount}</td>
              <td>{currency}</td>
            </BodyRow>
            ))}
          </tbody>
      </Table>
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

