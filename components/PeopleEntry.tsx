import { Person } from '@/models/Person';
import { Card } from 'react-bootstrap';

interface PeopleEntryProps {
  person: Person;
}

const PeopleEntry = ({
  person: {
    id,
    firstName,
    lastName,
    idGender,
    dateOfBirth,
    phone,
    idSourceDevice,
    idCurrentDevice,
    idTargetDevice,
    deletedAt,
    createdAt,
    updatedAt,
    Gender,
    SourceDevice,
    CurrentDevice,
    TargetDevice,
  },
}: PeopleEntryProps) => {
  return (
    <Card className="h-100">
        <Card.Body>
            <Card.Title>{firstName} {lastName}</Card.Title>
            <Card.Text> Fecha de Nacimiento: {dateOfBirth.toString()} Telefono: {phone.toString()} Genero: {Gender.genderName} </Card.Text>
        </Card.Body>
    </Card>
  );
};

export default PeopleEntry;
