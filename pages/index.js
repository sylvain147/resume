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
      open : false,
      title : false,
      desc : false,
      arrow : false
    }
  }
 showDescription() {
    const currentState = this.state.open;
    this.setState({ open: !currentState }); 
  }

  render () {
    const { classes } = this.props;
    setTimeout(() => { this.setState({title : true}) }, 100);
    setTimeout(() => { this.setState({desc: true}) }, 600);
    setTimeout(() => { this.setState({arrow : true}) }, 900);

     return (
    <div>
      <div className={classes.title}>
      <p style={{margin : this.state.title ? '0' : '0 0 0 -10000px', transition : '1200ms ease-out'}}>
          Hello, I am Sylvain Attoumani
      </p>
      <p style={{margin : this.state.desc ? '0' : '0 0 0 -10000px', transition : '1200ms ease-out'}}>
        Welcome to my online Resume
      </p>
      </div>
      <div style={{height : this.state.open ? '270px' : '0px', overflow : 'hidden', transition : '500ms' }}>
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
    <p style={{textAlign : 'center', maxHeight : '60px', overflow : 'hidden'}}>
    <FiChevronDown style={{fontSize : '50px', cursor : 'pointer' , color : '#5162ad', transform : this.state.open ? 'rotate(180deg)' : 'rotate(0deg)', transition : 'rotate 300ms, margin 1200ms ease-out', margin : this.state.arrow ? '0' : '0 0 -1000px 0'}}  onClick={this.showDescription.bind(this)}/>
    </p>
    </div>
    )
  }
}
export default withStyles(styles)(Index)