import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Divider from '@mui/material/Divider';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center p-5">
        <Link href={'/'}>
          <Image
            src={'/logo.png'}
            width={150}
            height={150}
            className="cursor-pointer"
            alt="logo"
          />
        </Link>
      </div>
      <Divider />
    </>
  );
};

export default Navbar;
