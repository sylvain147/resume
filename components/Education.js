import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  school : {
    color : '#5162ad',
    margin : '0',
    fontStyle :'italic',
    fontWeight : 'bold',
  },
  description : {
    margin : '0',
  },
  date : {
    margin : '0',
    fontSize : '13px'
  },
})
class Education extends React.Component {
    constructor(props) {
    super(props);
    this.state = { 
      education: props.education,
    };
  }
  render () {
    const { classes } = this.props;
    const education = this.state.education
    return (
     <div className={classes.education}>
          <div>
          <h2 className={classes.description}>{education.description}</h2>
          <p style={{margin : '0'}}><span className={classes.school}>{education.school}</span>, <span  className={classes.location}>{education.location}</span> </p>
           <p className={classes.date}>{education.date}</p>
          </div>
    </div>
    )
  }
}

export default withStyles(styles)(Education)