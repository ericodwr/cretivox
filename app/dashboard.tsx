'use client';

import React, { FunctionComponent, useState, useEffect } from 'react';
import { Tab, Tabs } from '@mui/material';
import DashboardItem from './dashboardItem';
import Image from 'next/image';
import { product } from './types/product';

const Dashboard: FunctionComponent<{
  categories: string[];
  products: product[];
}> = ({ categories, products }) => {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [productsList, setProductsList] = useState(products);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setCategory(categories[newValue - 1]);

    if (newValue === 0) {
      setProductsList(products);
    } else {
      setProductsList(
        products.filter((p) => p.category == categories[newValue - 1]),
      );
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All" />
          {categories.map((categ, i) => (
            <Tab label={categ} key={i} />
          ))}
        </Tabs>
      </div>

      <DashboardItem products={productsList} />
    </div>
  );
};

export default Dashboard;
