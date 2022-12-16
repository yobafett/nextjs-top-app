import React from 'react';
import { Htag, Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>qwe</Htag>
      <Htag tag='h2'>qwe</Htag>
      <Htag tag='h3'>qwe</Htag>
      <Button appearance='primary'>qwe</Button>
      <Button appearance='ghost'>qwe</Button>
      <Button appearance='primary' arrow='right'>qwe</Button>
      <Button appearance='ghost' arrow='down'>qwe</Button>
    </>
  );
}
