
const catchNow = () => {
    let probabilities = Math.random() < 0.5
    if (probabilities) {
        return true
    } else {
        return false
    }
}

export default catchNow
