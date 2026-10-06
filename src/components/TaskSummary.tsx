interface TaskSummaryProps {
  summary: {
    total: number;
    pending: number;
    completed: number;
  };
}

export default function TaskSummary({ summary }: TaskSummaryProps) {
  return (
    <dl className="summary">
      <div>
        <dt>Total</dt>
        <dd>{summary.total}</dd>
      </div>
      <div>
        <dt>Pendientes</dt>
        <dd>{summary.pending}</dd>
      </div>
      <div>
        <dt>Completadas</dt>
        <dd>{summary.completed}</dd>
      </div>
    </dl>
  );
}