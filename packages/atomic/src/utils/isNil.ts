/* eslint eqeqeq: 0 */
function isNil(value: any) {
  return value == null || value == '0' || value == '';
}

export { isNil };
export default isNil;
