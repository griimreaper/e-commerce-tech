'use client';

import React, { useEffect } from 'react';
import Card from '../card/page';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ProductDto, loadShoes } from '@/redux/actions';
export default function Cards() {
  const { shoesToRender } = useSelector((s: any) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('http://localhost:3001/products?page=0&quantity=12');
        dispatch(loadShoes(data.content));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {shoesToRender?.map((s:ProductDto) => <Card key={s.id} product={s}></Card>)}
    </div>
  );
}
