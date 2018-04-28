import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
    {
        id : 'ABC001',
        username: 'idp',
        displayName: 'Igor 🦖',
        image: 'https://lh3.googleusercontent.com/-ST-kXHSFmFo/UvjbBK7yScI/AAAAAAAABms/-6LnXgjg5lI/w1510-h1510/IMG_0049.JPG'
    },
    {
        id : '1KING1',
        username: 'luffy',
        displayName: 'Monkey D. Luffy ☠️',
        image: 'https://media.giphy.com/media/c38j0QlrqWDIc/giphy.gif'
    },
    {
        id : 'RAAMEN',
        username: 'naruto',
        displayName: 'Uzumaki Naruto 🍜',
        image: 'https://media1.tenor.com/images/cf09eac13658bdf3d4e84b5718a50066/tenor.gif?itemid=4502687'
    },
];

// This would be done by the back-end of course
const generateId = (length=6) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
};

class UsersApi {

    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }

    static saveUser(user) {
        // to avoid manipulating object passed in.
        user = Object.assign({}, user); 
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                user.id = generateId(user);
                users.push(user);

                resolve(user);
            }, delay);
        });
    }

    static deleteUser(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const toDeleteindex = users.findIndex( user => user.id == userId );
                if(toDeleteindex === -1){ reject('Given ID is not valid'); }
                else{
                    users.splice(toDeleteindex, 1);
                    resolve();
                }
            }, delay);
        });
    }

}

export default UsersApi;