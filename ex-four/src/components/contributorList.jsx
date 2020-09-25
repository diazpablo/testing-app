import React from 'react';
import { Box, Typography } from "@material-ui/core";
import ContributorCard from "./contributorCard";
import Loading from "./loading";

const ContributorList = ({ contributors, loading }) => {
	if (loading)
		return <Loading />
	if (!contributors)
		return null;

	if (contributors.length > 0)
		return (
			<Box display='flex' flexWrap='wrap'>
				{contributors.map(contr => (
					<ContributorCard
						key={contr.id}
						contributor={contr}
						style={{
							width: 'calc(33.33% - 20px)',
							marginRight: '20px',
							marginBottom: '20px',
						}}
					/>
				))}
			</Box>
		);
	else
		return <Typography>No contributors in this repository.</Typography>
};

export default ContributorList;
