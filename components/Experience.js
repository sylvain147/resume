import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { FaChevronRight } from 'react-icons/fa';

const styles = theme => ({
  company : {
    textTransform : 'uppercase',
    fontWeight : 'bold',
    color : '#5162ad'
  },
  title : {
    fontStyle : 'italic'
  },
  date : {
    margin : '0',
    fontSize : '13px'
  },
  experience : {
    marginBottom : "60px",
    marginTop : "60px"
  },
  description : {
    overflow : 'hidden',
    transition : '400ms'
  },
  icon : {
    transition : '300ms',
    fontSize : '20px',
    color : '#5162ad'
  },
  presentation : {
    display : 'flex',
    justifyContent : 'space-between',
        cursor : 'pointer',

  }
})
class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      experience: props.experience,
      shown : false
    };
  }
  showDescription() {
    const currentState = this.state.shown;
    this.setState({ shown: !currentState }); 
  }
  render () {
    const { classes } = this.props;
    const experience = this.state.experience
    return (
     <div className={classes.experience}>
        <div className={classes.presentation}  onClick={this.showDescription.bind(this)}>
          <div>
            <span  className={classes.company}>{experience.company}</span>, <span>{experience.location}</span> - <span className={classes.title}>{experience.title}</span>
            <p className={classes.date}>{experience.date}</p>
          </div>
          <div>
            <span><FaChevronRight className={classes.icon} style={{transform : this.state.shown ? 'rotate(90deg)' : 'rotate(0deg)'}} /></span>
          </div>
        </div>
      <div className={classes.description} style={{height : this.state.shown ? '500px' : '0px', overflow : 'hidden' }} dangerouslySetInnerHTML={{__html: experience.description}} ></div>
    </div>
    )
  }
}

export default withStyles(styles)(Experience)