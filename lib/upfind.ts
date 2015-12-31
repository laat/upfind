import * as path from 'path';
import * as fs from 'fs';

export default function upfind (basedir: string, filename: string): string {
    let file = path.join(basedir, filename);
    try {
        fs.statSync(file);
        return file;
    } catch (err) {
        if (path.dirname(basedir) !== basedir) { // root
            return upfind(path.dirname(basedir), filename);
        }
    }
}
