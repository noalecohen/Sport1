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
  },
  api: {
    BASE_URL: 'https://sp1liv.maariv.co.il',
    HEADER_KEY: 'x-sport1-mobile-app',
    getAllCategories: {
      ENDPOINT: '/wp-json/sport1/v1/navigation',
      TYPE_PREFIX: 'more/getCategories',
    },
    getConfig: {
      ENDPOINT: '/wp-json/sport1/v1/config',
    },
  },
  boardingScreen: {
    slides: {
      firstSlide: {
        ID: '1',
        NAME: 'first',
        IMAGE_PATH: require('../assets/images/onBoarding1.png'),
        TITLE: 'האפליקציה החדשה של ספורט1!',
        SUBTITLE:
          'ברוך הבא לאפליקציית הספורט הראשונה בישראל שמותאמת במיוחד עבורך',
      },
      secondSlide: {
        ID: '2',
        NAME: 'second',
        IMAGE_PATH: require('../assets/images/onBoarding2.png'),
        TITLE: 'וידאו ללא הגבלה',
        SUBTITLE: 'צפה בליגות הטובות בעולם בספריית ה-VOD הגדולה בישראל',
      },
      thirdSlide: {
        ID: '3',
        NAME: 'third',
        IMAGE_PATH: require('../assets/images/onBoarding3.png'),
        SUBTITLE:
          'בחר את הקבוצות והליגות שלך ותהנה מחוויה מותאמת אישית, בחינם.',
        TITLE: 'מה מעניין אותך?',
        footer: {
          HAVE_USER_BUTTON: 'כבר יש לי משתמש',
          START: 'קח אותי פנימה',
        },
      },
    },
  },
  forceUpdateScreen: {
    IMAGE_PATH: require('../assets/images/football.png'),
    TITLE: 'יש לנו גרסה חדשה בשבילך!',
    SUBTITLE: 'עדכן את האפליקציה בשביל להנות מהתכנים הכי מעודכנים של ספורט 1.',
    UPDATE_BUTTON: 'עדכן לגרסה החדשה',
  },
  stackNavigationScreens: {
    splash: 'splash',
    forceUpdate: 'forceUpdateScreen',
    onBoarding: 'onBoardingScreen',
    main: 'mainScreen',
  },
};
