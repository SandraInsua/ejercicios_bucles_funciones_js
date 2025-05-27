//Ejercicio 12

//Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

//Considera el caso de múltiples mutantes con el mismo poder.



const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    const foundMutants = mutants.filter(mutant => mutant.power === power);
    
    if (foundMutants.length > 0) {
        return `Se encontraron ${foundMutants.length} mutante(s) con el poder "${power}": ${foundMutants.map(mutant => mutant.name).join(', ')}.`;
    } else {
        return `No se encontró ningún mutante con el poder "${power}".`;
    }
}
// Ejemplos
console.log(findMutantByPower(mutants, 'telepathy')); 
console.log(findMutantByPower(mutants, 'regeneration')); 
