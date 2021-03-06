import fs from 'fs';

const makeDir = (dirpath: string): void => {
    if (fs.existsSync(dirpath)) console.log('Dir Exists...');
    else fs.mkdir(dirpath, () => console.log(`${dirpath} created...`));
};


export default makeDir;
