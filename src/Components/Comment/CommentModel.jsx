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
                        <div className='border w-[55%]'>
                            
                        </div>
                    </div>
                </ModalBody>
            
            </ModalContent>
        </Modal>
        </div>
    )
}

export default ComentModel