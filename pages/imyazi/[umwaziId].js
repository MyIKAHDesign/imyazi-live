import {useRouter} from 'next/router'

export default function Umwazi(){
    const router = useRouter;
    const umwaziId = router.querry.umwaziId;

    return (
        <div>
            <title>Umwazi mu Kifuliiru. Kifuliiru ndeto ye' Bufuliiru</title>
            <h4>Umwazi. {umwaziId}</h4>
        </div>
    );
}