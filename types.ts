
export type UserRole = 'parent' | 'agent' | 'admin';

export enum TicketStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  CLOSED = 'Closed'
}

export enum Urgency {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High'
}

export interface Ticket {
  id: string;
  subject: string;
  category: string;
  lastUpdated: string;
  priority: Urgency;
  status: TicketStatus;
  requesterName: string;
  requesterEmail: string;
}

export interface Message {
  id: string;
  sender: string;
  role: string;
  timestamp: string;
  content: string;
  isAgent: boolean;
  avatar?: string;
  attachment?: {
    name: string;
    size: string;
    type: string;
  };
}
