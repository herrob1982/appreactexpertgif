

export const getGifs = async ( category ) => {
        
        
    const url = `https://api.giphy.com/v1/gifs/trending?q=${ encodeURI(category) }&limit=5&api_key=hcBVgbZ3WbdHQCmYRKW6H0hzvP3Egvxl`;
    //console.log(url);
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;

}
