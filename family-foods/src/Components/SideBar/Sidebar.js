import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow";
import { Groups } from '@mui/icons-material';

function SideBar() {
  return (
    <div className='sidebar'>
      <SidebarRow src="https://static.wixstatic.com/media/19c391_3d0e949270904284bf8b2a31a715051c~mv2.jpg/v1/fill/w_574,h_555,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/19c391_3d0e949270904284bf8b2a31a715051c~mv2.jpg" 
      title='The Trans'/>
      <SidebarRow Icon={Groups} title='Family Circle 1' />
      <SidebarRow Icon={Groups} title='Family Circle 2' />
      <SidebarRow Icon={Groups} title='Family Circle 3' />
      <SidebarRow Icon={Groups} title='Family Circle 4' />
    </div>
  )
}

export default SideBar