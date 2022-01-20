
const SbiReducer = (state = { setBossImage : '' }, action) => {

  if(action.type === "SET_BOSS_IMAGE"){
    return { SetBoss: action.image }
  }
  return state

}

export default SbiReducer;