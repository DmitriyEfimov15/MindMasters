export const objectLen = (object: Object) => {
    let count: number = 0;

    for(let prop in object) {
        if(object.hasOwnProperty(prop))
            ++count;
    }

    return count;
}