module.exports = {
  plugins: [
    'you-dont-need-momentjs'
  ],
  rules: {
    // Needs to be kept up to date with:
    // https://github.com/you-dont-need/You-Dont-Need-Momentjs/blob/master/lib/rules/methods.json
    'you-dont-need-momentjs/seconds': 'warn',
    'you-dont-need-momentjs/hours': 'warn',
    'you-dont-need-momentjs/date': 'warn',
    'you-dont-need-momentjs/day': 'warn',
    'you-dont-need-momentjs/dayOfYear': 'warn',
    'you-dont-need-momentjs/week': 'warn',
    'you-dont-need-momentjs/isoWeeksInYear': 'warn',
    'you-dont-need-momentjs/max': 'warn',
    'you-dont-need-momentjs/min': 'warn',
    'you-dont-need-momentjs/add': 'warn',
    'you-dont-need-momentjs/subtract': 'warn',
    'you-dont-need-momentjs/startOf': 'warn',
    'you-dont-need-momentjs/endOf': 'warn',
    'you-dont-need-momentjs/format': 'warn',
    'you-dont-need-momentjs/fromNow': 'warn',
    'you-dont-need-momentjs/to': 'warn',
    'you-dont-need-momentjs/diff': 'warn',
    'you-dont-need-momentjs/daysInMonth': 'warn',
    'you-dont-need-momentjs/isBefore': 'warn',
    'you-dont-need-momentjs/isSame': 'warn',
    'you-dont-need-momentjs/isAfter': 'warn',
    'you-dont-need-momentjs/isBetween': 'warn',
    'you-dont-need-momentjs/isLeapYear': 'warn',
    'you-dont-need-momentjs/isDate': 'warn',
  },
};
