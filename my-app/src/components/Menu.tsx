/** @format */

import { NavLink } from 'react-router-dom';
const customClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'menu__item menu__item-active' : 'menu__item';
export function Menu() {
  return (
    <nav className='menu'>
      <NavLink to='/' className={customClass}>
        Главная
      </NavLink>
      <NavLink to='/drift' className={customClass}>
        Дрифт-такси
      </NavLink>
      <NavLink to='/timeattack' className={customClass}>
        Time Attack
      </NavLink>
      <NavLink to='/forza' className={customClass}>
        Forza Karting
      </NavLink>
    </nav>
  );
}
