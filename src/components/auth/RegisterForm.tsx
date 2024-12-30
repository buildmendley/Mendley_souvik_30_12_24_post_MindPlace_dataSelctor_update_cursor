import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/auth';
import { saveUser } from '../../utils/auth';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const user: User = {
      id: crypto.randomUUID(),
      email: formData.email,
      name: formData.name,
      createdAt: new Date().toISOString()
    };

    saveUser(user);
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-ocean focus:ring-1 focus:ring-ocean"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

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
          minLength={6}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-ocean focus:ring-1 focus:ring-ocean"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-secondary mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          required
          minLength={6}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-ocean focus:ring-1 focus:ring-ocean"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-ocean-dark text-white py-2 rounded-lg hover:bg-ocean transition mt-6"
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;