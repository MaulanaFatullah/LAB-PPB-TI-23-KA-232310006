const fs = require('fs');
const path = require('path');

// Ambil nama komponen dari argumen terminal
const componentName = process.argv[2];

if (!componentName) {
  console.log('❌ Harap masukkan nama komponen!');
  process.exit(1);
}

const fileName = `${componentName}.js`;
const filePath = path.join(__dirname, fileName);

// Isi template komponen React Native
const content = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ${componentName} = () => {
  return (
    <View style={styles.container}>
      <Text>${componentName} Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ${componentName};
`;

if (fs.existsSync(filePath)) {
  console.log('⚠️ File sudah ada. Gagal membuat ulang.');
} else {
  fs.writeFileSync(filePath, content);
  console.log(`✅ Komponen ${fileName} berhasil dibuat!`);
}
