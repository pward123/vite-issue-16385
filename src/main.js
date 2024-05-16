import crypto from 'crypto'

function encrypt(text, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted
}

const text = 'Hello, world!'
const key = 'mysecretkey1234567890'

console.log(`Original text: ${text}`)
console.log(`Encrypted text: ${encrypt(text, key)}`)
