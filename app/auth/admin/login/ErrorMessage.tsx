import React from 'react';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  error ? (
    <div className="text-red-500 mb-4 text-center bg-red-50 p-3 rounded-lg">
      {error}
    </div>
  ) : null
);

export default ErrorMessage;