// Linked List
function LinkedList() {
    let head = null
    let tail = null

    const append = (value, key) => {
        const node = Node(value, key)
        if (!head) {
            head = node
            tail = node
            return head
        }
        let current = head
        while (current.nextNode) {
            current = current.nextNode
        }
        current.nextNode = node
        tail = node
        return current.nextNode
    }

    const prepend = (value, key) => {
        const node = Node(value, key)
        if (!head) {
            head = node
            tail = node
        }
        let current = head
        head = node
        head.nextNode = current
    }

    const size = () => {
        let count = 0
        let current = head
        while (current) {
            count++
            current = current.nextNode
        }
        return count
    }

    const getHead = () => {
        if (!head) {
            return "List is Empty"
        }
        return head.value
    }

    const getTail = () => {
        if (!tail) {
            return "List is Empty"
        }
        return tail.value
    }

    const at = (index) => {
        let current = head
        let position = 0
        while (current) {
            if (index === position) {
                return current.value
            }
            current = current.nextNode
            position++
        }
        return "Error: Index not found"
    }

    const pop = () => {
        let current = head
        while (current) {
            if (current.nextNode === tail) {
                tail = current
                current.nextNode = null
            }
            current = current.nextNode
        }
    }

    const contains = (value) => {
        let current = head
        while (current) {
            if (current.value === value) {
                return true
            }
            current = current.nextNode
        }
        return false
    }

    const find = (value) => {
        let current = head
        let position = 0
        while (current) {
            if (value === current.value) {
                return position
            }
            current = current.nextNode
            position++
        }
        return null
    }

    const insertAt = (value, index) => {
        const node = Node(value)
        let current = head
        let shifted = current.nextNode
        let previous = current
        let position = 0
        while (current) {
            if (index > size() - 1) {
                console.log("Error: Index out of Bound");
                break
            }
            if (index === 0) {
                head = node
                head.nextNode = current
                break
            }
            if (index > 0 && index === position) {
                current = node
                previous.nextNode = current
                current.nextNode = shifted
            }
            previous = current
            current = current.nextNode
            shifted = previous.nextNode
            position++
        }
    }

    const removeAt = (index) => {
        let current = head
        let previous = current
        let position = 0
        while (current) {
            if (index > size() - 1) {
                console.log("Error: Index out of Bound");
                break
            }
            if (index === 0) {
                head = current.nextNode
                break
            }
            if (index > 0 && index === position) {
                previous.nextNode = current.nextNode
            }
            previous = current
            current = current.nextNode
            position++
        }

    }

    const toString = () => {
        let current = head
        let result = ''
        while (current) {
            result += `${current.value} -> `
            current = current.nextNode
        }
        return `${result}null`
    }

    return { append, prepend, size, getHead, getTail, at, pop, contains, find, insertAt, removeAt, toString }
}

const list = LinkedList()

// list.append(3)
// list.append(4);
// list.append(1);
// list.append(6);
// list.prepend(9)
// list.insertAt(4, 1)
// list.removeAt(5)
// console.log(list.toString());

function Node(value, key) {
    value = value
    key = key
    let nextNode = null

    return { key, value, nextNode }
}

// Hash Map
function HashMap() {
    const array = []
    let totalArray = 16
    const loadFactor = 0.75

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
        if (array.length === loadFactor * totalArray) {
            totalArray *= 2
        }
    }

    function set(key, value) {
        let bucket = hash(key)
        array[bucket] = list.append(value, key)
        return array
    }

    function get(key) {

    }

    function has(key) {

    }

    function remove(key) {

    }

    function length() {

    }

    function clear() {

    }

    function keys() {

    }

    function values() {

    }

    function entries() {

    }

    return { hash, set, get, has, remove, length, clear, keys, values, entries }
}

const hashMap = HashMap()

console.log(hashMap.set("rak", 10))