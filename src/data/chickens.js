const chickens = [
  {
    id: 1,
    name: 'Rhode Island Red',
    origin: 'Rhode Island, United States',
    description: 'A hardy chicken with rich reddish-brown feathers. It is popular for laying brown eggs and is also raised for meat. It adapts well to different environments.',
    ageMonths: 5,
    priceMin: 2.06,
    priceMax: 4.76,
    image: '/images/chickens/rhode-island-red.jpg',
    purpose: ['Egg production', 'Meat production'],
    characteristics: ['Hardy', 'Adaptable', 'Good layer'],
    availability: 'In stock',
    stock: 20
  },
  {
    id: 2,
    name: 'Leghorn',
    origin: 'Italy',
    description: 'A lightweight chicken, usually with white feathers and a large red comb. It is an excellent egg layer, producing many white eggs, and is active and energetic.',
    ageMonths: 4,
    priceMin: 1.59,
    priceMax: 3.17,
    image: '/images/chickens/leghorn.jpg',
    purpose: ['Egg production'],
    characteristics: ['Excellent layer', 'Active', 'Lightweight'],
    availability: 'In stock',
    stock: 25
  },
  {
    id: 3,
    name: 'Barred Plymouth Rock',
    origin: 'United States',
    description: 'This breed is known for its black-and-white striped feathers. It is friendly, strong, and useful for both meat production and brown egg laying.',
    ageMonths: 5,
    priceMin: 1.90,
    priceMax: 3.97,
    image: '/images/chickens/barred-plymouth-rock.jpg',
    purpose: ['Egg production', 'Meat production'],
    characteristics: ['Friendly', 'Strong', 'Dual purpose'],
    availability: 'In stock',
    stock: 18
  },
  {
    id: 4,
    name: 'Silkie',
    origin: 'China',
    description: 'A small chicken with soft, fluffy feathers that resemble fur. It has dark skin, feathered feet, and a gentle temperament. It is often kept as a pet or ornamental chicken.',
    ageMonths: 6,
    priceMin: 3.17,
    priceMax: 7.93,
    image: '/images/chickens/silkie.jpg',
    purpose: ['Ornamental', 'Pet'],
    characteristics: ['Fluffy', 'Gentle', 'Ornamental'],
    availability: 'In stock',
    stock: 15
  },
  {
    id: 5,
    name: 'Brahma',
    origin: 'United States, developed from Asian stock',
    description: 'A very large chicken with feathered legs and feet. It is calm and friendly and is raised for meat as well as for its brown eggs.',
    ageMonths: 6,
    priceMin: 3.97,
    priceMax: 12.69,
    image: '/images/chickens/brahma.jpg',
    purpose: ['Meat production', 'Egg production'],
    characteristics: ['Large', 'Calm', 'Feathered feet'],
    availability: 'In stock',
    stock: 12
  },
  {
    id: 6,
    name: 'Sussex',
    origin: 'Sussex, England',
    description: 'Often white with black markings around the neck and tail, though other colors exist. It is a good dual-purpose breed, raised for both meat and eggs.',
    ageMonths: 4,
    priceMin: 1.90,
    priceMax: 3.97,
    image: '/images/chickens/sussex.jpg',
    purpose: ['Egg production', 'Meat production'],
    characteristics: ['Dual purpose', 'Good layer', 'Hardy'],
    availability: 'In stock',
    stock: 20
  },
  {
    id: 7,
    name: 'Australorp',
    origin: 'Australia',
    description: 'A chicken with glossy black feathers that may show a green shine in sunlight. It is known for excellent egg production and its calm, manageable nature.',
    ageMonths: 5,
    priceMin: 2.38,
    priceMax: 4.76,
    image: '/images/chickens/australorp.jpg',
    purpose: ['Egg production'],
    characteristics: ['Excellent layer', 'Calm', 'Shiny feathers'],
    availability: 'In stock',
    stock: 22
  },
  {
    id: 8,
    name: 'Orpington',
    origin: 'England',
    description: 'A large, rounded chicken with soft-looking feathers. The buff-colored variety is especially popular. Orpingtons are gentle birds raised for brown eggs and meat.',
    ageMonths: 5,
    priceMin: 2.86,
    priceMax: 6.34,
    image: '/images/chickens/orpington.jpg',
    purpose: ['Egg production', 'Meat production'],
    characteristics: ['Gentle', 'Rounded', 'Good layer'],
    availability: 'In stock',
    stock: 16
  },
  {
    id: 9,
    name: 'Ayam Cemani',
    origin: 'Indonesia',
    description: 'A rare-looking breed famous for its black feathers, skin, comb, and legs due to fibromelanosis. Its meat and bones are also dark, but its eggs are cream-colored.',
    ageMonths: 6,
    priceMin: 15.86,
    priceMax: 23.79,
    image: '/images/chickens/ayam-cemani.jpg',
    purpose: ['Ornamental', 'Specialty'],
    characteristics: ['Rare', 'All black', 'Unique'],
    availability: 'In stock',
    stock: 5
  },
  {
    id: 10,
    name: 'Cochin',
    origin: 'China',
    description: 'A large, fluffy chicken with abundant feathers covering its legs and feet. It is calm and friendly and is commonly kept for exhibition, as a pet, and for its brown eggs.',
    ageMonths: 6,
    priceMin: 3.17,
    priceMax: 7.93,
    image: '/images/chickens/cochin.jpg',
    purpose: ['Ornamental', 'Egg production'],
    characteristics: ['Fluffy', 'Calm', 'Feathered legs'],
    availability: 'In stock',
    stock: 10
  },
  {
    id: 11,
    name: 'Polish Chicken',
    origin: 'Poland',
    description: 'A distinctive chicken with a large crest of feathers on its head, sometimes covering its eyes. It comes in several colors and is mainly raised for ornamental purposes and poultry shows.',
    ageMonths: 4,
    priceMin: 3.17,
    priceMax: 7.93,
    image: '/images/chickens/polish.jpg',
    purpose: ['Ornamental'],
    characteristics: ['Crested', 'Distinctive', 'Show bird'],
    availability: 'In stock',
    stock: 12
  },
  {
    id: 12,
    name: 'Japanese Bantam (Chabo)',
    origin: 'Japan',
    description: 'A small ornamental chicken with very short legs, a large upright tail, and attractive feathers. It is commonly kept as a pet or for poultry exhibitions and lays relatively small eggs.',
    ageMonths: 4,
    priceMin: 2.38,
    priceMax: 6.34,
    image: '/images/chickens/japanese-bantam.jpg',
    purpose: ['Ornamental', 'Pet'],
    characteristics: ['Small', 'Short legs', 'Upright tail'],
    availability: 'In stock',
    stock: 14
  }
]

export default chickens
export const getChickenById = (id) => {
  const numId = Number(id)
  return chickens.find((chicken) => chicken.id === numId)
}

export const getChickensByAgeCategory = (category) => {
  if (category === '4-month') return chickens.filter((c) => c.ageMonths === 4)
  if (category === '5-month') return chickens.filter((c) => c.ageMonths === 5)
  if (category === '6-plus') return chickens.filter((c) => c.ageMonths >= 6)
  return chickens
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
}
