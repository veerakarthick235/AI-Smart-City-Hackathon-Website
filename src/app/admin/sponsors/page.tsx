'use client';

import { useEffect, useState } from 'react';
import { Loader2, Plus, Edit2, Trash2, Handshake } from 'lucide-react';
import styles from '../admin.module.css';

interface Sponsor {
  id: string;
  name: string;
  url: string;
  tier: string;
  event?: { title: string };
}

export default function SponsorsManagement() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSponsors() {
      try {
        const res = await fetch('/api/sponsors');
        if (res.ok) {
          const data = await res.json();
          setSponsors(data);
        } else {
          setSponsors([
            { id: '1', name: 'Google Cloud', tier: 'platinum', url: 'https://cloud.google.com' },
            { id: '2', name: 'GitHub', tier: 'gold', url: 'https://github.com' }
          ]);
        }
      } catch (error) {
        console.error('Failed to fetch sponsors:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchSponsors();
  }, []);

  const getTierBadgeClass = (tier: string) => {
    return `${styles.badge} ${styles[tier] || ''}`;
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this sponsor?')) return;
    
    try {
      const res = await fetch(`/api/sponsors?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setSponsors(sponsors.filter(s => s.id !== id));
      } else {
        alert('Failed to delete sponsor.');
      }
    } catch (error) {
      alert('Network error.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sponsors Management</h1>
        <button className={styles.button}>
          <Plus size={18} />
          <span>Add Sponsor</span>
        </button>
      </div>

      <div className={styles.tableContainer}>
        {loading ? (
          <div className={styles.loading}>
            <Loader2 className={styles.spinner} size={32} />
            <p>Loading sponsors...</p>
          </div>
        ) : sponsors.length === 0 ? (
          <div className={styles.empty}>
            <Handshake size={48} opacity={0.5} />
            <p>No sponsors added yet.</p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Tier</th>
                  <th>Website URL</th>
                  <th>Event</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sponsors.map((sponsor) => (
                  <tr key={sponsor.id}>
                    <td style={{ fontWeight: 500 }}>{sponsor.name}</td>
                    <td>
                      <span className={getTierBadgeClass(sponsor.tier || 'partner')}>
                        {(sponsor.tier || 'partner').toUpperCase()}
                      </span>
                    </td>
                    <td>{sponsor.url || '-'}</td>
                    <td>{sponsor.event?.title || 'Global'}</td>
                    <td>
                      <div className={styles.actions}>
                        <button className={styles.actionBtn} title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <button 
                          className={`${styles.actionBtn} ${styles.delete}`} 
                          title="Delete"
                          onClick={() => handleDelete(sponsor.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
