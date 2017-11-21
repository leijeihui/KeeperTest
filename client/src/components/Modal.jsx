import React from 'react';
import css from '../styles/Modal.css';

export class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <div >
        {/*<!-- Trigger the modal with a button -->*/}
        <button type="button" className="toggle-modal" data-toggle="modal" data-target="#myModal"> Click For Modal </button>
        {/*<!-- Modal -->*/}
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
          
            {/*<!-- Modal content-->*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button><br />
                <h6 className="modal-title">Account Information</h6>
              </div>

              <div className="modal-body">

                <div style={{'height': '30px'}}>
                  <img className="modal-icon" style={{'height': '19px', 'width': '22px'}} src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/alert-triangle-red-128.png" />
                  <span className="modal-alert">ALERT:</span> <span className="modal-alert-text">Backup and Sync your Keeper Info.</span>
                  <button className="modal-alert-btn">Turn On Now</button>
                </div>
                <hr />

                <div>
                  <img className="modal-icon" style={{'height': '20px', 'width': '20px'}} src="https://image.flaticon.com/icons/png/128/181/181549.png" />
                  <span className="modal-email">user123@gmail.com</span>
                  <button>Switch Account</button>
                </div>
                <hr />

                <div>
                  <img className="modal-icon" style={{'height': '18px', 'width': '22px'}} src="https://www.shareicon.net/data/128x128/2016/08/06/807653_tools_512x512.png" />
                  <span className="modal-emergency-access">Account Emergency Access</span>
                  <button>Manage</button>
                </div>
                <hr />

                <div>
                  <table>
                    <tr>
                      <th>Account Type</th>
                      <th>Renewal Date</th>
                    </tr>
                    <tr>
                      <td>Keeper Free Trial</td>
                      <td>Feb 6, 4017</td>
                      <td> <button>Upgrade</button></td>
                    </tr>
                  </table>
                 
                </div>
                <hr />

                <table>
                  <tr>
                    <th>Secure File Storage</th>
                  </tr>
                  <tr>
                    <td>5 Free Uploads Remaining</td>
                  </tr>
                </table>
                <hr />

                <div className="recent-activity-ctn">
                  <span className="modal-recent-activity">Recent Activity</span>
                  <button>View</button>
                </div>

              </div>
            </div>          
          </div>
        </div> 
      </div>
    );
  }
}

export default Modal;