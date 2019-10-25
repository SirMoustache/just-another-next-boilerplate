import { gql } from 'apollo-server';

export default gql`
  type Query {
    """
    Best Message.
    """
    bestMessage: String!
  }
`;
