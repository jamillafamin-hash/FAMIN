export const getAgeCategory = (ageMonths) => {
  if (ageMonths === 4) return '4-month-old'
  if (ageMonths === 5) return '5-month-old'
  if (ageMonths >= 6) return '6-months-and-older'
  return 'other'
}

export const ageCategoryMap = {
  '4-month': { label: '4-MONTH-OLD CHICKENS', key: '4-month' },
  '5-month': { label: '5-MONTH-OLD CHICKENS', key: '5-month' },
  '6-plus': { label: '6-MONTHS AND OLDER', key: '6-plus' }
}
