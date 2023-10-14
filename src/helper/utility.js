function capitalizeWord(word) {
    if (word.length === 0) {
        return word; // Return an empty string if the word is empty.
    }
    return word[0].toUpperCase() + word.slice(1);
}

export {capitalizeWord};