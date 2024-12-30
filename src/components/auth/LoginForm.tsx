import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utils/auth';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const user = getUser();
    if (user?.email === formData.email) {
      // Save auth state
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-ocean focus:ring-1 focus:ring-ocean"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-ocean focus:ring-1 focus:ring-ocean"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-ocean-dark text-white py-2 rounded-lg hover:bg-ocean transition mt-6"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;