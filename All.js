function All (arr, cb) {

    for(i in arr) {
        const result = cb(arr[i])
        if (result) {
            continue
        }else {
            return false
        }
    }
    
    return true
  
}
