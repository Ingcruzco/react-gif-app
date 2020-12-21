export const getGif= async(category)=>{
    const URL=`https://api.giphy.com/v1/gifs/search?api_key=MB1x9P4JmqhMZdANexrMKSB1z0Xq07QT&q=${encodeURI(category)}&limit=10`
    const resp= await fetch(URL);
    const {data}= await resp.json();
    const gifs=data.map(img=>{
        return(
            {
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url,
            }

        )
    })  
    return gifs;
}