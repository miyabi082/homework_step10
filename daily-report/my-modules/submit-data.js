import { getFirestore, collection, addDoc } from "firebase/firestore";

// Cloud firestoreにデータを送信する
export const submitData = async (e, addDoc, collection, db) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    try {
      const docRef = await addDoc(collection(db, "reports"), {
        data: new Date().toLocaleString('ja-JP'),
        name: formData.get("name"),
        work: formData.get("work"),
        comment: formData.get("comment")
      });
      console.log("document written with ID: ", docRef.id);
      // 送信後にhistory.htmlにリダイレクト
      window.location.href = './history.html';
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};