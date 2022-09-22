const array = [
  {
    id: 1,
      title: 'nada demais',
      done: false,
  },
  {
    id: 2,
      title: 'nadar',
      done: false,
  },
  {
    id: 3,
      title: 'correr',
      done: false,
  }
];

const id = 2;

const foundItem = array.find(item => item.id === id);

foundItem.done = !foundItem.done

console.log(foundItem)

const newArrayFilterId = array.map(item => ({...item}))
console.log(newArrayFilterId)

const testTrimString = '        Teste de trim '

console.log(testTrimString.trim())