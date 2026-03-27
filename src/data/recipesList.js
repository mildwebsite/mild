export const recipeRows = [
  // Row 1
  [
    {
      id: 1, time: '26 min', meta: '478 kcal  •  Difficult', name: 'Grilled Chicken Breasts with Pesto and Cherry Tomatoes',
      img: 'images/meal/meal.png', imgAlt: 'Grilled Chicken', hot: true, type: 'main',
      ingredients: [{ img: 'images/meal/Olive oil.jpg' }]
    },
    {
      id: 2, time: '26 min', meta: '400 kcal  •  Vegetarian  •  Easy', name: 'Wholemeal Penne with Pesto and Spinach',
      img: 'images/meal/meal.png', imgAlt: 'Penne with Pesto', type: 'main',
      ingredients: [{ img: 'images/meal/Lemon juice_2.jpg' }]
    },
    {
      id: 3, time: '26 min', meta: '150 kcal  •  Vegetarian  •  Easy', name: 'Tomato Avocado Pepper Salad',
      img: 'images/meal/meal.png', imgAlt: 'Salad', type: 'salads',
      ingredients: [
        { img: 'images/meal/whole-wheat bread_1.jpg' },
        { img: 'images/meal/sea salt flakes (1).jpg' },
        { img: 'images/meal/Olive oil.jpg' },
      ],
      moreIngredients: 2
    },
    {
      id: 4, time: '26 min', meta: '150 kcal  •  Vegetarian  •  Easy', name: 'Tomato Avocado Pepper Salad',
      img: 'images/meal/meal.png', imgAlt: 'Salad', type: 'salads',
      ingredients: [{ img: 'images/meal/Olive oil.jpg' }]
    }
  ],
  // Row 2
  [
    {
      id: 5, time: '26 min', meta: '150 kcal  •  Vegetarian  •  Easy', name: 'Tomato Avocado Pepper Salad',
      img: 'images/meal/meal.png', imgAlt: 'Salad', type: 'salads',
      ingredients: [{ img: 'images/meal/Lemon juice_2.jpg' }]
    },
    {
      id: 6, time: '26 min', meta: '400 kcal  •  Vegetarian  •  Easy', name: 'Wholemeal Penne with Pesto and Spinach',
      img: 'images/meal/meal.png', imgAlt: 'Penne', type: 'main',
      ingredients: [{ img: 'images/meal/sea salt flakes (1).jpg' }]
    },
    {
      id: 7, time: '35 min', meta: '478 kcal  •  Difficult', name: 'Grilled Chicken Breasts with Pesto and Cherry Tomatoes',
      img: 'images/meal/meal.png', imgAlt: 'Grilled Chicken', hot: true, type: 'main',
      ingredients: [{ img: 'images/meal/Olive oil.jpg' }]
    },
    {
      id: 8, time: '15 min', meta: '150 kcal  •  Vegetarian  •  Easy', name: 'Tomato Avocado Pepper Salad',
      img: 'images/meal/meal.png', imgAlt: 'Salad', type: 'salads',
      ingredients: [{ img: 'images/meal/Lemon juice_2.jpg' }]
    }
  ],
  // Row 4
  [
    {
      id: 9, time: '40 min', meta: '400 kcal  •  Vegetarian  •  Easy', name: 'Wholemeal Penne with Pesto and Spinach',
      img: 'images/meal/meal.png', imgAlt: 'Penne', type: 'main',
      ingredients: [
        { img: 'images/meal/whole-wheat bread_1.jpg' },
        { img: 'images/meal/sea salt flakes (1).jpg' },
      ],
      moreIngredients: 1
    },
    {
      id: 10, time: '10 min', meta: '150 kcal  •  Vegetarian  •  Easy', name: 'Tomato Avocado Pepper Salad',
      img: 'images/meal/meal.png', imgAlt: 'Salad', type: 'salads',
      ingredients: [{ img: 'images/meal/Olive oil.jpg' }]
    },
    {
      id: 11, time: '30 min', meta: '400 kcal  •  Vegetarian  •  Easy', name: 'Wholemeal Penne with Pesto and Spinach',
      img: 'images/meal/meal.png', imgAlt: 'Penne', type: 'main',
      ingredients: [{ img: 'images/meal/Lemon juice_2.jpg' }]
    },
    {
      id: 12, time: '45 min', meta: '280 kcal  •  Easy', name: 'Grilled Chicken Breasts with Pesto and Cherry Tomatoes',
      img: 'images/meal/meal.png', imgAlt: 'Soup', type: 'soups',
      ingredients: [
        { img: 'images/meal/sea salt flakes (1).jpg' },
        { img: 'images/meal/Olive oil.jpg' },
      ]
    }
  ]
]

export const featuredRecipe = {
  id: 100, time: '26 min',
  meta: '400 kcal  •  Vegetarian  •  Easy',
  name: 'Wholemeal Penne with Pesto and Spinach',
  description: 'A succulent and herb-infused chicken breast poached to perfection with fresh vegetables and herbs. This versatile preparation is ideal for enhancing your salads, enriching soups, or creating delicious sandwiches',
  img: 'images/meal/meal.png', imgAlt: 'Penne',
  ingredients: [{ img: 'images/meal/Olive oil.jpg' }]
}

export const stackRecipes = [
  {
    id: 101, time: '26 min', meta: '150 kcal  •  Vegetarian  •  Easy', name: 'Tomato Avocado Pepper Salad',
    img: 'images/meal/meal.png', imgAlt: 'Salad',
    ingredients: [
      { img: 'images/meal/whole-wheat bread_1.jpg' },
      { img: 'images/meal/sea salt flakes (1).jpg' },
      { img: 'images/meal/Olive oil.jpg' },
    ],
    moreIngredients: 2
  },
  {
    id: 102, time: '26 min', meta: '150 kcal  •  Vegetarian  •  Easy', name: 'Tomato Avocado Pepper Salad',
    img: 'images/meal/meal.png', imgAlt: 'Salad',
    ingredients: [
      { img: 'images/meal/whole-wheat bread_1.jpg' },
      { img: 'images/meal/sea salt flakes (1).jpg' },
      { img: 'images/meal/Olive oil.jpg' },
    ],
    moreIngredients: 2
  }
]
