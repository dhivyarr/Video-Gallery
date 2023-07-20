import React, { useState,useEffect } from 'react'
import logo from './icons8-cancel.svg'


const VideoTemplates = () => {
    const [videodata,setVideoData]= useState([])
    const [model, setModel] = useState(false)
    const [tempimg, setTempImg] = useState('')


    useEffect( ()=> {
        getVideo()
    }, [])

    let getVideo = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/videos/')
        let video = await response.json()
        console.log('data:',video)
        setVideoData(video)
    }

    const getVid = (imgSrc) =>{
        setTempImg(imgSrc);
        setModel(true);
    }

    // const onClose = () => {
    //     setModel(false)
    //   };


   
    
  return (

    <div>
        <div className={model? 'model open' : 'model' }>
        <video src={tempimg} alt='coolpic' controls='autoplay'></video>
        <h1 className ='cancel'      onClick={() => setModel(false)}><img src={logo}/></h1>

        
    </div>
    <header class='header'><h1>Video Gallery</h1></header>
        <div className='gallery'>
        {videodata.map((data, index) => {
            return(
                <div className='pics' key = {index} onClick={() => getVid(data.video_file)}>
                   
                   <video src={data.video_file} style={{width:'200px'}}></video>
                    
                </div>
            )
        })}
    </div>

      
    </div>
  )
}

export default VideoTemplates
