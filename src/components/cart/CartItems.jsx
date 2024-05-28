import CartProduct from './CartProduct';

function CartItems() {
  const tours = [
    {
      startLocation: {
        type: 'Point',
        coordinates: [-115.172652, 36.110904],
        address: '3663 S Las Vegas Blvd, Las Vegas, NV 89109, USA',
        description: 'Las Vegas, USA',
      },
      _id: '5c88fa8cf4afda39709c2961',
      name: 'The Park Camper',
      duration: 10,
      maxGroupSize: 15,
      difficulty: 'medium',
      ratingsAverage: 4.7,
      ratingsQuantity: 7,
      price: 1497,
      summary:
        "Breathing in Nature in America's most spectacular National Parks",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
      imageCover: 'tour-5-cover.jpg',
      images: ['tour-5-1.jpg', 'tour-5-2.jpg', 'tour-5-3.jpg'],
      startDates: [
        '2021-08-05T09:00:00.000Z',
        '2022-03-20T10:00:00.000Z',
        '2022-08-12T09:00:00.000Z',
      ],
      secretTour: false,
      locations: [
        {
          type: 'Point',
          coordinates: [-112.987418, 37.198125],
          description: 'Zion Canyon National Park',
          day: 1,
          _id: '5c88fa8cf4afda39709c2965',
          id: '5c88fa8cf4afda39709c2965',
        },
        {
          type: 'Point',
          coordinates: [-111.376161, 36.86438],
          description: 'Antelope Canyon',
          day: 4,
          _id: '5c88fa8cf4afda39709c2964',
          id: '5c88fa8cf4afda39709c2964',
        },
        {
          type: 'Point',
          coordinates: [-112.115763, 36.058973],
          description: 'Grand Canyon National Park',
          day: 5,
          _id: '5c88fa8cf4afda39709c2963',
          id: '5c88fa8cf4afda39709c2963',
        },
        {
          type: 'Point',
          coordinates: [-116.107963, 34.011646],
          description: 'Joshua Tree National Park',
          day: 9,
          _id: '5c88fa8cf4afda39709c2962',
          id: '5c88fa8cf4afda39709c2962',
        },
      ],
      guides: [
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a21f22f8fb814b56fa18a',
          name: 'Aarav Lynn',
          role: 'lead-guide',
          email: 'aarav@example.com',
          photo: 'user-11.jpg',
          locations: [],
        },
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a23412f8fb814b56fa18c',
          name: 'Ben Hadley',
          role: 'guide',
          email: 'ben@example.com',
          photo: 'user-13.jpg',
          locations: [],
        },
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a201e2f8fb814b56fa186',
          name: 'Kate Morrison',
          role: 'guide',
          email: 'kate@example.com',
          photo: 'user-7.jpg',
          locations: [],
        },
      ],
      slug: 'the-park-camper',
      durationWeeks: 1.4285714285714286,
      id: '5c88fa8cf4afda39709c2961',
    },
    {
      startLocation: {
        type: 'Point',
        coordinates: [-115.172652, 36.110904],
        address: '3663 S Las Vegas Blvd, Las Vegas, NV 89109, USA',
        description: 'Las Vegas, USA',
      },
      _id: '5c88fa8cf4afda39709c2961',
      name: 'The Park Camper',
      duration: 10,
      maxGroupSize: 15,
      difficulty: 'medium',
      ratingsAverage: 4.7,
      ratingsQuantity: 7,
      price: 1497,
      summary:
        "Breathing in Nature in America's most spectacular National Parks",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
      imageCover: 'tour-5-cover.jpg',
      images: ['tour-5-1.jpg', 'tour-5-2.jpg', 'tour-5-3.jpg'],
      startDates: [
        '2021-08-05T09:00:00.000Z',
        '2022-03-20T10:00:00.000Z',
        '2022-08-12T09:00:00.000Z',
      ],
      secretTour: false,
      locations: [
        {
          type: 'Point',
          coordinates: [-112.987418, 37.198125],
          description: 'Zion Canyon National Park',
          day: 1,
          _id: '5c88fa8cf4afda39709c2965',
          id: '5c88fa8cf4afda39709c2965',
        },
        {
          type: 'Point',
          coordinates: [-111.376161, 36.86438],
          description: 'Antelope Canyon',
          day: 4,
          _id: '5c88fa8cf4afda39709c2964',
          id: '5c88fa8cf4afda39709c2964',
        },
        {
          type: 'Point',
          coordinates: [-112.115763, 36.058973],
          description: 'Grand Canyon National Park',
          day: 5,
          _id: '5c88fa8cf4afda39709c2963',
          id: '5c88fa8cf4afda39709c2963',
        },
        {
          type: 'Point',
          coordinates: [-116.107963, 34.011646],
          description: 'Joshua Tree National Park',
          day: 9,
          _id: '5c88fa8cf4afda39709c2962',
          id: '5c88fa8cf4afda39709c2962',
        },
      ],
      guides: [
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a21f22f8fb814b56fa18a',
          name: 'Aarav Lynn',
          role: 'lead-guide',
          email: 'aarav@example.com',
          photo: 'user-11.jpg',
          locations: [],
        },
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a23412f8fb814b56fa18c',
          name: 'Ben Hadley',
          role: 'guide',
          email: 'ben@example.com',
          photo: 'user-13.jpg',
          locations: [],
        },
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a201e2f8fb814b56fa186',
          name: 'Kate Morrison',
          role: 'guide',
          email: 'kate@example.com',
          photo: 'user-7.jpg',
          locations: [],
        },
      ],
      slug: 'the-park-camper',
      durationWeeks: 1.4285714285714286,
      id: '5c88fa8cf4afda39709c2961',
    },
    {
      startLocation: {
        type: 'Point',
        coordinates: [-115.172652, 36.110904],
        address: '3663 S Las Vegas Blvd, Las Vegas, NV 89109, USA',
        description: 'Las Vegas, USA',
      },
      _id: '5c88fa8cf4afda39709c2961',
      name: 'The Park Camper',
      duration: 10,
      maxGroupSize: 15,
      difficulty: 'medium',
      ratingsAverage: 4.7,
      ratingsQuantity: 7,
      price: 1497,
      summary:
        "Breathing in Nature in America's most spectacular National Parks",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
      imageCover: 'tour-5-cover.jpg',
      images: ['tour-5-1.jpg', 'tour-5-2.jpg', 'tour-5-3.jpg'],
      startDates: [
        '2021-08-05T09:00:00.000Z',
        '2022-03-20T10:00:00.000Z',
        '2022-08-12T09:00:00.000Z',
      ],
      secretTour: false,
      locations: [
        {
          type: 'Point',
          coordinates: [-112.987418, 37.198125],
          description: 'Zion Canyon National Park',
          day: 1,
          _id: '5c88fa8cf4afda39709c2965',
          id: '5c88fa8cf4afda39709c2965',
        },
        {
          type: 'Point',
          coordinates: [-111.376161, 36.86438],
          description: 'Antelope Canyon',
          day: 4,
          _id: '5c88fa8cf4afda39709c2964',
          id: '5c88fa8cf4afda39709c2964',
        },
        {
          type: 'Point',
          coordinates: [-112.115763, 36.058973],
          description: 'Grand Canyon National Park',
          day: 5,
          _id: '5c88fa8cf4afda39709c2963',
          id: '5c88fa8cf4afda39709c2963',
        },
        {
          type: 'Point',
          coordinates: [-116.107963, 34.011646],
          description: 'Joshua Tree National Park',
          day: 9,
          _id: '5c88fa8cf4afda39709c2962',
          id: '5c88fa8cf4afda39709c2962',
        },
      ],
      guides: [
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a21f22f8fb814b56fa18a',
          name: 'Aarav Lynn',
          role: 'lead-guide',
          email: 'aarav@example.com',
          photo: 'user-11.jpg',
          locations: [],
        },
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a23412f8fb814b56fa18c',
          name: 'Ben Hadley',
          role: 'guide',
          email: 'ben@example.com',
          photo: 'user-13.jpg',
          locations: [],
        },
        {
          startLocation: {
            type: 'Point',
          },
          _id: '5c8a201e2f8fb814b56fa186',
          name: 'Kate Morrison',
          role: 'guide',
          email: 'kate@example.com',
          photo: 'user-7.jpg',
          locations: [],
        },
      ],
      slug: 'the-park-camper',
      durationWeeks: 1.4285714285714286,
      id: '5c88fa8cf4afda39709c2961',
    },
  ];
  return (
    <div className="cart-card-container">
      {tours.map((tour) => (
        <CartProduct key={tour.id} {...tour} />
      ))}
    </div>
  );
}

export default CartItems;
