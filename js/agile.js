var TODO = 0;
var IN_PROGRESS = 1;
var COMPLETED = 2;

var USER_YURIKO = 0;
var USER_GORDON = 1;
var USER_AJ = 2;

var tasks = [
  {
    name: 'Attack on Titan Season 2',
    status: COMPLETED,
    assignee: USER_YURIKO
  },
  {
    name: 'Stranger Things Season 2',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Final Fantasy X-2',
    status: TODO,
    assignee: USER_YURIKO
  },
  {
    name: 'Starcraft 2: Legacy of the Void',
    status: TODO,
    assignee: USER_GORDON
  },
  {
    name: 'Cuphead',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Undertale',
    status: IN_PROGRESS,
    assignee: USER_GORDON
  },
  {
    name: 'Factorio',
    status: IN_PROGRESS,
    assignee: USER_GORDON
  },
  {
    name: 'Nier: Automata',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Horizon Zero Dawn',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Blame!',
    status: COMPLETED,
    assignee: USER_YURIKO
  },
  {
    name: 'Game of Thrones Season 3',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Banjo Kazooie',
    status: IN_PROGRESS,
    assignee: USER_GORDON
  },
  {
    name: 'Rayman Legends',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Legend of Zelda: Ocarina of Time',
    status: COMPLETED,
    assignee: USER_YURIKO
  },
  {
    name: 'Final Fantasy XIII: Lightning Returns',
    status: IN_PROGRESS,
    assignee: USER_YURIKO
  },
  {
    name: 'Hollow Knight',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Rise of Tomb Raider',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Spider-man: Homecoming',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Legend of Zelda: Skyward Sword',
    assignee: USER_GORDON,
    status: COMPLETED
  },
  {
    name: 'Divinity: Original Sin',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'The Division',
    status: IN_PROGRESS,
    assignee: USER_GORDON
  },
  {
    name: 'Uncharted: The Lost Legacy',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Lara Croft and the Temple of Osiris',
    status: COMPLETED,
  },
  {
    name: 'Civilization V',
    status: IN_PROGRESS,
  },
  {
    name: 'Assassin\'s Creed: Origins',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'The Witcher 3',
    status: IN_PROGRESS,
    assignee: USER_GORDON
  },
  {
    name: 'Resident Evil 7',
    status: COMPLETED,
    assignee: USER_GORDON
  },
  {
    name: 'Fullmetal Alchemist: Brotherhood',
    status: IN_PROGRESS,
  },
  {
    name: 'Super Mario Odyssey',
    status: IN_PROGRESS,
  },
  {
    name: 'Terraria',
    status: IN_PROGRESS,
  }
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
  if (task.assignee === USER_YURIKO) newTaskElem.addClass('yuriko-task');
  $('#' + containerId + ' .tasks').append(newTaskElem);
});
