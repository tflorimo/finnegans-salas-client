import { useEffect, useState } from 'react';
import { adminService } from '../../../services/admin/admin.service';
import type { AuditDTO } from '../../../services/admin/audits/types';

export const useAllAuditsFetch = () => {
  const [audits, setAudits] = useState<AuditDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllAudits = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await adminService.getAllAudits();
        setAudits(response.items || []);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Error fetching audits';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllAudits();
  }, []);

  return { audits, loading, error };
};
