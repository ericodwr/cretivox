import { API_ENDPOINTS } from '@/app/api/endpoints';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React, { FunctionComponent } from 'react';
import ImgCarousel from '@/app/components/ImgCarousel';
import { product } from '@/app/types/product';
import { Rating } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';

async function getData(id: string) {
  const res = await fetch(`${API_ENDPOINTS}/${id}`);

  return res.json();
}

const page: FunctionComponent<{ params: Params }> = async ({ params }) => {
  const data: product = await getData(params.id);

  return (
    <div className="relative">
      <h1 className="text-center text-4xl font-bold ">
        {data.title} (${data.price})
      </h1>

      <h1 className="text-center text-1xl mb-3 opacity-80">{data.stock} stock left</h1>

      <div className="flex justify-center items-center flex-col ">
        <Rating name="read-only" precision={0.5} value={data.rating} readOnly />
      </div>
      <div className="flex justify-center items-center my-5">
        <ImgCarousel imgs={data.images} />
      </div>

      <h1 className="text-center text-3xl font-bold ">{data.description}</h1>

      <div className="absolute left-0 top-0">
        <Link href={'/'} className="flex justify-center items-center gap-2">
          <ChevronLeftIcon /> Back
        </Link>
      </div>
    </div>
  );
};

export default page;
