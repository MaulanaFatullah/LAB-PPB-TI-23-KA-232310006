  const HandleLogin = () => {
    // Menggunakan method find() untuk mencari user yang cocok
    const foundUser = Users.find(
      user => user.userID === userID && user.password === password
    );

    // Menggunakan method some() untuk validasi tambahan
    const isValidUser = Users.some(
      user => user.userID === userID && user.password === password
    );

    if (isValidUser) {
      Alert.alert('Login Berhasil', `Selamat datang ${foundUser.name}!`);
    } else {
      Alert.alert('Gagal Login', 'userID atau password salah!');
    }
  };