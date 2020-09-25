import React, { useState } from 'react';
import { Box, Container, Typography } from "@material-ui/core";
import reposService from "./services/reposService";
import SearchBar from "./components/searchBar";
import ContributorList from "./components/contributorList";
import httpService from "./services/httpService";

const loadingStrings = { repositories: 'repositories', contributors: 'contributors' }

function App() {
	const [ loading, setLoading ] = useState(null);
	const [ owner, setOwner ] = useState('');
	const [ repositories, setRepositories ] = useState(null);
	const [ repoSelected, setRepoSelected ] = useState('');
	const [ contributors, setContributors ] = useState(null);
	const [ error, setError ] = useState('');

	const setInitialState = () => {
		setError('');
		setRepositories(null);
		setRepoSelected('');
		setContributors(null);
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setInitialState();
		setLoading(loadingStrings.repositories);

		try {
			const { data: repos } = await reposService.getRepositories(owner);
			setRepositories(repos);
		} catch (e) {
			setError("Not user found, please try another user.");
		}
		setLoading(null);
	}

	const handleSelectedRepo = async e => {
		setLoading(loadingStrings.contributors);
		setRepoSelected(e.target.value);

		try {
			const { data: contributors } = await httpService.get(e.target.value);
			console.log(contributors);
			setContributors(contributors);
		} catch (e) {
			setContributors(null);
		}
		setLoading(null);
	}

	return (
		<>
			<Container maxWidth="md">

				<Box my={3}>
					<Typography>Find a Github User and take a look of all of his/her repositories collaborators!</Typography>
				</Box>
				<SearchBar
					value={owner} error={error}
					onChange={e => {
						setError('');
						setOwner(e.target.value);
					}}
					onSubmit={handleSubmit}
					repositories={repositories}
					onSelectRepo={handleSelectedRepo}
					repoSelected={repoSelected}
					loading={loading === loadingStrings.repositories}
				/>

				<ContributorList
					contributors={contributors}
					loading={loading === loadingStrings.contributors}
				/>

			</Container>
		</>
	);
}

export default App;
