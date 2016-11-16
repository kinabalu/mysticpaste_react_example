import delay from './delay';
import uuid from 'node-uuid';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const pastes = [
  {
    id: 'gF3FA',
    code: "print 'Hello, World!'",
    created_at: "2016-03-07T09:00:00.000Z"
  },
  {
    id: 'aF3Bz',
    code: "print 'Hello, World!'",
    created_at: "2016-11-07T09:00:00.000Z"
  },
];

const generateId = () => {
  let length = 5;
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

class PasteApi {
  static getAllPastes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], pastes));
      }, delay);
    });
  }

  static getPasteById(pasteId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingPasteIndex = pastes.findIndex(a => a.id == pasteId);
        resolve(pastes[existingPasteIndex]);
      }, delay);
    });
  }

  static savePaste(paste) {
    paste = Object.assign({}, paste); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minCourseTitleLength = 1;
        // if (course.title.length < minCourseTitleLength) {
        //   reject(`Title must be at least ${minCourseTitleLength} characters.`);
        // }

        if (paste.id) {
          const existingPasteIndex = pastes.findIndex(a => a.id == paste.id);
          pastes.splice(existingPasteIndex, 1, paste);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          paste.id = generateId(paste);
          pastes.push(paste);
        }
        console.log("mockPasteApi", pastes);
        resolve(paste);
      }, delay);
    });
  }

  static deletePaste(pasteId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPasteToDelete = pastes.findIndex(paste => {
          paste.id == pasteId;
        });
        pastes.splice(indexOfPasteToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PasteApi;
