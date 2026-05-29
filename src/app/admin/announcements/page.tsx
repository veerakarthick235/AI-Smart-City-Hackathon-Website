'use client';

import { useEffect, useState } from 'react';
import { Loader2, Plus, Edit2, Trash2, Megaphone } from 'lucide-react';
import styles from '../admin.module.css';

interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  event?: { title: string };
}

export default function AnnouncementsManagement() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const res = await fetch('/api/announcements');
        if (res.ok) {
          const data = await res.json();
          setAnnouncements(data);
        } else {
          setAnnouncements([
            { id: '1', title: 'Registration is Open!', content: 'Welcome to the 2026 Hackathon.', createdAt: new Date().toISOString() },
            { id: '2', title: 'New Prizes Announced', content: 'We just added $10,000 in new prizes.', createdAt: new Date().toISOString() }
          ]);
        }
      } catch (error) {
        console.error('Failed to fetch announcements:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAnnouncements();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;
    
    try {
      const res = await fetch(`/api/announcements?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setAnnouncements(announcements.filter(a => a.id !== id));
      } else {
        alert('Failed to delete announcement.');
      }
    } catch (error) {
      alert('Network error.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Announcements</h1>
        <button className={styles.button}>
          <Plus size={18} />
          <span>New Announcement</span>
        </button>
      </div>

      <div className={styles.tableContainer}>
        {loading ? (
          <div className={styles.loading}>
            <Loader2 className={styles.spinner} size={32} />
            <p>Loading announcements...</p>
          </div>
        ) : announcements.length === 0 ? (
          <div className={styles.empty}>
            <Megaphone size={48} opacity={0.5} />
            <p>No announcements published yet.</p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content Preview</th>
                  <th>Date Posted</th>
                  <th>Event</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map((announcement) => (
                  <tr key={announcement.id}>
                    <td style={{ fontWeight: 500 }}>{announcement.title}</td>
                    <td>
                      {announcement.content.length > 50 
                        ? `${announcement.content.substring(0, 50)}...` 
                        : announcement.content}
                    </td>
                    <td>{new Date(announcement.createdAt).toLocaleDateString()}</td>
                    <td>{announcement.event?.title || 'Global'}</td>
                    <td>
                      <div className={styles.actions}>
                        <button className={styles.actionBtn} title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <button 
                          className={`${styles.actionBtn} ${styles.delete}`} 
                          title="Delete"
                          onClick={() => handleDelete(announcement.id)}
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
