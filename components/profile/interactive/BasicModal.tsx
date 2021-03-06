import { useState } from "react";
import {  Modal } from "react-native";
import ViewUpdateProfile from "../views/ViewUpdateProfile";

export default function BasicModal(props:{setShowParent: Function}){
    const {setShowParent} = props
    const [showModal, setShowModal] = useState<boolean>(true)

    return(<>
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {            
            }}>

            <ViewUpdateProfile setShowParent={setShowParent} setShowModal={setShowModal} />

            
        </Modal>
    </>)
}