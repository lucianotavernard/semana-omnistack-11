import generateToken from '../../src/utils/generateToken'
import generateUniqueId from '../../src/utils/generateUniqueId'

describe('Generate Token JWT', () => {
  it('should generate token JWT', () => {
    const id = generateUniqueId();
    const token = generateToken(id);

    expect(typeof token).toBe('string');
  });
});
