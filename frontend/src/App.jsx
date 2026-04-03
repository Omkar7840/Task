import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';

const API_URL = 'http://localhost:5000/tasks';

const CATEGORIES = ['General', 'Work', 'Personal', 'Urgent', 'Study', 'Finance', 'Health', 'Home'];

function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', category: 'General', dueDate: '' });
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      setError('Failed to load tasks. Make sure your backend server is running.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.title.trim()) {
      setError('Task title is required.');
      return;
    }

    try {
      if (editingId) {
        const res = await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!res.ok) throw new Error('Failed to update');
      } else {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!res.ok) throw new Error('Failed to create');
      }

      setFormData({ title: '', description: '', category: 'General', dueDate: '' });
      setEditingId(null);
      fetchTasks();
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleComplete = async (task) => {
    try {
      await fetch(`${API_URL}/${task._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true })
      });
      fetchTasks();
    } catch (err) {
      setError('Failed to mark as complete.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchTasks();
    } catch (err) {
      setError('Failed to delete task.');
    }
  };

  const startEdit = (task) => {
    setEditingId(task._id);
    setFormData({
      title: task.title,
      description: task.description || '',
      category: task.category || 'General',
      dueDate: task.dueDate ? task.dueDate.split('T')[0] : ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ title: '', description: '', category: 'General', dueDate: '' });
  };

  const filteredTasks = activeCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Task</h1>
          <p className="mt-2 text-lg text-slate-600">Organize your work, stay on track.</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <TaskForm 
          formData={formData} 
          setFormData={setFormData} 
          onSubmit={handleSubmit} 
          editingId={editingId} 
          onCancel={cancelEdit} 
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-2">Your Tasks</h2>
          
          <CategoryFilter 
            categories={CATEGORIES} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />

          <TaskList 
            tasks={filteredTasks} 
            onComplete={handleComplete} 
            onEdit={startEdit} 
            onDelete={handleDelete} 
          />
        </div>

      </div>
    </div>
  );
}

export default App;