import * as usersService from '../../utilities/users-service'

function PuppyHistoryPage() {
	async function handleCheckToken() {
		const expDate = await usersService.checkToken();
		console.log(expDate);
	}

	return (
		<>
			<h1>PuppyHistoryPage</h1>
			<button onClick={handleCheckToken}>
				Check When My Login Expires
			</button>
		</>
	);
}

export default PuppyHistoryPage;