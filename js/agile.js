var TODO = 0;
var IN_PROGRESS = 1;
var COMPLETED = 2;

var tasks = [
  {
    name: 'Attack on Titan Season 2',
  },
  {
    name: 'Stranger Things Season 2',
    status: TODO,
  },
  {
    name: 'Final Fantasy X-2',
    status: TODO,
  },
  {
    name: 'Starcraft 2: Legacy of the Void',
    status: TODO,
  },
  {
    name: 'Cuphead',
    status: TODO,
  },
  {
    name: 'Undertale',
    status: TODO,
  },
  {
    name: 'Factorio',
    status: IN_PROGRESS,
  },
  {
    name: 'Nier: Automata',
    status: IN_PROGRESS,
  },
  {
    name: 'Horizon Zero Dawn',
    status: COMPLETED,
  },
  {
    name: 'Blame!',
    status: COMPLETED,
  },
  {
    name: 'Game of Thrones',
  },
];

tasks.forEach(function(task) {
  var containerId;
  console.log(task);
  switch (task.status) {
    case TODO:
      containerId = 'todo';
      break;
    case IN_PROGRESS:
      containerId = 'in-progress';
      break;
    case COMPLETED:
      containerId = 'completed';
      break;
    default:
      containerId = 'backlog';
  }

  var newTaskElem = $('<div class="sprint-task">').text(task.name);
  $('#' + containerId + ' .tasks').append(newTaskElem);
});
