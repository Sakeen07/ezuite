import React from 'react';
import './Header.css';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import AirIcon from '@mui/icons-material/Air';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <HouseOutlinedIcon />
        <AirIcon />
        <h2>eZuite</h2>
      </div>
      <div className="header-center">
        <ManageHistoryIcon />
        <p>Admin &gt; User</p>
        <StarOutlinedIcon />
        <BookmarkAddOutlinedIcon />
      </div>
      <div className="header-right">
        <h4>Enhanzer</h4>
        <div className='user-icon'>L</div>
        <NotificationsNoneOutlinedIcon />
        <StarBorderOutlinedIcon />
        <SettingsOutlinedIcon />
      </div>
    </div>
  );
};

export default Header;
