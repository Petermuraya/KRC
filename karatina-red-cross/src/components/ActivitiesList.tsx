// src/components/ActivitiesList.tsx
import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/apiService';

const ActivitiesList: React.FC = () => {
    const [activities, setActivities] = useState<any[]>([]);

    useEffect(() => {
        const fetchActivities = async () => {
            const data = await getActivities();
            setActivities(data);
        };

        fetchActivities();
    }, []);

    return (
        <div>
            <h2>Activities List</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.title} - {activity.date} at {activity.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default ActivitiesList;
