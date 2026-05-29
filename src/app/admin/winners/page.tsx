'use client';

import { useEffect, useState } from 'react';
import { Loader2, Trophy, Plus, Edit2, Trash2 } from 'lucide-react';
import styles from '../admin.module.css';

interface Winner {
  id: string;
  projectName: string;
  teamName: string;
  eventName: string;
  awardCategory: string;
  prizeAmount: string;
}

export default function WinnersManagement() {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<{id: string, title: string}[]>([]);
  const [formData, setFormData] = useState({ projectName: '', teamName: '', category: '', eventId: '' });

  useEffect(() => {
    async function fetchWinners() {
      try {
        const res = await fetch('/api/winners');
        if (res.ok) {
          const data = await res.json();
          const formatted = data.map((w: any) => ({
            id: w.id,
            projectName: w.projectName,
            teamName: w.teamName,
            eventName: w.event?.title || 'Global',
            awardCategory: w.category,
            prizeAmount: 'N/A' // Not in schema currently
          }));
          setWinners(formatted);
        } else {
          setWinners([]);
        }
      } catch (error) {
        console.error('Failed to fetch winners:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchWinners();

    fetch('/api/events').then(r => r.ok && r.json()).then(setEvents).catch(() => {});
  }, []);

  const handleAnnounce = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectName || !formData.teamName || !formData.category || !formData.eventId) {
      return alert("Please fill all fields");
    }
    try {
      const res = await fetch('/api/winners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, members: '[]' })
      });
      if (res.ok) {
        const newWinner = await res.json();
        const event = events.find(ev => ev.id === formData.eventId);
        setWinners([...winners, { 
          id: newWinner.id, 
          projectName: newWinner.projectName, 
          teamName: newWinner.teamName, 
          eventName: event?.title || 'Global', 
          awardCategory: newWinner.category, 
          prizeAmount: 'N/A' 
        }]);
        setIsModalOpen(false);
        setFormData({ projectName: '', teamName: '', category: '', eventId: '' });
      } else {
        alert("Failed to announce winner");
      }
    } catch {
      alert("Error announcing winner");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this winner?')) return;
    try {
      const res = await fetch(`/api/winners?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setWinners(winners.filter(w => w.id !== id));
      } else {
        alert('Failed to delete.');
      }
    } catch {
      alert('Error deleting winner.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Winners Management</h1>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          <Plus size={18} />
          <span>Announce Winner</span>
        </button>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px', width: '400px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ color: 'white', marginTop: 0, marginBottom: '1.5rem' }}>Announce Winner</h2>
            <form onSubmit={handleAnnounce} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input placeholder="Project Name" value={formData.projectName} onChange={e => setFormData({...formData, projectName: e.target.value})} style={{ padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} required />
              <input placeholder="Team / Participant Name" value={formData.teamName} onChange={e => setFormData({...formData, teamName: e.target.value})} style={{ padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} required />
              <input placeholder="Award Category (e.g. 1st Place)" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} style={{ padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} required />
              <select value={formData.eventId} onChange={e => setFormData({...formData, eventId: e.target.value})} style={{ padding: '0.75rem', borderRadius: '6px', background: 'var(--bg-secondary)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} required>
                <option value="">Select Event</option>
                {events.map(ev => <option key={ev.id} value={ev.id}>{ev.title}</option>)}
              </select>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '0.75rem', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ flex: 1, padding: '0.75rem', background: '#6C63FF', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Announce</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={styles.tableContainer}>
        {loading ? (
          <div className={styles.loading}>
            <Loader2 className={styles.spinner} size={32} />
            <p>Loading winners...</p>
          </div>
        ) : winners.length === 0 ? (
          <div className={styles.empty}>
            <Trophy size={48} opacity={0.5} />
            <p>No winners announced yet.</p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Team / Participant</th>
                  <th>Event</th>
                  <th>Award Category</th>
                  <th>Prize</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {winners.map((winner) => (
                  <tr key={winner.id}>
                    <td style={{ fontWeight: 500 }}>{winner.projectName}</td>
                    <td>{winner.teamName}</td>
                    <td>{winner.eventName}</td>
                    <td>
                      <span className={`${styles.badge} ${styles.published}`}>
                        {winner.awardCategory}
                      </span>
                    </td>
                    <td>{winner.prizeAmount}</td>
                    <td>
                      <div className={styles.actions}>
                        <button className={styles.actionBtn} title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <button className={`${styles.actionBtn} ${styles.delete}`} title="Remove" onClick={() => handleDelete(winner.id)}>
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
