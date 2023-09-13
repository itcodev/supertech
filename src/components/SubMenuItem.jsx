import React from 'react';

const SubMenuItem = ({ title, url }) => (
  <li className=" text-black">
    <a
      href={url}
     
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  </li>
);

export default SubMenuItem;
