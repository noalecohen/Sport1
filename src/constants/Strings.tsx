export default {
  homeScreen: {
    NAME: 'HOME',
    LABEL: 'ראשי',
    PLACEHOLDER: 'Home Screen',
  },

  vodScreen: {
    NAME: 'VOD',
    LABEL: 'VOD',
    PLACEHOLDER: 'VOD Screen',
  },

  moreScreen: {
    NAME: 'MORE',
    LABEL: 'עוד',
    SEARCH_PLACEHOLDER: 'חפש קבוצות, ליגות, שחקנים….',
    slice: {
      NAME: 'more',
    },
    api: {
      BASE_URL: 'https://sp1liv.maariv.co.il',
      getAllCategories: {
        ENDPOINT: '/wp-json/sport1/v1/navigation',
        HEADER_KEY: 'x-sport1-mobile-app',
        TYPE_PREFIX: 'more/getCategories',
      },
    },
  },
};

//export { homeScreen, vodScreen, moreScreen };
