const TARGET_CATEGORY_DISPLAY_TYPE = {
  INCOMPATIBLE_TARGETS_ONLY: 'INCOMPATIBLE_TARGETS_ONLY',
  INCOMPATIBLE_ALL: 'INCOMPATIBLE_ALL',
  CATEGORIES_ONLY: 'CATEGORIES_ONLY',
  COMPATIBLE_TARGETS_ONLY: 'COMPATIBLE_TARGETS_ONLY',
  COMPATIBLE_ALL: 'COMPATIBLE_ALL',
}

export default TARGET_CATEGORY_DISPLAY_TYPE

export function getDisplayValuesForType(displayType, compatible) {
  const result = {
    leftTarget: null, rightTarget: null, leftCategory: null, rightCategory: null
  }
  const targetList = Object.keys(compatible)
  const reverseTargetList = targetList.slice().reverse()
  const categoryList = Object.values(compatible)
  switch(displayType) {
    case TARGET_CATEGORY_DISPLAY_TYPE.CATEGORIES_ONLY:
      return Object.assign(result, {
        leftCategory: categoryList[0], rightCategory: categoryList[1]
      })
    case TARGET_CATEGORY_DISPLAY_TYPE.COMPATIBLE_ALL:
      return Object.assign(result, {
        leftTarget: targetList[0], rightTarget: targetList[1], leftCategory: categoryList[0], rightCategory: categoryList[1]
      })
    case TARGET_CATEGORY_DISPLAY_TYPE.COMPATIBLE_TARGETS_ONLY:
      return Object.assign(result, {leftTarget: targetList[0], rightTarget: targetList[1]})
    case TARGET_CATEGORY_DISPLAY_TYPE.INCOMPATIBLE_ALL:
      return Object.assign(result, {
        leftTarget: reverseTargetList[0], rightTarget: reverseTargetList[1], leftCategory: categoryList[0], rightCategory: categoryList[1]
      }) 
    case TARGET_CATEGORY_DISPLAY_TYPE.INCOMPATIBLE_TARGETS_ONLY:
      return Object.assign(result, {
        leftTarget: reverseTargetList[0], rightTarget: reverseTargetList[1]
      }) 
    default:
      return result
  }
}