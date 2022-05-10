export default function dataExtraction(character) {
  const arr = [];
  const {
    special,
  } = character;
  for (const keys of special) {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = keys;

    arr.push({
      id,
      name,
      icon,
      description,
    });
  }
  return arr;
}
