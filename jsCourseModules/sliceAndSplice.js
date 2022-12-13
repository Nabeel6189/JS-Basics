const prisoners = ['Timon', 'Pumba', 'Simba', 'Phenios', 'Ferb'];

//slice removes the data from the specified place. We can also specify the range for slice
console.log(prisoners.slice(1));

//This will remove the rest of the datas apart from the given range and will have only 2 which is from the place 1 and 2
console.log(prisoners.slice(1,3));

console.log(prisoners);



/*In splice you can pass on the start value and stop value to remove the datas and then the datas that you want to insert 
*/

prisoners.splice(1, 2, 'Tuck', 'Grimm');

console.log(prisoners);