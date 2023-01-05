import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Htag, Button, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>qwe</Htag>
      <Htag tag='h2'>qwe</Htag>
      <Htag tag='h3'>qwe</Htag>
      <Button appearance='primary'>qwe</Button>
      <Button appearance='ghost'>qwe</Button>
      <Button appearance='primary' arrow='right'>qwe</Button>
      <Button appearance='ghost' arrow='down'>qwe</Button>
      <Ptag size='s'>Lorem ipsum dolor</Ptag>
      <Ptag size='m'>Lorem ipsum dolor</Ptag>
      <Ptag size='l'>Lorem ipsum dolor</Ptag>
      <Tag size='s' color='ghost' href='/One'>One</Tag>
      <Tag size='s' color='primary'>Two</Tag>
      <Tag size='m' color='green'>Three</Tag>
      <Tag size='m' color='gray'>Four</Tag>
      <Tag size='m' color='red'>Five</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Rating rating={3} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategory
  })

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}