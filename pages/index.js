import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  title : {
  	fontSize : '30px',
  	marginBottom : '20px',
    marginTop : '0'
  },
  description : {
  	fontSize : '20px',
  	marginTop : '10px',
  	marginBottom : '10px'
  },
  important : {
    color : '#5162ad',
    fontWeight : 'bold'
  }
}))
export default function Index() {
	const classes = useStyles();
  return (
    <div>
      <p className={classes.title}>
      Hello, I am <span className={classes.important}> Sylvain Attoumani
        </span>
      </p>
      <div className={classes.description}>
      <p > 
        Welcome to my online resume
      </p>
      <p>
        I am a <span className={classes.important}> Web Developer
          </span> and looking for a job in New York City
      </p>
      <p>
        I am Passionate about computer science and new technologies.
      </p>
       <p>
        Working as a <span className={classes.important}>
            full-stack developer
          </span>, I am confident in creating powerful and optimized solutions as well as always trying to improve and implement new techniques in my work. 
        </p>
       <p>
        I enjoy working with <span className={classes.important}>php</span>, <span className={classes.important}>Javascript</span>, <span className={classes.important}>elasticsearch</span>, <span className={classes.important}>NodeJs</span>,<span className={classes.important}> React</span>...
      </p>
      </div>
    </div>
  );
}