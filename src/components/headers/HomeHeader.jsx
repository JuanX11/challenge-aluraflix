import { Navbar, NavbarBrand, Image } from '@nextui-org/react';

import logo from '../../assets/aluralogo.jpg';
import NavButtonComponent from '../HomeScreen/NavButton.jsx';
export default function HomeHeaderComponent() {
  return (
    <Navbar height="10vh" className="bg-gray-950 ">
      <NavbarBrand>
        <Image radius="none" height={120} alt="NextUI hero Image" src={logo} />
      </NavbarBrand>
      <NavButtonComponent text={'Home'} link={'/'} variant={'shadow'} />
      <NavButtonComponent
        text={'Nuevo Video'}
        link={'/nuevovideo'}
        variant={'ghost'}
      />
    </Navbar>
  );
}
