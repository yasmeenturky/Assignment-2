// Checks if object contains value
function Contains (object, value) {
         if (typeof object === "object") {
            for (const key in object) {
              if (object[key] === value) {
                return true;
              } else {
                const found = Contains(object[key], value);
                if (found) return found;
              }
            }
           }
        
          return false;
      
} 



