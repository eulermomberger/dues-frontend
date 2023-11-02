export const readJsonFile = (file: Blob) => (
  new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        if (event.target) {
          resolve(JSON.parse(event.target.result as string));
        }
      };

      fileReader.onerror = (error) => reject(error);
      fileReader.readAsText(file);
    } catch(e) {
      reject(e);
    }
  })
);

export const formatDecimalNumber = (value: number | null, minimumFractionDigits = 2) => {
  if (!value) return '';

  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits }).format(value);
};
