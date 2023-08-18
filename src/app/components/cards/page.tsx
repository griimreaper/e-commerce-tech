'use client';

import React, { useEffect } from 'react';
import Card from '../card/page';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ProductDto, loadShoes } from '@/redux/actions';
export default function Cards() {
  const { shoesToRender } = useSelector((s: any) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(await loadShoes());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {shoesToRender?.map((s: ProductDto) => <Card key={s.id} product={s}></Card>)}
    </div>
  );
}
