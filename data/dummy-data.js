import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Entrees'),
  new Category('c2', 'Drinks'),
  new Category('c3', 'Hamburgers'),
  new Category('c4', 'German'),
  new Category('c5', 'Light & Lovely'),
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Ribeye Steak',
    'Beef steak, sauce, french fries',
    12.40,
    require('../assets/images/ribeye1.jpg'),
  ),

  new Meal(
    'm2',
    ['c1'],
    // ['c1','c2'],
    'Wood Grills',
    'Pork, tomato, onion',
    44.21,
    require('../assets/images/woodgrills.jpeg'),
  ),

  new Meal(
    'm3',
    ['c1'],
    'Banging Saute',
    'Banging saute, just right',
    15.00,
    require('../assets/images/saute.jpg'),
    45,
  ),

  new Meal(
    'm4',
    ['c1','c4'],
    'Yummy Saute',
    'Yummified with great crunch',
    35.99,
    require('../assets/images/yummy.jpg'),
  ),

  new Meal(
    'm5',
    ['c5'],
    // ['c2', 'c5', 'c10'],
    'Name of item',
    33.99,
    require('../assets/images/yummy.jpg'),
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Name of item',
    33.99,
    require('../assets/images/yummy.jpg'),
  ),

  new Meal(
    'm7',
    ['c7'],
    'Name of item',
    33.99,
    require('../assets/images/yummy.jpg'),
  ),

  new Meal(
    'm8',
    ['c8'],
    'Name of item',
    33.99,
    require('../assets/images/yummy.jpg'),
  ),

  new Meal(
    'm9',
    ['c9'],
    'Name of item',
    33.99,
    require('../assets/images/yummy.jpg'),
  ),
  new Meal(
    'm10',
    ['c5'],
    // ['c2', 'c5', 'c10'],
    'Name of item',
    33.99,
    require('../assets/images/yummy.jpg'),
  ),

  //Drink Data
  new Meal(
    'd1',
    ['c2'],
    'Alana-ada-lime',
    'Rainbow Special lemonade',
    5.50,
    require('../assets/images/drink2.jpg'),
  ),
  new Meal(
    'd2',
    ['c2'],
    'Water',
    'Imported from the Nile River',
    2.50,
    require('../assets/images/drink3.jpg'),
  ),
  new Meal(
    'd3',
    ['c2'],
    'Orange Mama',
    'Orange heaven on ice',
    3.99,
    require('../assets/images/drink5.jpg'),
  ),
  new Meal(
    'd4',
    ['c2'],
    'Chocoloate Milk supreme',
    'Creamy, cold, sweet & smooth',
    5.99,
    require('../assets/images/drink7.jpg'),
  ),
];