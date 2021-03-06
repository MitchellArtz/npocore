import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// COMPONENTS
import Modal from "react-bootstrap/Modal";

// IMPORTS
import alertify from "alertifyjs";


function AddNPO() {
  const [isOpen, setIsOpen] = useState(false); // MODAL VARIABLESE
  const [organizations, setOrganizations] = useState([]); // NPO ORGANIZATIONS

  // FORM VARIABLES
  const [orgName, setOrgName] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgDescription, setOrgDescription] = useState("");
  const [orgWebsite, setOrgWebsite] = useState("");
  const [orgGender, setOrgGender] = useState("");
  const [orgCause, setOrgCause] = useState("");

  // MODAL FUNCTIONS
  const showModal = () => { setIsOpen(true); };
  const hideModal = () => { setIsOpen(false); };

  // FORM FUNCTIONS
  const onOrgNameChange = (event) => { setOrgName(event.target.value); }
  const onOrgEmailChange = (event) => { setOrgEmail(event.target.value); }
  const onOrgDescriptionChange = (event) => { setOrgDescription(event.target.value); }
  const onOrgWebsiteChange = (event) => { setOrgWebsite(event.target.value); }
  const onOrgGenderChange = (event) => { setOrgGender(event.target.value); }
  const onOrgCauseChange = (event) => { setOrgCause(event.target.value); }

  // VALIDATION FUNCTIONS
  const validateOrganizationUniqueness = (newOrganization) => {
    for (let organization of organizations) {
      if (organization.name === newOrganization.name) {
        return "name";
      } else if (organization.email === newOrganization.email && newOrganization.email != "") {
        return "email";
      }
    }

    return true;
  }

  const addNPO = (event) => {
    event.preventDefault(); // STOP FORM SUBMISSION

    // GET ALL INTERESTS
    let interests = [];
    for (let checkbox of document.querySelectorAll(".interest-checkbox:checked")) {
      interests.push(checkbox.value);
    }

    // CREATE NEW ORGANIZATION
    const newOrganization = {
      name: orgName,
      email: orgEmail,
      description: orgDescription,
      website: orgWebsite,
      gender: orgGender,
      cause: orgCause,
      interests: interests
    }

    const unique = validateOrganizationUniqueness(newOrganization);

    if (unique === true) {
      // SAVE TO MONGODB

      // CLOSE MODAL
      setIsOpen(false);

      // MAKE ALERT
      alertify.success("Your organization has been added! Hit the refresh button to see your organization!")
    } else {
      if (unique === "name") {
        alertify.error("That organization name has been used already.");
      } else if (unique === "email") {
        alertify.error("That organization email has been used already.");
      }
    }
  }

  const getOrganizations = () => {
    // GET ORGANIZATIONS FROM MONGODB
    // setOrganizations([]);
    console.log("hi");
  }

  useEffect(() => {
    getOrganizations();
  })

  return (
    <div>
      <button class="btn btn-info npo-button" onClick={showModal}>Add your NPO!</button>

      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <h3>Our Database is Down!</h3>
        </Modal.Header>
        <Modal.Body>
          <p>
            We're sorry! We've recently received a DoS (Denial of Service) attack on our database, so our database is temporarily shut down. If you'd like to add your nonprofit organization, please <Link onClick={hideModal} to="/contact">contact us</Link>.
            <br/><br/>
            Sorry for the inconvenience.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link class="btn btn-info" onClick={hideModal} to="/contact">Contact us!</Link>.
        </Modal.Footer>
      </Modal>

      {/* <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <h3>Add your nonprofit organization</h3>
        </Modal.Header>
        <form onSubmit={addNPO}>
          <Modal.Body>
            <label>Organization Name:</label>
            <input className="form-control mb-2" type="text" onChange={onOrgNameChange} required />

            <label>Organization Email:</label>
            <input className="form-control mb-2" type="email" onChange={onOrgEmailChange} />

            <label>Organization Description:</label>
            <textarea className="form-control mb-2" rows="5" onChange={onOrgDescriptionChange} required />

            <label>Organization Website:</label>
            <input className="form-control mb-2" type="url" onChange={onOrgWebsiteChange} required />

            <label className="mt-3">Gender: (that your organization targets)</label>
            <br/>
            <select onChange={onOrgGenderChange} required>
              <option value="">----------</option>
              <option value="Everyone">Everyone</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
            </select>

            <br/>

            <label className="mt-3">Cause:</label>
            <br/>
            <select onChange={onOrgCauseChange} required>
              <option value="">----------</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Arts and Culture">Arts and Culture</option>
              <option value="Children">Children</option>
              <option value="Civil Rights and Social Action">Civil Rights and Social Action</option>
              <option value="Disaster Relief">Disaster Relief</option>
              <option value="Economic Empowerment">Economic Empowerment</option>
              <option value="Education">Education</option>
              <option value="Environment">Environment</option>
              <option value="Health">Health</option>
              <option value="Human Rights">Human Rights</option>
              <option value="Politics">Politics</option>
              <option value="Poverty Alleviation">Poverty Alleviation</option>
              <option value="Science and Technology">Science and Technology</option>
              <option value="Social Services">Social Services</option>
            </select>

            <br/>

            <label className="mt-4">Looking for:</label>
            <div className="looking-for-checkboxes">
              <div><input className="interest-checkbox" type="checkbox" value="Members"/> <label>Members</label></div>
              <div><input className="interest-checkbox" type="checkbox" value="Partnerships"/> <label>Partnerships</label></div>
              <div><input className="interest-checkbox" type="checkbox" value="Sponsors"/> <label>Sponsors</label></div>
              <div><input className="interest-checkbox" type="checkbox" value="Clients"/> <label>Clients</label></div>
              <div><input className="interest-checkbox" type="checkbox" value="Opportunities"/> <label>Opportunities</label></div>
            </div>

            <label className="mt-4">Legal:</label>
            <div><input type="checkbox" required/> <label><small>I have read the Launch Tech LLC <a href="https://www.launchtechllc.com/corporate/terms-of-service" target="_">Terms of Service</a>.</small></label></div>
          </Modal.Body>
          <Modal.Footer>
            <input class="btn btn-info" type="submit" value="Submit your NPO!"/>
          </Modal.Footer>
        </form>
      </Modal> */}
    </div>
  )
}

export default AddNPO;
