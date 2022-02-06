export class TransformService {
    static fbObjectToArray (fdData) {
        return Object.keys(fdData).map(key => {
            const item = fdData[key];
            item.id = key 
            return item
        })
    }
}