// components 
import AffirmationItem from "./AffirmationItem";
import Form from "./Form";

//useState,useEffect
import { useEffect, useState } from "react";

// firebase
import firebase from "../firebase";
import { getDatabase, onValue, ref, remove } from "firebase/database";


const AffirmationWall = () => {

    // initialize state for data recieved from firebase
    const [ affirmations, setAffirmations ] = useState([]);

    // call useEffect to retrieve data from firebase
    useEffect(() => {
        
        // variable that holds the database details
        const db = getDatabase(firebase)

        // variable to make reference to the database details
        const dbRef = ref(db)

        onValue(dbRef, (dbResponse) => {
            const data = dbResponse.val();

            const arrayOfAffirmations = [];

            for (let key in data) {
                arrayOfAffirmations.push({
                    affirmation: data[key],
                    id: key
                });
            }

            setAffirmations(arrayOfAffirmations);
            
        })
    }, [])

    // handleClick function to remove our affirmations - passed to AffirmationItem via props

    const handleClick = (itemKey) => {
        const db = getDatabase(firebase);

        const dbRef = ref(db, `/${itemKey}`);

        remove(dbRef);
    }


    return (
        
        <>

        <main>

            <Form />

            <section className="affirmationWall wrapper">
            {/* map through our array of affirmations and return an AffirmationItem for each */}
            <ul>
                    {
                        affirmations.map((item) => {
                            return (
                                <AffirmationItem key={item.id} title={item.affirmation} click={ () => {
                                    handleClick(item.id) }} />

                            )
                        })
                    }
                </ul>
                
            </section>
            
        </main>

        </>
    )
}

export default AffirmationWall;