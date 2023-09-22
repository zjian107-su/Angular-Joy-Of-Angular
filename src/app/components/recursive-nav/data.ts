export const data: Nav[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
    children: [
      {
        id: 3,
        name: 'John Smith',
      },
      {
        id: 4,
        name: 'Jane Smith',
        children: [
          {
            id: 5,
            name: 'John Doe',
          },
          {
            id: 6,
            name: 'Jane Doe',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'John Smith',
    children: [
      {
        id: 8,
        name: 'Jane Smith',
      },
      {
        id: 9,
        name: 'John Doe',
      },
    ],
  },
  {
    id: 10,
    name: 'Jane Doe',
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
