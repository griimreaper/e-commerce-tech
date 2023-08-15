'use client';

import React, { useEffect } from 'react';
import Card from '../card/page';
import { useSelector, useDispatch } from 'react-redux';
import { ProductDto, loadShoes } from '@/redux/actions';

export default function Cards() {
  const { shoesToRender } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(await loadShoes());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {shoesToRender?.map((s: ProductDto) => (
        <Card key={s.id} product={s} />
      ))}
    </div>
  );
}
