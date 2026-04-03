export default function TaskItem({ task, onComplete, onEdit, onDelete }) {
  const formattedDate = task.dueDate 
    ? new Date(task.dueDate).toLocaleDateString('en-US') 
    : '';

  return (
    <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        
        <div className="flex-1 space-y-2">
          
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className={`text-xl font-bold ${task.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
              {task.title}
            </h3>
            {task.category && (
              <span className="px-2.5 py-0.5 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100">
                {task.category}
              </span>
            )}
          </div>
          
          {task.description && (
            <p className={`text-sm ${task.completed ? 'text-slate-400' : 'text-slate-600'}`}>
              {task.description}
            </p>
          )}
          
          {task.dueDate && (
            <div className="flex items-center text-sm text-slate-500 font-medium pt-1">
              <svg className="mr-1.5 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Due: {formattedDate}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto justify-end">
          
          {!task.completed && (
            <button 
              onClick={() => onComplete(task)} 
              className="flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Done
            </button>
          )}
          
          <button 
            onClick={() => onEdit(task)} 
            className="flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit
          </button>
          
          <button 
            onClick={() => onDelete(task._id)} 
            className="flex items-center gap-1.5  bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>

        </div>
        
      </div>
    </div>
  );
}