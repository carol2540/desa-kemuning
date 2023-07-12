
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { EditNews } from './EditNews';
import { useEffect, useState } from 'react';
import { db } from '@/firebase/firebase';

export const EditForm = ({ newsId }) => {
    const [initialData, setInitialData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const docRef = doc(db, 'news', newsId);
            const documentSnapshot = await getDoc(docRef);
            if (documentSnapshot.exists()) {
              setInitialData({ id: documentSnapshot.id, ...documentSnapshot.data() });
            }
          } catch (error) {
            console.error('Error retrieving document:', error);
          }
        };
    
        fetchData();
      }, [newsId]);
    

  if (!initialData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
      <EditNews documentId={initialData.id} initialData={initialData} />
  );
};
