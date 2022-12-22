import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const indexedDb = (database, collection, userinfo) => {
    const indexedDB = window.indexedDB || window.webkitIndexedDB

    const request = indexedDB.open(database, 1);

    request.onerror = (event) => {
        console.log(event);
    }

    request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(collection)) {
            db.createObjectStore(collection, {
                keyPath: 'id'
            }, { autoincrement: true })
        }
    }
    request.onsuccess = () => {
        console.log('db connection success');

        const db = request.result;
        const transaction = db.transaction(collection, "readwrite");

        const store = transaction.objectStore(collection);
        const users = store.put({
            id: Math.floor(Math.random()*10000 ),
            Type: userinfo.Type,
            Breed: userinfo.Breed,
            Name: userinfo.Name,
            Email: userinfo.Email,
            Phone: userinfo.Phone
        });
        users.onsuccess = () => {
            transaction.oncomplete = () => {
                db.close();
            }
            toast.success("data added to indexedDB", {
                theme: "dark",
            });

            users.onerror = (event) => {
                console.log(event);
                toast.error("error occured", {
                    theme: "dark",
                });
            }
        }

    }

<ToastContainer/>
}