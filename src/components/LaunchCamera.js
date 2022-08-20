import React from 'react';
import { TouchableOpacity } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

const LaunchCamera = ({ onUpload, children, style }) => {

    const handleImageUpload = () => {
    
        ImagePicker.openCamera({
            compressImageMaxWidth: 2100,
            compressImageMaxHeight: 1500,
            compressImageQuality: 0.4,
            useFrontCamera:false,
            cropping: true,
            mediaType: 'photo',
            multiple:true
          }).then(image => {
            onUpload(image);
          }).catch(error=>{
            if(error?.message == 'User did not grant camera permission.'){
              alert('Enable Camera Permission')
            }
        });
    }
    return (
        <TouchableOpacity  onPress={()=>handleImageUpload()} style={[style]}>
            {children}
        </TouchableOpacity>
    )
}

export default LaunchCamera;
