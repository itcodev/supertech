import React, { useState } from 'react';

const MenuItem = ({ title, url, submenu }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li
      className="hover:bg-white hover:text-black relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={url}
        className=" font-normal text-[12px] p-x-2" style={{ fontFamily: 'siemens' }}
      >
        {title}
      </a>
      {submenu && hovered && (
        <div
          className={`absolute bg-white w-[200px] bg-opacity-90 shadow-lg ${
            hovered === 'Career' || hovered === 'Contact Us' ? 'left-0' : 'right-0'
          } transition-transform duration-300 ease-in-out`}
        >
          <ul>
            {submenu.map((subitem, index) => (
              <SubMenuItem
                key={subitem.id}
                title={subitem.title}
                url={subitem.url}
                isLast={index === submenu.length - 1}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
const SubMenuItem = ({ title, url ,isLast }) => (
  <li className={`px-2 ${isLast ? 'mb-14' : ''}`}>
    <a href={url} className="block py-2  border-b-2 border-dotted hover:text-orange-600 border-black">
      {title}
    </a>
  </li>
);
export default MenuItem;





