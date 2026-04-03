import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
  const mockTask = {
    _id: '123',
    title: 'Test Unit Testing',
    description: 'Write some tests for the project',
    category: 'Urgent',
    dueDate: '2026-04-14T00:00:00.000Z',
    completed: false
  };

  it('renders the task title, description, and category', () => {
    render(
      <TaskItem 
        task={mockTask} 
        onComplete={() => {}} 
        onEdit={() => {}} 
        onDelete={() => {}} 
      />
    );

    expect(screen.getByText('Test Unit Testing')).toBeTruthy();
    expect(screen.getByText('Write some tests for the project')).toBeTruthy();
    expect(screen.getByText('Urgent')).toBeTruthy();
  });

  it('calls the onDelete function when the Delete button is clicked', () => {
    const handleDeleteSpy = vi.fn();

    render(
      <TaskItem 
        task={mockTask} 
        onComplete={() => {}} 
        onEdit={() => {}} 
        onDelete={handleDeleteSpy} 
      />
    );

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(handleDeleteSpy).toHaveBeenCalledWith('123');
  });
});