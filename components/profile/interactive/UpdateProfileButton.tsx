import { useState } from "react";
import { Pressable, Text } from "react-native";
import BasicModal from "./BasicModal";

export default function UpdateProfileButton(){

    const [showButton, setShowButton] = useState<boolean>(true)

    function ShowModal(){
        setShowButton(false)
        
        return(
            <BasicModal 
                // child={<ViewUpdateProfile setShowModal={setShowModal}/>} 
                setShowParent={setShowButton} 
            ></BasicModal>
        )
    }

    return(
        <>{showButton? <Pressable onPress={ShowModal}><Text>Update Profile</Text></Pressable> : <ShowModal/>}</>
    )
}

//showModal? <ShowModal/> : 