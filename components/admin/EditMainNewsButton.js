import { db } from "@/firebase/firebase";
import { Button } from "@chakra-ui/react";
import { collection, getDocs, query, where, writeBatch } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";


const EditMainNewsButton = ({ itemId }) => {
    const handleChecklist = async () => {
    
        try {
            const batch = writeBatch(db);

            const newsRef = collection(db, 'news');
            const querySnapshot = await getDocs(query(newsRef));
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                console.log(itemId , ": item id")
                console.log(doc.id , ": doc id")

              if (doc.id === itemId) {
                console.log(itemId)
                // Update the clicked item's mainNews to true
                batch.update(doc.ref, { mainNews: true });
              } else {
                // Update other items' mainNews to false
                batch.update(doc.ref, { mainNews: false });
              }
            });
        
            await batch.commit();
          toast.success("Main news item updated successfully!")
          console.log("Main news item updated successfully!");
        } catch (error) {
            toast.error('Fail :' + error.message);

          console.error("Error updating main news item: ", error);
        }
      };

  return (
    <Button onClick={handleChecklist}>
      Set as Main News
    </Button>
  );
}

export { EditMainNewsButton };