import PeopleEntry from '@/components/PeopleEntry';
import PeopleGridEntry from '@/components/PeopleGridEntry';
import { Person, PeopleResponse } from '@/models/Person';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

interface DerivacionPeopleProps {
  People: Person[];
}

export const getServerSideProps: GetServerSideProps<DerivacionPeopleProps> = async () => {
  const res = await fetch('http:/localhost:4000/person');

  const PeopleResponse: PeopleResponse = await res.json();

  console.log(PeopleResponse.people)

  return {
    props: {
      People: PeopleResponse.people,
    },
  };
};

export default function DerivacionPersona({People}: DerivacionPeopleProps) {
  return (
    <>
      <Head>
        <title> Derivación de Persona </title>
      </Head>
      <main>
        <h1> Derivación de Personas </h1>
        <PeopleGridEntry people={People} />
      </main>
    </>
  );
}
