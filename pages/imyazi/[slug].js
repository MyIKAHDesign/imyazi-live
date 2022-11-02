import {useRouter} from 'next/router'

export default function Umwazi(){
    const router = useRouter;
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    const umwaziId = router.querry.umwaziId;

    return (
        <div>
            <title>Umwazi mu Kifuliiru. Kifuliiru ndeto ye' Bufuliiru</title>
            <h4>Umwazi.</h4>
        </div>
    );
}