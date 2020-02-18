import { makeStyles } from '@material-ui/core/styles';
import { Document, Page } from 'react-pdf';


const useStyles = makeStyles({
  footer: {
    backgroundColor: '#5f5f5f',
    color : '#fff',
    position : 'absolute',
    left : '0',
    right : '0',
    padding : '20px 70px',
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginTop : '60px'
  },
  title : {
  	fontWeight : 'bold',
  	margin : '0 0 10px'
  },
  button : {
  	width : '200px',
  	height : '50px',
  	border : '1px solid #fff',
  	display : 'flex',
  	justifyContent : 'center',
  	alignItems : 'center',
  	borderRadius : '6px',
  	cursor : 'pointer',
  	transition : '500ms',
  	color : '#fff',
  	fontWeight : 'bold',
  	textDecoration : 'none',
  	'&:hover': {
  		backgroundColor : '#5162ad',

  	}
  },
  label : {
  	fontStyle : 'italic'
  }
});
export default function Footer() {
	const classes = useStyles()
	return (
			<div className={classes.footer}>
				<div >
					<p className={classes.title}>
						Contact me
					</p>
					<p style={{margin : '3px 0'}}>
						<span className={classes.label}> Phone :</span> +16463810919
					</p>
					<p style={{margin : '3px 0'}}>
						<span className={classes.label}> Email :</span> <a href="mailto:sylvain.attoumani@gmail.com">sylvain.attoumani@gmail.com</a>
					</p>
				</div>
				<div>
				<a href="/resume.pdf">
					<div className={classes.button}>
						Download the resume
					</div>
					</a>
				</div>

			</div>
		)
}