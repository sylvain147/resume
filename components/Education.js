import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  education : {
    marginTop : '60px'
  },
  school : {
    textTransform : 'uppercase',
    fontWeight : 'bold',
    color : '#5162ad',
    margin : '0',
  },
  description : {
    fontStyle : 'italic',
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
            <span  className={classes.school}>{education.school}</span>, <span>{education.location}</span> 
            <p className={classes.description}>{education.description}</p>
            <p className={classes.date}>{education.date}</p>
          </div>
    </div>
    )
  }
}

export default withStyles(styles)(Education)