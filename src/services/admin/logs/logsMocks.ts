import type { LogDTO } from './types';

//TODO: A corroborar con backend
export const mockLogsData: LogDTO[] = [
  {
    id: '1',
    timestamp: '2024-03-15T10:30:00.000Z',
    action: 'Login exitoso',
    status: 'success',
    userName: 'Juan Pérez'
  },
  {
    id: '2', 
    timestamp: '2024-03-15T10:25:00.000Z',
    action: 'Intento de login fallido',
    status: 'warning',
    userName: 'María González'
  },
  {
    id: '3',
    timestamp: '2024-03-15T10:20:00.000Z', 
    action: 'Reserva creada',
    status: 'info',
    userName: 'Carlos Rodriguez',
    roomName: 'Sala de Reuniones A'
  },
  {
    id: '4',
    timestamp: '2024-03-15T10:15:00.000Z',
    action: 'Error en el sistema',
    status: 'error'
  },
  {
    id: '5',
    timestamp: '2024-03-15T10:10:00.000Z',
    action: 'Reserva cancelada', 
    status: 'warning',
    userName: 'Ana Silva',
    roomName: 'Sala de Conferencias B'
  },
  {
    id: '6',
    timestamp: '2024-03-15T10:05:00.000Z',
    action: 'Usuario creado',
    status: 'success',
    userName: 'Admin'
  },
  {
    id: '7',
    timestamp: '2024-03-15T10:00:00.000Z',
    action: 'Backup completado',
    status: 'success'
  },
  {
    id: '8',
    timestamp: '2024-03-15T09:55:00.000Z',
    action: 'Configuración actualizada',
    status: 'info',
    userName: 'Admin'
  },
  {
    id: '9',
    timestamp: '2024-03-15T09:50:00.000Z',
    action: 'Fallo en la conexión',
    status: 'error'
  },
  {
    id: '10',
    timestamp: '2024-03-15T09:45:00.000Z',
    action: 'Sala modificada',
    status: 'info',
    userName: 'Luis Martínez',
    roomName: 'Sala de Eventos'
  }
];
