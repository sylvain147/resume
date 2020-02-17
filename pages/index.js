import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  title : {
  	fontSize : '50px',
  	marginBottom : '20px'
  },
  description : {
  	fontSize : '30px',
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
      <p className={classes.description}>You can find here everything about me : my experiences, my education and who I am.</p>
    </div>
  );
}