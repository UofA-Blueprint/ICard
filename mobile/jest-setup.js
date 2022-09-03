require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);
jest.mock('@gorhom/bottom-sheet', () => {
  const RN = require('react-native');

  return {
    __esModule: true,
    default: RN.View, // mocks the BottomSheet
    namedExport: {
      ...require('react-native-reanimated/mock'),
      ...jest.requireActual('@gorhom/bottom-sheet'),
    },
  };
});
