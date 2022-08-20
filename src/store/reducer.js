import {ModuleEvents} from "./actions";
  
  const initialState = {
    preview: null,
    images: []
        };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ModuleEvents.GET_IMAGES:
  
        return {
          ...state,
          images:action.images
        };
    case ModuleEvents.CHANGE_PREVIEW:

        return {
            ...state,
            preview:state.images?.[action.id]
        };
    case ModuleEvents.ADD_IMAGE:
        let prev = state.preview
        if(state.images?.length <1){
            prev = action.image
        }
        return {
            ...state,images:[...state.images,action.image],preview:prev};
    case ModuleEvents.REPLACE_IMAGE:
        let re_prev = state.preview
        if(state.images?.length == 1){
            prev = action.image
        }
        let id = state.images.findIndex(
            (item,index) => index === action.id,
          );
          state.images[id] = action?.image;
        return {
            ...state,images:[...state.images],preview:prev};
    
    case ModuleEvents.DELETE_IMAGE:
       let newPrev = null;
        const newList = state?.images?.filter(
            (item,index) => index != action.id,
          );
          if(state.images?.[action.id+1]){
            newPrev = state.images?.[action.id+1]
          }else if(state.images?.[action.id-1]){
            newPrev = state.images?.[action.id-1]
          }

        return {
            ...state,images:newList,preview:newPrev
        };
  
      default:
        return state;
    }
  }

  