'use client';

import React, { FunctionComponent } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

const ImgCarousel: FunctionComponent<{ imgs: string[] }> = ({ imgs }) => {
  return (
    <div style={{ height: '60vh', width: '60vw' }}>
      <Slide>
        {imgs.map((data, i) => {
          return (
            <div className="flex justify-center items-center" key={i}>
              <Image
                src={data}
                width={1000}
                height={300}
                style={{ height: '450px', width: 'auto', objectFit: 'cover' }}
                alt={data}
              />
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default ImgCarousel;
