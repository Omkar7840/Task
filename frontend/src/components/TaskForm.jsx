export default function TaskForm({ formData, setFormData, onSubmit, editingId, onCancel }) {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-indigo-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white">{editingId ? 'Edit Task' : 'Create New Task'}</h2>
      </div>
      <form onSubmit={onSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Task Title *</label>
            <input 
              type="text" name="title" value={formData.title} onChange={handleInputChange}
              className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm"
              placeholder="What needs to be done?"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea 
              name="description" value={formData.description} onChange={handleInputChange} rows="2"
              className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm"
              placeholder="Add some details..."
            />
          </div>

<div>
  <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
  <select 
    name="category" 
    value={formData.category} 
    onChange={handleInputChange}
    className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm bg-white cursor-pointer"
  >
    <option value="General">General</option>
    <option value="Work">Work</option>
    <option value="Personal">Personal</option>
    <option value="Urgent">Urgent</option>
    <option value="Study">Study</option>
    <option value="Finance">Finance</option>
    <option value="Health">Health</option>
    <option value="Home">Home</option>
  </select>
</div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Due Date</label>
            <input 
              type="date" name="dueDate" value={formData.dueDate} onChange={handleInputChange}
              className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm text-slate-600"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm transition-colors duration-200">
            {editingId ? 'Save Changes' : 'Add Task'}
          </button>
          {editingId && (
            <button type="button" onClick={onCancel} 
              className="text-slate-500 hover:text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}