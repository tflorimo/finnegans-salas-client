import { useEffect, useState } from 'react';
import { adminService } from '../../../services/admin/admin.service';
import type { EventListItemDTO } from '../../../services/admin/admin.types';

export const useAllEventsFetch = () => {
  const [events, setEvents] = useState<EventListItemDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await adminService.getAllEvents();
        setEvents(response.items || []);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Error fetching events';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllEvents();
  }, []);

  return { events, loading, error };
};
