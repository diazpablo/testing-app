import React from 'react';
import { Card, CardHeader, CardContent, Avatar, Typography } from "@material-ui/core";

const ContributorCard = ({ contributor, ...rest }) => {
	return (
		<Card {...rest}>
			<CardHeader
				avatar={
					<Avatar src={contributor.avatar_url} />
				}
				title={contributor.login}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					Contributions: {contributor.contributions}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ContributorCard;
