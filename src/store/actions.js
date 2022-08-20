export const ModuleEvents = {
    GET_IMAGES: 'GET_IMAGES',
    CHANGE_PREVIEW: 'CHANGE_PREVIEW',
    ADD_IMAGE: 'ADD_IMAGE',
    REPLACE_IMAGE: 'REPLACE_IMAGE',
    DELETE_IMAGE: 'DELETE_IMAGE',


   
  };
  const Actions = {
    getImages: images => ({
      type: ModuleEvents.GET_IMAGES,
      images,
    }),
    changePreview: id => ({
      type: ModuleEvents.CHANGE_PREVIEW,
      id,
    }),
    addImage: image => ({
        type: ModuleEvents.ADD_IMAGE,
        image,
      }),
    replaceImage: (id,image) => ({
    type: ModuleEvents.REPLACE_IMAGE,
    id,
    image
    }),
    deleteImage: id => ({
        type: ModuleEvents.DELETE_IMAGE,
        id,
      }),
    
  };
  
  export default Actions;
  