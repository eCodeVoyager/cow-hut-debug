const pick = <T extends Record<string, unknown>, K extends keyof T>(obj:T, keys:k[]) => {
    const finalObject = {},
    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, keys)) {
            finalObject[key] = obj[key];
        }
    }
    return finalObject; 
}

export default pick;