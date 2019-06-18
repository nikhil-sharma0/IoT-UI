import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    width: 350,
    height: 400
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const cardStyle = {
	marginLeft: 70,
	marginRight: 100,
	marginTop: 30,
	display: 'inline-block',
	width: 250,
};

export default function SimpleCard() {
  const classes = useStyles();
  const employee_ABlock = ['Praveen, Sudhir, Debanjan, Ashish, Prassoon']

  return (
		<div style={ cardStyle }>
			<Card className={classes.card}>
				<CardContent>
					
				</CardContent>
				<CardActions>
					<Button size="small">More Employees</Button>
				</CardActions>
			</Card>
		</div>
  );
}
