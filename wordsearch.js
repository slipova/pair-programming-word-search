const wordSearch = (letters, word) => {

    const horizontalJoin = letters.map(ls => ls.join(''));
    const transposedMatrix = transpose(letters);
    const verticalJoin = transposedMatrix.map(ls => ls.join(''));
    const backwardsTransposedJoined = transposedMatrix.map(ls => ls.reverse().join(''));
    const backwardsHorizontalJoin = letters.map(ls => ls.reverse().join(''));

    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (const l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    for (const l of backwardsTransposedJoined) {
        if (l.includes(word)) return true;
    }
    for (const l of backwardsHorizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
};

const transpose = function(matrix) {
    let newArr = [];
    for (let i = 0; i < matrix[0].length; i++) { //
        let miniArr = [];
        for (let j in matrix) {
            miniArr.push(matrix[j][i]);
        }
        newArr.push(miniArr);
    }
    return newArr;
};

module.exports = wordSearch;