import metadata from '../../metadata.full';
import Metadata from '../metadata';
import { checkNumberLengthForType } from './checkNumberLength';
describe('checkNumberLength', function () {
  it('should check phone number length', function () {
    // Too short.
    checkNumberLength('800555353', 'FIXED_LINE', 'RU').should.equal('TOO_SHORT'); // Normal.

    checkNumberLength('8005553535', 'FIXED_LINE', 'RU').should.equal('IS_POSSIBLE'); // Too long.

    checkNumberLength('80055535355', 'FIXED_LINE', 'RU').should.equal('TOO_LONG'); // No such type.

    checkNumberLength('169454850', 'VOIP', 'AC').should.equal('INVALID_LENGTH'); // No such possible length.

    checkNumberLength('1694548', undefined, 'AD').should.equal('INVALID_LENGTH'); // FIXED_LINE_OR_MOBILE

    checkNumberLength('1694548', 'FIXED_LINE_OR_MOBILE', 'AD').should.equal('INVALID_LENGTH'); // No mobile phones.

    checkNumberLength('8123', 'FIXED_LINE_OR_MOBILE', 'TA').should.equal('IS_POSSIBLE'); // No "possible lengths" for "mobile".

    checkNumberLength('81234567', 'FIXED_LINE_OR_MOBILE', 'SZ').should.equal('IS_POSSIBLE');
  });
});

function checkNumberLength(number, type, country) {
  var _metadata = new Metadata(metadata);

  _metadata.country(country);

  return checkNumberLengthForType(number, type, _metadata);
}
//# sourceMappingURL=checkNumberLength.test.js.map