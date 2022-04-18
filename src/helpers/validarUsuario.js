export const validarUsuario = async(data, uid) => {
    try {
        const prueba = await data.filter( id => id.uid === uid )
        const userUid = await prueba[0].uid;
        console.log(userUid);
        return userUid;
    
    } catch (error) {
        console.log(error);    
    }
}
