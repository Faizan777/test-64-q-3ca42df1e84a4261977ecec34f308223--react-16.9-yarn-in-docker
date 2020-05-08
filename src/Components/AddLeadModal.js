import React,{Component} from 'react'
import axios from 'axios';
const API_URL = 'http://18.209.209.196:4059';   

function refreshPage() {
    window.location.reload(false);
  }
export class AddLeadModal extends Component {
    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeMobile=this.onChangeMobile.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeLocationType=this.onChangeLocationType.bind(this);
        this.onChangeLocationString=this.onChangeLocationString.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: "",
            last_name:"",
            mobile:"",
            email: "",
            location_type:"",
            location_string:""
        }
    }
   
    onChangeFirstName(e) {
        this.setState({ first_name: e.target.value })
    }
    onChangeLastName(e) {
        this.setState({ last_name: e.target.value })
    }

    onChangeMobile(e) {
        this.setState({ mobile: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeLocationType(e) {
        this.setState({ location_type: e.target.value })
    }

    onChangeLocationString(e) {
        this.setState({ location_string: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            mobile:this.state.mobile,
            email: this.state.email,
            location_type:this.state.location_type,
            location_string:this.state.location_string
        
        };
           
      axios.post(`${API_URL}/api/leads/`, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState ({
            first_name: "",
            last_name:"",
            mobile:"",
            email: "",
            location_type:"",
            location_string:""
        })
        setTimeout(refreshPage, 700)
    }
     
    render() {
        return (
            <div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add a Lead
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    
      <div class="modal-header">
      <h5 class="modal-title text-center" id="exampleModalLabel">Add a Lead</h5>
        <div class="modal-body">
        <React.Fragment>
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
            <div class="form-row">
                <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" value={this.state.first_name} onChange={this.onChangeFirstName} className="form-control" required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" value={this.state.last_name} onChange={this.onChangeLastName} className="form-control" required/>
                    </div>
            </div>
            <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Mobile</label>
                        <input type="phone" value={this.state.mobile} onChange={this.onChangeMobile} className="form-control" required />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Add User Email</label>
                        <input type="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" required/>
                    </div>
            </div>
            <div class="form-row">

                    <div class="form-group col-md-6">
                        <label>Location Type</label>
                        <select id="inputState" value={this.state.location_type} onChange={this.onChangeLocationType} class="form-control" required>
                        <option>City</option>
                        <option>State</option>
                        <option>Country</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Location String</label>
                        <input type="text" value={this.state.location_string} onChange={this.onChangeLocationString} className="form-control" required/>
                    </div>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="submit"  
                        value="Save" className="btn btn-success btn-block" />
                        
                    </div>
                </form>
            </div>
            </React.Fragment>
         </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary"  >Save changes</button> */}
      </div>
    </div>
  </div>
</div>   
            </div>
        )
    }
}
export default AddLeadModal


