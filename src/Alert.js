import React,{Component} from "react";
import '../Alert.css';
class Alert extends Component{
  constructor(props){
    super(props);
      this.state={
        shows:false
      }
  }
    componentWillReceiveProps(nxtprops){
      console.log(nxtprops.show);
      if(nxtprops.show){
      this.openAlert();
      }else{
      this.closeAlert();
      }
    }
    openAlert(){
        this.setState({shows:true});
        console.log(this.state.shows)
        if(this.props.autoCloseIn){
        setInterval(()=>{this.closeAlert()},this.props.autoCloseIn);

    }

}

  closeAlert(){
    this.setState({shows:false});
    console.log(this.state.shows)

  }

	render(){
    let boxOverlay = ["overlay"];
    if(this.state.shows) {
      boxOverlay.push('show');
    }
		return(
			<div>
        <div id="popup1" className={boxOverlay.join(' ')}>
         <div className="popup">
              {this.props.title ? 
                <div className="popup-title" id="mod_title">
                  {this.props.title}
                </div>:null}

            {this.props.title ? 
            <div className="content" style={{marginTop:'15px'}} id="mod_content">
              {this.props.content} 
              </div>
                : <div className="content" id="mod_content">
                    {this.props.content}   
                  </div>}
        

              <div className="footer">
                {this.props.type==="confirm"?
                <div>
                <input type="button" className ="popup-button btn-cancel"  id="closebtn" onClick={()=> this.closeAlert()}  value="Cancel" />

                <input type="button" onClick={()=>   this.props.onConfirm()} className="popup-button btn-danger" id="closebtn" value="Confirm"/>
                </div>
                  : <input type="button" onClick={()=> this.props.onConfirm()} className="popup-button" id="closebtn" value="OK"/>}
                  

              </div>
           </div>
         </div>
        </div>

			);
	}
}

export default Alert;