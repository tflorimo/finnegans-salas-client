import { useEffect, useState } from 'react';
import { adminService } from '../../../services/admin/adminService';
import type { LogDTO } from '../../../services/admin/logs/types';

export const useLogsFetch = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [logs, setLogs] = useState<LogDTO[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await adminService.getLogs();
        setLogs(data);
      } catch (err) {
        console.error('Error al cargar los logs:', err);
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    loadLogs();
  }, []);

  return { loading, logs, error };
};
