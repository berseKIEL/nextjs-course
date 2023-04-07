import PeopleEntry from "@/components/PeopleEntry";
import { Person } from "@/models/Person";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const SearchPerson = () => {
  const [ searchPerson, setSearchPerson] = useState<Person | null>(null);
  const [ searchResultsLoading , setSearchResultsLoading ] = useState(false);
  const [ searchResultsLoadingIsError , setSearchResultsLoadingIsError ] = useState(false);
  
  async function handlerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();
    
    if (searchQuery) {
      try {
        setSearchPerson(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);
        const response = await fetch("api/search-person?q=" + searchQuery)
        const person: Person = await response.json()
        setSearchPerson(person);
      } catch (error) {
        console.error(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }


  return (
    <>
    <Head>
      <title> Busqueda de Personas </title>
    </Head>
    <main>
      <h1> Busqueda de Personas </h1>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label> Busqueda de Personas por DNI</Form.Label>
          <Form.Control name="searchQuery" placeholder="Ejemplo: 42698355" type="number"/>
        </Form.Group>
        <Button type="submit" disabled={searchResultsLoading}>
          Search
        </Button>
      </Form>
      <div className="d-flex flex-column align-items-center">
        {searchResultsLoading && <Spinner animation="border" />}
        {searchResultsLoadingIsError && <p> Algún error se produjo. Por favor, intentalo de nuevo</p>}
        {searchPerson && <PeopleEntry person={searchPerson}/>}
      </div>
    </main>
    </>
  );
};

export default SearchPerson;

