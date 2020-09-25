import React from 'react';
import Loading from "./loading";
import {
	Box,
	FormControl, InputLabel, InputAdornment, IconButton,
	MenuItem,
	Select, TextField
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
	const { error, onSubmit, repositories, repoSelected, onSelectRepo, loading, ...rest } = props;
	return (
		<Box my={5} style={{ display: 'flex' }}>
			<TextField
				style={{ marginRight: '30px' }}
				error={!!error}
				helperText={error}
				label="Owner" variant="outlined"
				InputProps={{
					onKeyPress: e => e.key === 'Enter' && onSubmit(e),
					endAdornment:
						<InputAdornment position="end">
							<IconButton onClick={onSubmit}>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
				}}
				{...rest}
			/>

			{!repositories && loading && <Loading />}

			{
				repositories && <FormControl variant="outlined">
					<InputLabel>Repositories</InputLabel>
					<Select
						style={{
							minWidth: 200
						}}
						value={repoSelected}
						onChange={onSelectRepo}
						label="Repositories"
					>
						{repositories.length > 0 ?
							repositories.map(repo => (
								<MenuItem key={repo.id} value={repo.contributors_url}>{repo.name}</MenuItem>
							))
							:
							<MenuItem value="">
								<em>No Repositories</em>
							</MenuItem>
						}

					</Select>
				</FormControl>
			}
		</Box>
	);
};

export default SearchBar;
