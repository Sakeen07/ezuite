import React from 'react';
import './Sidebar.css';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ImageAspectRatioIcon from '@mui/icons-material/ImageAspectRatio';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LanguageIcon from '@mui/icons-material/Language';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><p><ManageHistoryIcon /></p> <p>Admin</p></li>
        <li><p><ImageAspectRatioIcon /></p> <p>Core</p></li>
        <li><p><ListAltIcon /></p> <p>Procurement</p></li>
        <li><p><WidgetsIcon /></p> <p>Inventory</p></li>
        <li><p><SettingsSuggestIcon /></p> <p>Manufacture</p></li>
        <li><p><ShoppingCartOutlinedIcon /></p> <p>Sales</p></li>
        <li><p><MonetizationOnOutlinedIcon /></p> <p>Finance</p></li>
        <li><p><ApartmentIcon /></p> <p>Assets</p></li>
        <li><p><LanguageIcon /></p> <p>Services</p></li>
        <li><p><ContactsOutlinedIcon /></p> <p>CRM</p></li>
        <li><p><TrendingUpIcon /></p> <p>Analytics</p></li>
      </ul>
    </div>
  );
};

export default Sidebar;
