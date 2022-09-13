import { motion } from "framer-motion";
import { useRouter } from "next/router";

const router = useRouter();
    const { id } = router.query;
    const data = id == "bandvit" ? bandvit :
        id == "connectivitieee" ? connectivitieee :
            id == "diseno" ? diseno :
                id == "glitz" ? glitz :
                    id == "qubit" ? qubit :
                        id == "srishti" ? srishti :
                            id == "taikuun" ? taikuun :
                                id == "lilacs" ? vitlilacs :
                                    id == "vitness" ? vitness :
                                        id == "vsplash" ? vsplash : [];

    const slug = ["bandvit", "connectivitieee", "diseno", "glitz", "qubit", "srishti", "taikuun", "lilacs", "vitness", "vsplash"];



const School = () => {
    return (
        <div>
            
        </div>
    )
}

export default School
