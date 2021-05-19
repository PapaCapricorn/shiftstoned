// Card toggle filters
const mainSection = document.querySelector(`#updateList`);
const toggleSections = document.querySelectorAll(`[data-show-states]`);
const factionFilters = document.querySelector(`#factionFilters`).querySelectorAll(`[id^='filter-']`);
const stateFilters = document.querySelector(`#stateFilters`).querySelectorAll(`[id^='filter-']`);
const rarityFilters = document.querySelector(`#rarityFilters`).querySelectorAll(`[id^='filter-']`);
const typeFilters = document.querySelector(`#typeFilters`).querySelectorAll(`[id^='filter-']`);
const weightingFilters = document.querySelector(`#weightingFilters`).querySelectorAll(`[id^='filter-']`);
const weightingChangeFilters = document.querySelector(`#weightingChangeFilters`).querySelectorAll(`[id^='filter-']`);
var formatFilters = document.querySelector(`#formatFilter`);

// format Filters may not be used in page output. if missing, we need to skip
if (formatFilters !== null) {
  formatFilters = formatFilters.querySelectorAll(`[id^='filter-']`);
  formatFilters.forEach((toggle) => {
    toggle.addEventListener('change', () => {
      let update = toggle.dataset.filterFormat;
    
      toggleSections.forEach((section) => {
        section.dataset.showFormat = update;
      });
    });
  });
}

let factionsShown = [];
let statesShown = [];
let raritiesShown = [];
let typesShown = [];
let weightingsShown = [];
let weightingChangesShown = [];

function show(arr, value) {
  if (!arr.includes(value)) { arr = arr.push(value)};
};

function hide(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr = arr.splice(index, 1);
  }
};

factionFilters.forEach((toggle) => {
  let faction = toggle.dataset.filterFaction;
  if (toggle.checked == true) { show( factionsShown, faction); };
  toggle.addEventListener('change', () => {
    updateFilters(toggle, factionsShown, 'filterFaction', 'showFactions');
  });
});

stateFilters.forEach((toggle) => {
  let state = toggle.dataset.filterState;
  if (toggle.checked == true) { show( statesShown, state); };
  toggle.addEventListener('change', () => {
    updateFilters(toggle, statesShown, 'filterState', 'showStates');
  });
});

rarityFilters.forEach((toggle) => {
  let state = toggle.dataset.filterRarity;
  if (toggle.checked == true) { show( raritiesShown, state); };
  toggle.addEventListener('change', () => {
    updateFilters(toggle, raritiesShown, 'filterRarity', 'showRarities');
  });
});

typeFilters.forEach((toggle) => {
  let state = toggle.dataset.filterType;
  if (toggle.checked == true) { show( typesShown, state); };
  toggle.addEventListener('change', () => {
    updateFilters(toggle, typesShown, 'filterType', 'showTypes');
  });
});

weightingFilters.forEach((toggle) => {
  let state = toggle.dataset.filterWeighting;
  if (toggle.checked == true) { show( weightingsShown, state); };
  toggle.addEventListener('change', () => {
    updateFilters(toggle, weightingsShown, 'filterWeighting', 'showWeightings');
  });
});

weightingChangeFilters.forEach((toggle) => {
  let state = toggle.dataset.filterDraftKeptChange;
  if (toggle.checked == true) { show( weightingChangesShown, state); };
  toggle.addEventListener('change', () => {
    updateFilters(toggle, weightingChangesShown, 'filterDraftKeptChange', 'showDraftKeptChanges');
  });
});

function updateFilters(toggle, array, toggleValue, sectionValue) {
  let update = toggle.dataset[toggleValue];
  toggle.checked ? show( array, update) : hide( array, update);
  toggleSections.forEach((section) => {
    section.dataset[sectionValue] = array.join(' ');
  });
};

const fastFilter = document.querySelector(`[id='filter-fast']`);
fastFilter.addEventListener('change', () => {
  fastFilter.checked
    ? mainSection.dataset.showFastOnly = true
    : mainSection.dataset.showFastOnly = false;
});