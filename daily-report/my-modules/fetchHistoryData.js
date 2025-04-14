import { getFirestore, collection, getDocs } from "firebase/firestore";

// Cloud Firestoreから取得したデータを表示する
export const fetchHistoryData = async (getDocs, collection, db) => {
    let tags = "";
    try {
        // reportsのコレクションのデータを取得
        const querySnapshot = await getDocs(collection(db, "reports"));

        // データをテーブル表の形式に合わせてHTMLに挿入
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            tags += `<tr>
                <td>${data.data}</td>
                <td>${data.name}</td>
                <td>${data.work}</td>
                <td>${data.comment}</td>
            </tr>`;
        });
        
        // テーブルボディにデータを挿入
        const tableBody = document.getElementById("js-history");
        if (tableBody) {
            tableBody.innerHTML = tags;
        }
    } catch (error) {
        console.error("Error fetching documents: ", error);
    }
};