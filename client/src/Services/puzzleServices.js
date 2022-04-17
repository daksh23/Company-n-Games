import api from "./api";

export const getChanllenges = () =>
  api()
    .get(`/puzzle/get_challenges`)
    .then((res) => res);

export const getPuzzle = (id) =>
  api()
    .get(`/puzzle/get_puzzle/${id}`)
    .then((res) => res);

export const submitPuzzle = (data) =>
  api()
    .post(`/puzzle/submit_puzzle`, data)
    .then((res) => res);

export const getHistory = () =>
  api()
    .get(`/puzzle/get_history`)
    .then((res) => res);

export const getUsers = () =>
  api()
    .get(`/puzzle/get_users`)
    .then((res) => res);

export const sendChanllenge = (data) =>
  api()
    .post(`/puzzle/send_challenge`, data)
    .then((res) => res);
