import {useCallback, useState} from "react";

export function useModal() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModalOpen = useCallback(() => {
        setIsModalVisible(true);
    }, [])

    const handleModalClose = useCallback(() => {
        setIsModalVisible(false);
    },[])

    return {isModalVisible, handleModalClose, handleModalOpen}
}