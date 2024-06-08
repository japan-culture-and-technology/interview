import { Experience } from '../../../domain/Experience';

const experiences: Experience[] = [
  {
    id: '1',
    title: '体験1',
    slug: 'experience-1',
    pricePerGuest: 1000,
    maxGuests: 10,
  },
  {
    id: '2',
    title: '体験2',
    slug: 'experience-2',
    pricePerGuest: 2000,
    maxGuests: 5,
  },
  {
    id: '3',
    title: '体験3',
    slug: 'experience-3',
    pricePerGuest: 3000,
    maxGuests: 3,
  },
];

const DB = { experiences };

export default DB;
