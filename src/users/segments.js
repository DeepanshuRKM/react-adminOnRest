const segments = ['australia', 'india', 'uk', 'usa']

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default segments.map(segment => ({ id: segment, name: capitalizeFirstLetter(segment) }));
