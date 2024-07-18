const userInfo = {
    name : 'Bill',
    surname : 'Evans',
    age : 18,
    address : '7, Oxford street, London',
    tel : 4414706970568,
    email: 'evanstest@gmail.com',
}

const entries = Object.entries(userInfo);
entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})



























