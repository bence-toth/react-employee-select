const nbsp = '\u00a0'

export default {
  'en-US': {
    employeeFetchError: [
      // Non-breaking spaces so it doesn't look bad when width is narrow
      `This went wrong, maybe try something${nbsp}else.`,
      `If this persists, please contact Peakon${nbsp}support.`
    ],
    employeeNoQueryResults: [
      'Not sure who you are looking for.',
      'Maybe it’s a typo?'
    ],
    employeeSelectPlaceholder: 'Choose Manager'
  }
}
