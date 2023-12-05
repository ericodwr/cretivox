'use client';

import React, { FunctionComponent } from 'react';
import { API_ENDPOINTS } from './api/endpoints';
import { product } from './types/product';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const DashboardItem: FunctionComponent<{ products: product[] }> = ({
  products,
}) => {
  return (
    <div>
      <p className="font-semibold text-2xl my-4">
        Total Products: {products.length}
      </p>
      <div className="grid grid-cols-3 gap-4">
        {products.map((d: product, i: number) => {
          return (
            <div key={i}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: '12rem', width: '100%' }}
                  image={d.thumbnail}
                  title={d.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {d.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="caption"
                    component="div"
                    className="capitalize"
                  >
                    {d.category}
                  </Typography>
                  <div className="flex justify-between">
                    <Typography variant="body2" color="text.secondary">
                      ${d.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Stock {d.stock}
                    </Typography>
                  </div>
                </CardContent>
                <div className="flex">
                  <div className="w-full">
                    <CardActions>
                      <Link
                        href={`http://localhost:3000/products/${d.id}`}
                        className="w-full"
                      >
                        <Button size="small" className="w-full">
                          Details
                        </Button>
                      </Link>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardItem;
