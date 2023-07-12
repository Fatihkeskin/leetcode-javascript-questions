var TimeLimitedCache = function() {
    this.keys = [];
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let nonExpiredKeyExists = false;
    let oldKey;
    for (let i in this.keys) {
        let entry = this.keys[i];
        if (entry.key === key) {
            oldKey = entry;
            break;
        }
    }

    if (oldKey !== undefined) {
        if (oldKey.time.getTime() + oldKey.duration > new Date().getTime()) {
            oldKey.value = value;
            oldKey.duration = duration;
            oldKey.time = new Date();
            return true;
        } 

        return false;
    } else {
        this.keys.push({
            key: key,
            value: value,
            duration: duration,
            time: new Date()
        });
        return false;
    }  
};

TimeLimitedCache.prototype.get = function(key) {
    for (let i in this.keys) {
        let entry = this.keys[i];
        if (entry.key === key) {
            console.log(entry.time);
            console.log(entry.duration);
            console.log(new Date());
            if (entry.time.getTime() + entry.duration > new Date().getTime()) {
                return entry.value;
            } else {
                return -1;
            }
        }
    }

    return -1;
};

TimeLimitedCache.prototype.count = function() {
    let unexpiredKeys = 0;
    for (let i in this.keys) {
        let entry = this.keys[i];
        if (entry.time.getTime() + entry.duration > new Date().getTime()) {
            unexpiredKeys++;
        }   
    }
    return unexpiredKeys;
};

