import { Navbar, NavbarBrand, Image } from '@nextui-org/react';

import logo from '../assets/aluralogo.jpg';

export default function FooterComponent() {
  return (
    <Navbar
      height="10vh"
      className="bg-gray-950 flex items-center justify-center"
    >
      <NavbarBrand className="flex items-center justify-center w-full">
        <Image
          radius="none"
          height={120}
          alt="NextUI hero Image"
          src={logo}
          className="mx-auto"
        />
      </NavbarBrand>
    </Navbar>
  );
}
