export function validation(rut) {
  let expression = /^\d{8}\-(\d|k|K)$/;
  if (expression.test(rut)) {
    return true;
  }
  return false;
}
