import DISPLAY_TYPE from '../constants/TargetCategoryDisplayType';

const IMPLICIT_BIAS_TEST_BLOCKS = [
  {
    numTrials: 3,
    displayType: DISPLAY_TYPE.INCOMPATIBLE_TARGETS_ONLY
  },
  {
    numTrials: 3,
    displayType: DISPLAY_TYPE.CATEGORIES_ONLY
  },
  {
    numTrials: 3,
    displayType: DISPLAY_TYPE.INCOMPATIBLE_ALL
  },
  {
    numTrials: 4,
    displayType: DISPLAY_TYPE.INCOMPATIBLE_ALL,
    critical: true
  },
  {
    numTrials: 3,
    displayType: DISPLAY_TYPE.COMPATIBLE_TARGETS_ONLY
  },
  {
    numTrials: 3,
    displayType: DISPLAY_TYPE.COMPATIBLE_ALL
  },
  {
    numTrials: 4,
    displayType: DISPLAY_TYPE.COMPATIBLE_ALL,
    critical: true
  }
]

export default IMPLICIT_BIAS_TEST_BLOCKS;
