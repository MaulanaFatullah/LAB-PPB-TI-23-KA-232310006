const ProcessLogin = (userID, password, Users) => {
    const foundUser = Users.find(
        user => user.userID === userID && user.password === password
    );

    const isValidUser = Users.some(
        user => user.userID === userID && user.password === password
    );

    const userExists = Users.some(user => user.userID === userID);

    if (isValidUser) {
        return { success: true, message: `Selamat datang ${foundUser.fullname}!` };
    } else if (userID !== '' || password !== '') {
        if (userExists) {
            if (password === '') {
                return { success: false, message: 'Password tidak boleh kosong!' };
            } else {
                return { success: false, message: 'Password salah!' };
            }
        } else {
            if (userID === '') {
                return { success: false, message: 'User ID tidak boleh kosong!' };
            } else {
                return { success: false, message: `User ID '${userID}' tidak ditemukan!` };
            }
        }
    } else {
        return { success: false, message: 'User ID dan password tidak boleh kosong!' };
    }
};

export default ProcessLogin;
