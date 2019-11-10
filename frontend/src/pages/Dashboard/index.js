import React from 'react';
import api from '~/services/api';
// import { Container } from './styles';

export default function SignUp() {
  api.get('appointments?page=1');
  return <h1>Dash</h1>;
}
