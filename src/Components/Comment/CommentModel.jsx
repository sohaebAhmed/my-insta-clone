import React from 'react'

const ComentModel = ({onClose, isOpen}) => {
    return (
        <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
            <ModalOverlay />
            <ModalContent>
            
                <ModalBody>
                    <div className='flex h-[75wh]'>
                        <div className='w-[45%] flex flex-col justify-center'>
                            <img className='max-h-full w-full' src="" alt="" />
                        </div>
                        <div className='w-[55%] pl-10'>
                            <div className='flex justify-between items-center py-5'>
                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-9 h-9 rounded-full' src="" alt="" />
                                    </div>
                                    <div className='ml-2'>
                                        <p>username</p>
                                    </div>
                            </div>
                                <BsThreeDots/>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            
            </ModalContent>
        </Modal>
        </div>
    )
}

export default ComentModel