'use client';

import { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2, Loader2, Calendar } from 'lucide-react';
import styles from '../admin.module.css';

interface HackathonEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  status: 'draft' | 'published' | 'completed';
  participantsCount?: number;
}

export default function EventsManagement() {
  const [events, setEvents] = useState<HackathonEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', slug: '', startDate: '', endDate: '' });

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/events');
        if (res.ok) {
          const data = await res.json();
          setEvents(data);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const getStatusBadgeClass = (status: string) => {
    return `${styles.badge} ${styles[status] || ''}`;
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug || !formData.startDate || !formData.endDate) {
      return alert("Please fill all fields");
    }
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.status === 401) {
        alert('Your session has expired. Please log in again.');
        window.location.href = '/admin/login';
        return;
      }
      if (res.ok) {
        const newEvent = await res.json();
        setEvents([newEvent, ...events]);
        setIsModalOpen(false);
        setFormData({ title: '', slug: '', startDate: '', endDate: '' });
      } else {
        const err = await res.json();
        alert(err.error || "Failed to create event");
      }
    } catch {
      alert("Error creating event");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;
    
    try {
      const res = await fetch(`/api/events?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEvents(events.filter(event => event.id !== id));
      } else {
        alert('Failed to delete event.');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Network error.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Events Management</h1>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          <Plus size={18} />
          <span>Create Event</span>
        </button>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px', width: '400px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ color: 'white', marginTop: 0, marginBottom: '1.5rem' }}>Create New Event</h2>
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input placeholder="Event Title (e.g. Urban Tech 2026)" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} style={{ padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} required />
              <input placeholder="URL Slug (e.g. urban-tech-2026)" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')})} style={{ padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} required />
              <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '-0.5rem' }}>Start Date</label>
              <input type="date" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} style={{ padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} required />
              <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '-0.5rem' }}>End Date</label>
              <input type="date" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} style={{ padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} required />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '0.75rem', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ flex: 1, padding: '0.75rem', background: '#6C63FF', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Create</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={styles.tableContainer}>
        {loading ? (
          <div className={styles.loading}>
            <Loader2 className={styles.spinner} size={32} />
            <p>Loading events...</p>
          </div>
        ) : events.length === 0 ? (
          <div className={styles.empty}>
            <Calendar size={48} opacity={0.5} />
            <p>No events found. Create your first hackathon event!</p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Participants</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td style={{ fontWeight: 500 }}>{event.title}</td>
                    <td>{new Date(event.startDate).toLocaleDateString()}</td>
                    <td>{new Date(event.endDate).toLocaleDateString()}</td>
                    <td>
                      <span className={getStatusBadgeClass(event.status)}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                    </td>
                    <td>{event.participantsCount || 0}</td>
                    <td>
                      <div className={styles.actions}>
                        <button className={styles.actionBtn} title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <button 
                          className={`${styles.actionBtn} ${styles.delete}`} 
                          title="Delete"
                          onClick={() => handleDelete(event.id)}
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
