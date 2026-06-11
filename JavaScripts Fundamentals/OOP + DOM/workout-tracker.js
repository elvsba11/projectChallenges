const inputExercise = document.querySelector('#inputExercise');
const inputReps = document.querySelector('#inputReps');
const inputSets = document.querySelector('#inputSets');
const addBtn = document.querySelector('#addBtn');

const showList = document.querySelector('#showList');
const showTotal = document.querySelector('#showTotal');

addBtn.addEventListener('click', addWorkout);

// Class

class Workout {
  constructor(exercise, reps, sets) {
    this.exercise = exercise
    this.reps = reps
    this.sets = sets
  }

  getTotalReps() {
    return this.reps * this.sets
  }
}
// Add 
function addWorkout() {

  const exercise = inputExercise.value;
  const reps = inputReps.value;
  const sets = inputSets.value;

  if(exercise === '' || reps === '' || sets === '') 
    return alert(`Exercise, Reps or Sets is blank please input!`);

  if(reps <= 0 || sets <= 0)
    return alert(`Reps or Sets is 0, please input value!`)

  const workout = new Workout(exercise, reps, sets);


  const row = document.createElement('tr');

  const exe = document.createElement('td');
  exe.textContent = exercise;

  const rep = document.createElement('td');
  rep.textContent = reps;

  const set = document.createElement('td');
  set.textContent = sets;

  const tReps = document.createElement('td');
  tReps.textContent = workout.getTotalReps();

  tReps.classList.add('total-reps');


  row.appendChild(exe);
  row.appendChild(rep);
  row.appendChild(set);
  row.appendChild(tReps);

  deleteWorkout(row)

  showList.appendChild(row);

  updateTotal();

  inputExercise.value = '';
  inputReps.value = '';
  inputSets.value = '';
  
}

// Delete
function deleteWorkout(row) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete'

  row.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', () => removeRow(row));
}

// Remove row
function removeRow(row) {
  row.remove();

  updateTotal();
}

function updateTotal() {
  const totalCells = document.querySelectorAll('.total-reps');

  let total = 0;

  totalCells.forEach(cell => {
    total += Number(cell.textContent);
  });

  showTotal.textContent = total;
}