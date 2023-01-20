import { useState } from "react";
import firebase from "../firebase";
import { ref, getDatabase, push} from 'firebase/database';



const Form = () => {

    const [affirmationInput, setAffirmationInput] = useState("");

    const handleChange = (e) => {
        setAffirmationInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const db = getDatabase(firebase);
        const dbRef = ref(db);

        push(dbRef, affirmationInput);

        setAffirmationInput("");
    }


    return (
        <section className="inputForm wrapper">

            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="affirmationInput">
                    enter a affirmation that inspires you below
                </label>

                <input type="text" name="affirmationInput" onChange= {handleChange} value={affirmationInput} placeholder="ie. i am a successful front-end dev!"/>
                
                
                <button disabled={!affirmationInput}>submit</button>
            </form>

        </section>
    )
}

export default Form;