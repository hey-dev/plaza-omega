import gql from 'graphql-tag';

export default gql`
	query FetchEstablishment($id: ID!) {
		establishment(id: $id) {
			id
			name
		}
	}
`;
