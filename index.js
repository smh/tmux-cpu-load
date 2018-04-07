#!/usr/bin/env node

const os = require('os-utils');

os.cpuUsage(usage => {
  if (usage < 0.05) {
    console.log('  ');
  } else if (usage < 0.1) {
    console.log('#[fg=colour226]▁ ');
  } else if (usage < 0.2) {
    console.log('#[fg=colour220]▂ ');
  } else if (usage < 0.4) {
    console.log('#[fg=colour214]▃ ');
  } else if (usage < 0.6) {
    console.log('#[fg=colour208]▄ ');
  } else if (usage < 0.8) {
    console.log('#[fg=colour202]▅ ');
  } else {
    console.log('#[fg=colour196]▇ ');
  }
});
