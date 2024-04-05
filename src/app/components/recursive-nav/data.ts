export const data: Nav[] = [
  {
    id: 1,
    name: 'Experience',
  },
  {
    id: 2,
    name: 'Activities',
    children: [
      {
        id: 3,
        name: 'Ice Skate',
      },
      {
        id: 4,
        name: 'Dance',
        children: [
          {
            id: 5,
            name: 'Bachata',
          },
          {
            id: 6,
            name: 'Salsa',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Viedeo Games',
    children: [
      {
        id: 8,
        name: 'League of Legends',
      },
      {
        id: 9,
        name: 'Overwatch',
      },
    ],
  },
  {
    id: 10,
    name: 'Pets',
  },
];

export interface Nav {
  id: number;
  name: string;
  children?: Nav[];
  expanded?: boolean;
}

export default function fetchData(): Promise<Nav[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
}
