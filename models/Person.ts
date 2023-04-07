import { Device } from './Device';
import { Gender } from './Gender';

export interface Person {
  id: Number;
  firstName: String;
  lastName: String;
  idGender: Number;
  dateOfBirth: Date;
  phone: Number;
  idSourceDevice: Number;
  idCurrentDevice: Number;
  idTargetDevice: Number;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  Gender: Gender;
  SourceDevice: Device;
  CurrentDevice: Device;
  TargetDevice: Device;
}

export interface PersonResponse {
  person: Person;
}

export interface PeopleResponse {
  people: Person[];
}
