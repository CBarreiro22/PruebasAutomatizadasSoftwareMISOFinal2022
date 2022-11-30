const fs = require('fs');
const backstopTemplate = require('./backstop_template.json');
const scenarioTemplate = require('./scenario_template.json');


async function ejecutarScript() {
  

  let scenarios = [];
  let escenarios = 4
  let pasos = 7

  for (let escenario = 0; escenario < escenarios; escenario++){
    for (let paso = 0; paso < pasos; paso++) {
      let nombreEscenario = `esc_${escenario + 1}_step_${paso + 1}`;
      let pathReferencia = `./backstop_data/capturas/v3.42/v3.42_${nombreEscenario}.png`;
      let pathTest = `./backstop_data/capturas/v5.19.0/v5.19_${nombreEscenario}.png`;
      scenarios.push(
          {
            ...scenarioTemplate,
            "label": `Step:${paso + 1} de Escenario:${escenario + 1} `,
            "url": pathTest,
            "referenceUrl": pathReferencia
          }
      );
  }
  }
  

  let backstopJson = {
    ...backstopTemplate,
    scenarios
  }

  fs.writeFileSync('backstop.json', JSON.stringify(backstopJson));

  return null;
}

(async () => console.log(await ejecutarScript()))();
