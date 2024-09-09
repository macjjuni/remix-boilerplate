import {useParams} from 'react-router';

export default function ArchiveId() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            Archive ID: {id}
        </div>
    );
};
