// Node 
function Node(key, value) {
    key = key
    value = value
    let nextNode = null

    return { key, value, nextNode }
}

// Hash Map
function HashMap() {
    let totalArray = 16
    const loadFactor = 0.75
    let buckets = Array(totalArray)

    function hash(value) {
        let hashCode = 0
        const primeNumber = 31
        for (let i = 0; i < value.length; i++) {
            hashCode = primeNumber * hashCode + value.charCodeAt(i)
            hashCode = hashCode % totalArray
        }
        return hashCode
    }

    function grow() {
        let size = 0
        for (const bucket of buckets) {
            let current = bucket;
            while (current) {
                size++;
                current = current.nextNode;
            }
        }

        if (size > loadFactor * totalArray) {
            let newTotal = totalArray * 2
            const newBuckets = Array(newTotal)
            for (const bucket of buckets) {
                let current = bucket;
                while (current) {
                    const index = hash(current.key);
                    const node = Node(current.key, current.value);

                    if (!newBuckets[index]) {
                        newBuckets[index] = node;
                    } else {
                        let newCurrent = newBuckets[index];
                        while (newCurrent.nextNode) {
                            newCurrent = newCurrent.nextNode;
                        }
                        newCurrent.nextNode = node;
                    }

                    current = current.nextNode;
                }
            }
            totalArray = newTotal
            buckets = newBuckets

        }
        return buckets.length
    }

    function set(key, value) {
        const index = hash(key)
        let node = Node(key, value)

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        if (!buckets[index]) {
            buckets[index] = node
            grow()
            return buckets[index]
        }

        let current = buckets[index]
        while (current.nextNode) {
            current = current.nextNode
        }
        if (current.key === key) {
            current.value = value
            return current
        }

        current.nextNode = node
        return node
    }

    function get(key) {
        const index = hash(key)
        let current = buckets[index]
        while (current) {
            if (current.key === key) {
                return current.value
            }
            current = current.nextNode
        }
        return null
    }

    function has(key) {
        const index = hash(key)
        let current = buckets[index]
        while (current) {
            if (current.key === key) {
                return true
            }
            current = current.nextNode
        }
        return false
    }

    function remove(key) {
        const index = hash(key);
        let current = buckets[index];
        let previous = null;

        while (current) {
            if (current.key === key) {
                if (previous) {
                    previous.nextNode = current.nextNode;
                } else {
                    buckets[index] = current.nextNode;
                }
                return true
            }

            previous = current;
            current = current.nextNode;
        }
        return false
    }

    function length() {
        let size = 0
        for (const bucket of buckets) {
            let current = bucket
            while (current) {
                if (current.key) {
                    size++
                }
                current = current.nextNode
            }
        }
        return size
    }

    function clear() {
        buckets.fill(null)
    }

    function keys() {
        let result = ''
        for (const bucket of buckets) {
            let current = bucket
            while (current) {
                if (current) {
                    result += `'${current.key}' `
                }
                current = current.nextNode
            }
        }
        return `[${result.trim()}]`
    }

    function values() {
        let result = ''
        for (const bucket of buckets) {
            let current = bucket
            while (current) {
                if (current) {
                    result += `${current.value} `
                }
                current = current.nextNode
            }
        }
        return `[${result.trim()}]`
    }

    function entries() {
        let result = ''
        for (const bucket of buckets) {
            let current = bucket
            while (current) {
                if (current) {
                    result += `[${current.key}, ${current.value}], `
                }
                current = current.nextNode
            }
        }
        const trimed = result.trim()
        return [trimed.slice(0, -1)]
    }

    return { hash, grow, set, get, has, remove, length, clear, keys, values, entries }
}

const hashMap = HashMap()
hashMap.set("rak", 1)
hashMap.set("arak", 2)
hashMap.set("mubarak", 3)
hashMap.set("freed", 4)
hashMap.remove("freed")
hashMap.set("dammi", 5)
hashMap.set("ola", 6)
hashMap.set("wariz", 7)
hashMap.set("ope", 8)
hashMap.set("crown", 9)
hashMap.set("Mb", 10)
hashMap.set("basit", 11)
hashMap.set("ila", 12)
hashMap.set("ajajd", 13)
hashMap.set("jgdcdla", 12)
hashMap.set("ijvdcsdgla", 12)
hashMap.set("omkh645457", 12)
hashMap.set("Ola", 0)
hashMap.set("llo0812wsazsQ", 12)
hashMap.set("alani", 20)
hashMap.set("olu", 20)
// hashMap.clear()
hashMap.remove("alani")
hashMap.remove("ope")


console.log(hashMap.entries())

console.log(hashMap.length())

console.log(hashMap.grow());