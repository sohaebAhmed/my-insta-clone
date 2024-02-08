import { Button, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useStatStyles } from '@chakra-ui/react'
import React from 'react'
import "./CreatePostModal.css"

const CreatePostModel = ({
    onClose, isOpen
}) => {

    const [setIsDragOver, setIsDragOver] = useState(false)
    const [file, setFile] = useState()
    const [caption, setCaption] = useState("")

    const handleDrop = (event) => {
        event.preventDefault()
        const droppedFile = event.dataTransfer.file[0]
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
            SelectField(droppedFile)
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        setIsDragOver(true)
    }

    const handleDragLeave = () => {
        setIsDragOver(false)
    }

    const handleOnChange = (e) => {
        const file = e.target.files[0]
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file)

        } else {
            setFile(null);
            alert("please select an image or video")
        }

    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value)
    }

    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCenterd>
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-between py-1 px-10 items-centered'>
                        <p>Create New Post</p>
                        <Button className='' variant={"ghost"} size="sm" colorScheme={'blue'}>
                            Share
                        </Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div className='h-[70vh] justifu-between pb-5 flex'>
                            <div className='w-[50%]'>
                                {!file && <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    className='drag-drop h-full'
                                >
                                    <div>
                                        <FaPhotoVideo className='text-3xl' />
                                        <p>Drag Photos of Videos here</p>
                                    </div>
                                    <label htmlFor="file-upload" className='custom-file-upload'>Select from computer</label>
                                    <input className='fileInput' type="file" id='file-upload' accept='image/*, video/*' onChange={handleOnChange} />
                                </div>}

                                {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt="" />}
                            </div>
                            <div className='w-[1px] border-2 h-full'></div>
                            <div className='w-[50%]'>
                                <div className='flex items-center px-2'>
                                    <img className='w-7 h-7 rounded-full' src="" alt="" />
                                    <p className='font-semibold ml-4'>username</p>
                                </div>
                                <div className='px-2'>
                                    <textarea onChange={handleCaptionChange} placeholder='Write a caption' className='cptionInput' name='caption' rows="8"></textarea>
                                </div>

                                <div className='flex justify-between px-2'>
                                    <GrEmoji />
                                    <p className='opcity-70'>{caption?.length} / 2,200</p>
                                </div>
                                <hr />
                                <div className='p-2 flex justify-between items-center'>
                                    <input className='locationInput' type="text" placeholder='location' name="location" id="" />
                                    <Golocation />
                                </div>
                                <hr />
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModel