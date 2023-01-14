function solution(sequence) {
    let openParens = []
    let openBrackets = []
    let openBraces = []

    for (let i = 0; i < sequence.length; i++) {
        let paren = sequence[i]

        if (paren == '(') {
            openParens.push(paren)
        }
        else if (paren == '[') {
            openBrackets.push(paren)
        }
        else if (paren == '{') {
            openBraces.push(paren)
        }
        else if (paren == ')') {
            if (openParens.length == 0) {
                return false
            }
            else if (openParens[openParens.length - 1] != paren) {
                return false
            }
            openParens.pop()
        } else if (paren == ']') {
            if (openBrackets.length == 0) {
                return false
            }
            else if (openBrackets[openBrackets.length - 1] != paren) {
                return false
            }
            openBrackets.pop()
        } else if (paren == '}') {
            if (openBraces.length == 0) {
                return false
            }
            else if (openBraces[openBraces.length - 1] != paren) {
                return false
            }
            openBraces.pop()
        }
    }
    if (openParens.length > 0 || openBrackets.length > 0 || openBraces.length > 0) {
        return false
    }
    return true
}