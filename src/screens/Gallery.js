import { View, StyleSheet,SafeAreaView,Image, FlatList,TouchableOpacity,Text, Platform } from 'react-native'
import React,{useState} from 'react';
import LaunchCamera from '../components/LaunchCamera'
import {connect, useDispatch, useSelector} from 'react-redux';
import Actions from '../store/actions';

const ImageThumb = ({item,index,onClick,selected}) => {
    return (
    <TouchableOpacity onPress={()=>onClick(index)} style={[styles.thumbnail,selected===index?{borderWidth:3,borderColor:'red'}:{}]}>
        <Image
        style={styles.thumbnailImage}
        source={{uri: item}}
      />
    </TouchableOpacity>
    )
}

const Gallery = ({changePreview,addImage,replaceImage,deleteImage}) => {
    const dispatch = useDispatch();

    const preview = useSelector(state => state.preview);
    const images = useSelector(state => state.images);
    const [selected,setSelected] = useState()
    const onChangeImage = (id) => {
        changePreview(id)
    }

    const handleCameraUpload = async (res) => {
        
        let path = Platform.OS =="ios"?`file://${res.path}`:res.path;
        addImage(path)
    
    
      };

    const handleReplace = async (id,res) => {
    
        let path = Platform.OS =="ios"?`file://${res.path}`:res.path;

        replaceImage(id,path)

    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height:'60%'}}>
      <Image
          style={styles.preview}
          source={{uri: preview}}
        />
      </View>
      <FlatList
        data={images}
        numColumns={3}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        // ref={scrollRef}
        contentContainerStyle={{paddingBottom: 20}}
        columnWrapperStyle={styles.imagesColumn}
        renderItem={({item,index}) => <ImageThumb selected={selected} item={item} index={index} onClick={(id)=>{onChangeImage(id);setSelected(id)}} />}
    />
      <View style={styles.buttonContainer}>
        <LaunchCamera style={styles.button} onUpload={(res) => handleCameraUpload(res)}>
            <Text style={styles.buttonText}>C</Text>
        </LaunchCamera>
        {images?.length>0&&(
        <>
        <LaunchCamera style={styles.button} onUpload={(res) => handleReplace(selected,res)}>
            <Text style={styles.buttonText}>R</Text>
        </LaunchCamera>
        <TouchableOpacity onPress={()=>deleteImage(selected)} style={styles.button}>
            <Text style={styles.buttonText}>D</Text>
        </TouchableOpacity>
        </>
        )}
      </View>
    </SafeAreaView>
  )
}


  export default connect(null,
    {
        getImages: Actions.getImages,
        changePreview: Actions.changePreview,
        addImage:Actions.addImage,
        replaceImage:Actions.replaceImage,
        deleteImage:Actions.deleteImage

      // setFilterState: Actions.setFilterState
    },
  )(Gallery);
  

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    preview:{
        width:'96%',
        height:'100%',
        alignSelf:'center',
        
    },
    buttonContainer:{
        position:'absolute',
        bottom:0,
        width:'80%',
        height:120,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button:{
        backgroundColor:'#2e8bc0',
        width:60,
        height:60,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    imagesColumn: {
        flex: 1,
        // justifyContent: 'space-around',
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
      },
    thumbnail:{
        width:90,
        height:90,
        borderRadius:12,
        overflow:'hidden'
    },
    thumbnailImage:{
        width:'100%',
        height:'100%',
        
    }
    
  });