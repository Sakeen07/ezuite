import React, { useState } from 'react';
import './UserTable.css';
import TextField from '@mui/material/TextField';
import PrintIcon from '@mui/icons-material/Print';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PaddingIcon from '@mui/icons-material/Padding';

const UserTable = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [selectedPage, setSelectedPage] = useState(1);
  const [arrowClicked, setArrowClicked] = useState(null);

  const users = [
      { firstName: 'John', lastName: 'Doe', address: '123 Elm Street', mobile: '555-1234', email: 'john.doe@example.com', department: 'Sales', designation: 'Manager', updated: '2024-05-08 1:45 PM' },
      { firstName: 'Jane', lastName: 'Smith', address: '456 Oak Avenue', mobile: '555-5678', email: 'jane.smith@example.com', department: 'Marketing', designation: 'Director', updated: '2024-03-08 2:10 PM' },
      { firstName: 'Alice', lastName: 'Johnson', address: '789 Pine Road', mobile: '555-8765', email: 'alice.johnson@example.com', department: 'HR', designation: 'Cordinator', updated: '2024-03-08 2:30 PM' },
      { firstName: 'Bob', lastName: 'Brown', address: '321 Maple Lane', mobile: '555-2345', email: 'bob.brown@example.com', department: 'IT', designation: 'Technician', updated: '2024-03-08 3:00 PM' },
      { firstName: 'Charlie', lastName: 'Davis', address: '654 Birch Boulevard', mobile: '555-3456', email: 'charlie.davis@example.com', department: 'Finance', designation: 'Analyst', updated: '2024-03-08 3:15 PM' },
      { firstName: 'Eve', lastName: 'Miller', address: '987 Cedar Street', mobile: '555-4567', email: 'eve.miller@example.com', department: 'Operations', designation: 'Supervisor', updated: '2024-03-08 3:30 PM' },
      { firstName: 'Frank', lastName: 'Wilson', address: '321 Spruce Way', mobile: '555-5678', email: 'frank.wilson@example.com', department: 'Legal', designation: 'Consultant', updated: '2024-03-08 3:45 PM' },
      { firstName: 'Grace', lastName: 'Lee', address: '654 Palm Drive', mobile: '555-6789', email: 'grace.lee@example.com', department: 'Engineering', designation: 'Developer', updated: '2024-03-08 4:00 PM' },
      { firstName: 'Bob', lastName: 'Brown', address: '321 Maple Lane', mobile: '555-2345', email: 'bob.brown@example.com', department: 'IT', designation: 'Technician', updated: '2024-03-08 4:15 PM' },
      { firstName: 'Henry', lastName: 'Taylor', address: '987 Fir Street', mobile: '555-7890', email: 'henry.taylor@example.com', department: 'R&D', designation: 'Scientist', updated: '2024-03-08 4:30 PM' },
      { firstName: 'Isabel', lastName: 'Anderson', address: '123 Aspen Court', mobile: '555-8901', email: 'isabel.anderson@example.com', department: 'Customer Support', designation: 'Agent', updated: '2024-03-08 4:45 PM' },
      { firstName: 'Jack', lastName: 'Thomes', address: '456 Cypress Avenue', mobile: '555-9012', email: 'jack.thomas@example.com', department: 'Quality Assurance', designation: 'Inspector', updated: '2024-03-08 4:45 PM' },
      { firstName: 'Karen', lastName: 'Jackson', address: '789 Redwood Road', mobile: '555-0123', email: 'karen.jackson@example.com', department: 'Logistics', designation: 'Coordinator', updated: '2024-03-08 5:00 PM' },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  const handleArrowClick = (direction) => {
    setArrowClicked(direction);
    setTimeout(() => setArrowClicked(null), 200);
    if (direction === "prev" && selectedPage > 1) {
      setSelectedPage(selectedPage - 1);
    } else if (direction === "next") {
      setSelectedPage(selectedPage + 1);
    }
  };

  return (
    <div className="user-table">
      <div className="table-title">
        <div className="tabs-left">
          <button className={`tab ${activeTab === "Draft" ? "active" : ""}`} onClick={() => handleTabClick("Draft")}>
            <PrintIcon /> Draft (40)
          </button>
          <button className={`tab ${activeTab === "Active" ? "active" : ""}`} onClick={() => handleTabClick("Active")}>
            <SignalCellularAltIcon /> Active (40)
          </button>
          <button className={`tab ${activeTab === "Inactive" ? "active" : ""}`} onClick={() => handleTabClick("Inactive")}>
            <CropPortraitIcon /> Inactive (40)
          </button>
          <button className={`tab ${activeTab === "Deleted" ? "active" : ""}`} onClick={() => handleTabClick("Deleted")}>
            <HighlightOffIcon /> Deleted (40)
          </button>
        </div>
        <div className="tabs-right">
          <TextField id="standard-basic" label="Search" variant="standard" />
          <ul className="page-number">
            <li
              className={arrowClicked === "first" ? "highlight" : ""}
              onClick={() => handleArrowClick("first")}
            >
              |&lt;
            </li>
            <li
              className={arrowClicked === "prev" ? "highlight" : ""}
              onClick={() => handleArrowClick("prev")}
            >
              &lt;
            </li>
            {[1, 2, 3].map((page) => (
              <li
                key={page}
                className={selectedPage === page ? "active" : ""}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </li>
            ))}
            <li
              className={arrowClicked === "next" ? "highlight" : ""}
              onClick={() => handleArrowClick("next")}
            >
              &gt;
            </li>
            <li
              className={arrowClicked === "last" ? "highlight" : ""}
              onClick={() => handleArrowClick("last")}
            >
              &gt;|
            </li>
          </ul>
          <button className="menu-icon">
            <MoreHorizIcon />
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.address}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>{user.designation}</td>
              <td>{user.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        <div className='footer-left'>
          <p>
            <PaddingIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
            5.0</p>
        </div>
        <div className='footer-right'>
          <p> &copy; 2024 eZuite. All rights reserved.</p>
        </div>
      </footer>
      </div>
  );
};

export default UserTable;


