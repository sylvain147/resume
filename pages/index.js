import { withStyles } from '@material-ui/core/styles';
import { FiChevronDown } from 'react-icons/fi';

const styles = theme => ({
  title : {
  	fontSize : '40px',
  	marginBottom : '20px',
    marginTop : '0',
    textAlign : 'center'

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
})
class Index extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      open : false
    }
  }
 showDescription() {
    const currentState = this.state.open;
    this.setState({ open: !currentState }); 
  }
  render () {
    const { classes } = this.props;
     return (
    <div>
      <div className={classes.title}>
      <p style={{margin : '0'}}>
          Hello, I am Sylvain Attoumani
      </p>
      <p style={{margin : '0'}}>
        Welcome to my online Resume
      </p>
      </div>
      <div style={{height : this.state.open ? '240px' : '0px', overflow : 'hidden', transition : '500ms' }}>
      <div className={classes.description}>
      <p>
        I am a <span className={classes.important}> Web Developer
          </span> and looking for a job in New York City
      </p>
      <p>
        I am passionate about computer science and new technologies
      </p>
       <p>
        Working as a <span className={classes.important}>
            full-stack developer
          </span>, I am confident in creating powerful and optimized solutions as well as always trying to improve and implement new techniques in my work 
        </p>
       <p>
        I enjoy working with <span className={classes.important}>php</span>, <span className={classes.important}>Javascript</span>, <span className={classes.important}>elasticsearch</span>, <span className={classes.important}>NodeJs</span>,<span className={classes.important}> React</span>...
      </p>
      </div>
    </div>
    <p style={{textAlign : 'center'}}>
    <FiChevronDown style={{fontSize : '50px', cursor : 'pointer' , color : '#5162ad', transform : this.state.open ? 'rotate(180deg)' : 'rotate(0deg)', transition : '300ms'}}  onClick={this.showDescription.bind(this)}/>
    </p>
    </div>
    )
  }
}
export default withStyles(styles)(Index)