const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore({
    projectId: 'submissionmlgc-agung',
    keyFilename: './credentials/submissionmlgc-agung-f60635f1fdf4.json'
  });

  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;