import { readFileSync, writeFileSync } from 'fs';

function renameComponent(file: string, oldName: string, newName: string) {
  try {
    const content = readFileSync(file, 'utf8');
    const result = content.replace(new RegExp(oldName, 'g'), newName);
    writeFileSync(file, result, 'utf8');
    console.log(`Updated ${file}`);
  } catch(e) {
    console.error(e);
  }
}

renameComponent('./pages/ProgramAwards.tsx', 'ProgramGoldenFeather', 'ProgramAwards');
renameComponent('./pages/ProgramEmergingDirector.tsx', 'ProgramDreamFilm', 'ProgramEmergingDirector');
renameComponent('./pages/ProgramPlatformAlliance.tsx', 'ProgramHollywoodCareer', 'ProgramPlatformAlliance');
renameComponent('./pages/ProgramDiverseEthnicity.tsx', 'ProgramAITraining', 'ProgramDiverseEthnicity');
