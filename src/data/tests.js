// Possible test (each with compatible targets to category data)

const tests = [
  {
    id: 'power-happiness',
    name: 'Power happiness bias test',
    description: 'Find bias between power and happiness level.',
    targetType: 'power',
    categoryType: 'happiness',
    compatible: {
      'more_power': 'happy',
      'less_power': 'sad'
    },
    
  }
]

export default tests;
