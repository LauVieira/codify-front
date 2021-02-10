class Helpers {
  capitalizeAllAndTrim(string) {
    if (typeof string !== 'string') return;

    const stringArray = string.trim().toLowerCase().replace(/\s+/g, ' ').split(' ');

    const result = stringArray.map((word) => (
      word.charAt().toUpperCase() + word.slice(1)
    ));

    return result.join(' ');
  }
}

export default new Helpers();
