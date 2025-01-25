import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link smooth to="/#about">About</Link>
        </li>
        <li>
          <Link smooth to="/#projects-personal">Projects/Personal</Link>
        </li>
        <li>
          <Link smooth to="/#projects-group">Projects/Group</Link>
        </li>
        <li>
          <Link smooth to="/#projects-bioinformatics">Projects/Bioinformatics</Link>
        </li>
        <li>
          <Link smooth to="/#lab">Lab</Link>
        </li>
        <li>
          <Link smooth to="/#resume">Resume</Link>
        </li>
        <li>
          <Link smooth to="/#contact">Contact</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
