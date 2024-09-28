// src/components/MembersList.tsx
//displaying members and activities and handling member registration.
import React, { useEffect, useState } from 'react';
import { getMembers } from '../services/apiService';

const MembersList: React.FC = () => {
    const [members, setMembers] = useState<any[]>([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const data = await getMembers();
            setMembers(data);
        };

        fetchMembers();
    }, []);

    return (
        <div>
            <h2>Members List</h2>
            <ul>
                {members.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MembersList;
