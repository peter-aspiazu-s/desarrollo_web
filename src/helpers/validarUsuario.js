export const validarUsuario = async(data, uid) => {
    try {
        const userUid = await data.filter( id => id.uid === uid )
        
        return userUid[0].uid;
    
    } catch (error) {
        console.log(error);    
    }
}
