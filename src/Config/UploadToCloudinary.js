
export const uploadToCloundinary = async (image) => {
    if (image) {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "instagramClone")
        data.append("cloud_name", "de7aiw5gw")

        const res = await fetch("https://api.cloudinary.com/v1_1/de7aiw5gw/image/upload", {
            method: "post",
            body: data,
        })

        const fileData = await res.json()

        return fileData.url.toString()
    }
}