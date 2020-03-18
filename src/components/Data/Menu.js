const Menu = [
  {
    "name": "Salad",
    "choices": [
      {"name": "Santa Fe"},
      {"name": "Greek"},
      {"name": "Asian"}
    ],
    "related": [
      {
        "name": "Dressing",
        "choices": [
          { "name": "Italian" },
          { "name": "Blue Cheese" },
          { "name": "Ranch" }
        ]
      },
      {
        "name": "Bread",
        "choices": [
          { "name": "Italian" },
          { "name": "flat" },
          { "name": "Sourdough" }
        ]
      }
    ]
  },
  {
    "name": "Entree",
    "choices": [
      {"name": "Steak"},
      {"name": "Salmon"},
      {"name": "Rice"}
    ],
    "related": [

    ]
  },
  {
    "name": "Soup",
    "choices": [
      {"name": "Minestrone"},
      {"name": "Hot and Sour"},
      {"name": "Miso"}
    ],
    "related": [
      {
        "name": "Breads",
        "choices": [
          { "name": "Breadsticks" }
        ]
      }
    ]
  }
]

export default Menu;