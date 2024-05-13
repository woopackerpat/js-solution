const state1 = { username: "john", point: 100, loading: true };

// วิธี 1
const state2 = Object.assign({}, state1, {
  loading: false,
  point: 75,
  success: true,
});

// วิธี 2
const state3 = {};

Object.assign(state3, state1, {
  loading: false,
  point: 75,
  success: true,
});

// วิธี 3 (ใช้บ่อย)

const state4 = { ...state1, loading: false, point: 75, success: true };
