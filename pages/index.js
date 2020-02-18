import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  title : {
  	fontSize : '25px',
  	marginBottom : '20px',
    marginTop : '0'
  },
  description : {
  	fontSize : '20px',
  	marginTop : '10px',
  	marginBottom : '10px'
  }
}))
export default function Index() {
	const classes = useStyles();
  return (
    <div>
      <p className={classes.title}>Hello, I am Sylvain</p>
      <p className={classes.description}> Welcome to my online resume</p>
    </div>
  );
}