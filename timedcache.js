class TimedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const currentTime = Date.now();
        const expirationTime = currentTime + duration;

        // Check if the key exists and is unexpired
        const alreadyExists = this.cache.has(key) && this.cache.get(key).expirationTime > currentTime;

        // Set or overwrite the key with the new value and expiration time
        this.cache.set(key, { value, expirationTime });

        return alreadyExists;
    }

    get(key) {
        const currentTime = Date.now();

        if (this.cache.has(key)) {
            const entry = this.cache.get(key);
            if (entry.expirationTime > currentTime) {
                return entry.value;  // Return value if the key is unexpired
            } else {
                this.cache.delete(key);  // Remove the expired key
            }
        }

        return -1;  // Return -1 if the key is expired or doesn't exist
    }

    count() {
        const currentTime = Date.now();
        let unexpiredCount = 0;

        for (const [key, entry] of this.cache.entries()) {
            if (entry.expirationTime > currentTime) {
                unexpiredCount++;  // Count only unexpired keys
            } else {
                this.cache.delete(key);  // Remove expired keys from the cache
            }
        }

        return unexpiredCount;
    }
}

// Example usage:
const cache = new TimedCache();

console.log(cache.set(1, 42, 5000));
console.log(cache.get(1));
console.log(cache.count());
setTimeout(() => console.log(cache.get(1)), 6000);
console.log(cache.count());