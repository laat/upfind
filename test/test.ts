import * as path from 'path';
import upfind from '../lib/upfind';
import { assert, expect } from 'chai';

describe('upfind', function () {
    it('should find file in basedirectory', function () {
        let file = upfind(path.join(process.cwd(), 'test/foobar'), "findme.txt");
        expect(file).to.contain('upfind/test');
    });
    it('should not error when file not found', function () {
        let file = upfind(path.join(process.cwd(), 'test/foobar'), "I_DO_NOT_EXIST");
        expect(file).to.be.undefined;
    });
});
