import React from 'react';
import { Htag, Button, Ptag } from '../components';

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
      <Ptag size='s'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime possimus?
        Maiores, suscipit ex fugit quas, doloremque iusto debitis dolor numquam tenetur
        quis vitae ullam alias voluptatum cum incidunt quo?
      </Ptag>
      <Ptag size='m'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime possimus?
        Maiores, suscipit ex fugit quas, doloremque iusto debitis dolor numquam tenetur
        quis vitae ullam alias voluptatum cum incidunt quo?
      </Ptag>
      <Ptag size='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime possimus?
        Maiores, suscipit ex fugit quas, doloremque iusto debitis dolor numquam tenetur
        quis vitae ullam alias voluptatum cum incidunt quo?
      </Ptag>
    </>
  );
}
