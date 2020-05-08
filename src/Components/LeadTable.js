import React,{useState} from 'react'
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export function refreshPage() {
  window.location.reload(false);
}

class LeadTable extends React.Component {
    constructor(props){

   super(props);
   this.deleteLead = this.deleteLead.bind(this)
    }
    state = {
        users: []
    }

   
    
    MarkUpdate=(id,message)=> {
      const result = window.prompt("Mark your Communication",message);
        let userObject = {
            communication: result
        
        };
     
           
      axios.put(`${API_URL}/api/mark_lead/${id}`, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState ({
            communication : " "

        })
        setTimeout(refreshPage, 700)
    }  
  
    deleteLead(id) {
      axios.delete(`${API_URL}/api/leads/${id}`)
          .catch(err => console.warn(err));
         
        }
componentDidMount() {
        const url = `${API_URL}/api/leads/`;
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ users: data })
          console.log(this.state.users)
          
         })
      } 
    render() {
        return ( 
                      <div className="container">
              <div className="py-4">
                <h1></h1>
                <table class="table border shadow">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Location Type</th>
                      <th scope="col">Location String</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.users.map((user) => (
                      <tr>
                        {/* <th scope="row">{user + 1}</th> */}
                        <td>{user.first_name} {user.last_name}</td>
                  <td>{user.email}</td>
                        <td>{user.mobile}</td>
                  <td>{user.location_type}</td>
                  <td>{user.location_string}</td>
                        <td><button type="button"  class="btn btn-danger" data-toggle="modal" data-target="delete"
                         button onClick={(e) => { if (window.confirm('Do you wish to delete this Lead?')
                         ) this.deleteLead(user.id);setTimeout(refreshPage, 2000);}}
                                                  >Delete</button>
                                                  &nbsp;&nbsp;&nbsp;
                        <button type="button"  class="btn btn-primary" data-toggle="modal"
                         data-target="Update"
                         button onClick={(e) => {this.MarkUpdate(user.id,user.communication);}}
                                                  >Mark Update</button> </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );}}
export default LeadTable


{/* If we want confirmation on update confirmation we can use this too <button type="button"  class="btn btn-primary" data-toggle="modal"
                         data-target="Update"
                         button onClick={(e) => { if (window.confirm('Do you wish to Update the lead?')
                         ) this.MarkUpdate(user.id,user.communication);}}
                                                  >Mark Update</button>  */}



