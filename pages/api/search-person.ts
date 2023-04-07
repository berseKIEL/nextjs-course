import { PersonResponse } from '@/models/Person';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();

  if (!searchQuery) {
    return res.status(400).json({
      status: 'failed',
      error: 'Por favor, provee dni para la busqueda',
    });
  }

  const response = await fetch(
    `http:/localhost:4000/person/${searchQuery}`
  );

  const PeopleResponse: PersonResponse = await response.json();

  res.status(200).json(PeopleResponse.person);
}
