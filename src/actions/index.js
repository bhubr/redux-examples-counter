export function increment() {
  return { type: 'INCREMENT' };
}

export function decrement() {
  return { type: 'DECREMENT' };
}

export function login(user) {
  return { type: 'LOGIN', user };
};

export function logout() {
  return { type: 'LOGOUT' };
};