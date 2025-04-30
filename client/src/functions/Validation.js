export function validateId(Id) {
  const regex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi;
  return regex.test(Id);
}



export function validatePassword(password) {
  const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;
  return regex.test(password);
}

