
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { EditNews } from './EditNews';
import { useEffect, useState } from 'react';
import { db } from '@/firebase/firebase';
import { EditProduct } from './EditProduct';

export const EditProductForm = ({ productId }) => {
    const [initialData, setInitialData] = useState(null);
    console.log(productId)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const docRef = doc(db, 'products', productId);
            const documentSnapshot = await getDoc(docRef);
            console.log(documentSnapshot)

            if (documentSnapshot.exists()) {
              setInitialData({ id: documentSnapshot.id, ...documentSnapshot.data() });
              console.log(initialData, "Adsadas")
            }
          } catch (error) {
            console.error('Error retrieving document:', error);
          }
        };
    
        fetchData();
      }, [productId]);
    

  if (!initialData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
      <EditProduct documentId={initialData.id} initialData={initialData} />
  );
};
