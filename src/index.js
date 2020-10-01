import commander from 'commander';
import fs from 'fs';

const runGenDiff = (filepath1, filepath2) => {
  const firstDataStr = fs.readFileSync(path.resolve(processc.cwd(), filepath1));
  const secondDataStr = fs.readFileSync(path.resolve(processc.cwd(), filepath2));
  const firstDataObj = JSON.parse(firstDataStr);
  const secondDataObj = JSON.parse(secondDataStr);
  
}

export default runGenDiff;