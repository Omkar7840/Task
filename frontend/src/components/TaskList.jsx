import TaskItem from './TaskItem';

export default function TaskList({ tasks, onComplete, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
        <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-slate-900">No tasks</h3>
        <p className="mt-1 text-sm text-slate-500">Get started by creating a new task above.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-2">Your Tasks</h2>
      <div className="grid gap-4">
        {tasks.map(task => (
          <TaskItem 
            key={task._id} 
            task={task} 
            onComplete={onComplete} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
}