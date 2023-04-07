import { Person } from '@/models/Person';
import { Col, Row } from 'react-bootstrap';
import PeopleEntry from './PeopleEntry';

interface PeopleGridEntryProps {
  people: Person[];
}

const PeopleGridEntry = ({ people }: PeopleGridEntryProps) => {
  return (
    <Row xs={1} sm={2} xl={3} className="g-4">
      {people.map((person) => (
        <Col key={person.id.toString()}>
            <PeopleEntry person={person}/>
        </Col>
      ))}
    </Row>
  );
};

export default PeopleGridEntry;
